
const TravelInfo = require('../models/travel-info');
const Comment = require('../models/comment');

exports.createdTravelInfo = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const travelInfo = new TravelInfo({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imagePath: url +'/images/' + req.file.filename,
    creator: req.body.creator
  });
  travelInfo.save().then(createdTravelInfo => {
    res.status(201).json({
      message: 'Travel info added successfully',
      travelInfo: {
        ...createdTravelInfo,
        id: createdTravelInfo._id
      }
    });
  })
  .catch(error => {
     res.status(500).json({
       message: 'Creating a travel info failed!'
     })
  });
};

exports.getTravelInfos = (req, res, next) => {
  const travelInfoQuery = TravelInfo.find();
  travelInfoQuery.then(fetchedTravelInfos => {
    res.status(200).json({
      message: 'travel info collection fetched successfully!',
      travelInfoCollection: fetchedTravelInfos,
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching travel info collection failed!'
    })
  });
};

exports.getTravelInfo = (req, res, next) => {
  TravelInfo.findById(req.params.id).then(travelInfo => {
     if (travelInfo) {
       res.status(200).json(travelInfo);
     } else {
       res.status(404).json({message: 'Travel info not found!'});
     }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching travel info failed!'
    })
  });
};

exports.updateTravelInfo = (req, res, next) => {
  let imagePath; 
  if (req.file) {
    console.log('file: ' + req.protocol);
    const url = req.protocol + '://' + req.get('host');
    imagePath = url + '/images/' + req.file.filename
  } else {
    imagePath = req.body.imagePath;
  }
  const travelInfo = new TravelInfo({
    _id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imagePath: imagePath,
    creator: req.body.creator
  });
  TravelInfo.updateOne({_id: req.params.id}, travelInfo).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({ message: 'Update successful!' });
    } else {
      res.status(401).json({ message: 'Not authorized!' });
    }
  })
  .catch(error => {
    res.status(501).json({
      message: 'Couldn\'t update travel info!'
    });
  });
}

exports.deleteTravelInfo =  (req, res, next) => {
  // delete data from database
  TravelInfo.deleteOne({_id: req.params.id}).then(
    result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({message: 'Deletion travel infos successful!'});
      } else {
        res.status(401).json({message: 'Not authorized!'});
      }
   })
   .catch(error => {
     res.status(500).json({
       message: 'Fetching travel infos failed!'
     });
   })
};

exports.createdComment = (req, res, next) => {
  console.log('req: ' + JSON.stringify(req.body));
  const url = req.protocol + '://' + req.get('host');
  const comment = new Comment({
    travelInfoId: req.body.travelInfoId,
    name: req.body.name,
    comment: req.body.comment,
    creator: req.body.creator
  });
  comment.save().then(comment => {
    res.status(201).json({
      message: 'Comment added successfully',
      comment: {
        ...comment,
        id: comment._id
      }
    });
  })
  .catch(error => {
     res.status(500).json({
       message: 'Creating a comment failed!'
     })
  });
}

exports.getComments = (req, res, next) => {
  Comment.find({"travelInfoId": req.params.id}).then(comment => {
     if (comment) {
       res.status(200).json(comment);
     } else {
       res.status(404).json({message: 'Comment not found!'});
     }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching comment failed!'
    })
  });
};

exports.getComment = (req, res, next) => {
  Comment.findById(req.params.id).then(comment => {
     if (comment) {
       res.status(200).json(comment);
     } else {
       res.status(404).json({message: 'Comment not found!'});
     }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching comment info failed!'
    })
  });
};

exports.updateComment = (req, res, next) => {
  console.log('req: ' + JSON.stringify(req.body));
  const comment = new Comment({
    _id: req.body.id,
    comment: req.body.comment,
    travelInfoId: req.body.travelInfoId,
    creator: req.body.creator,
    name: req.body.name
  });
  Comment.updateOne({_id: req.params.id}, comment).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({ message: 'Update comment successful!' });
    } else {
      res.status(401).json({ message: 'Not authorized!' });
    }
  })
  .catch(error => {
    res.status(501).json({
      message: 'Couldn\'t update comment!'
    });
  });
}