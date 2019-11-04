
const TravelInfo = require('../models/travel-info');

exports.createdTravelInfo = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const travelInfo = new TravelInfo({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imagePath: url +'/images/' + req.file.filename,
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
       res.status(404).json({message: 'Post not found!'});
     }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching post failed!'
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
      message: 'Couldn\'t update post!'
    });
  });
}

exports.deleteTravelInfo =  (req, res, next) => {
  // delete data from database
  TravelInfo.deleteOne({_id: req.params.id}).then(
    result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({message: 'Deletion successful!'});
      } else {
        res.status(401).json({message: 'Not authorized!'});
      }
   })
   .catch(error => {
     res.status(500).json({
       message: 'Fetching posts failed!'
     });
   })
};