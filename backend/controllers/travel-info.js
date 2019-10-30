
const TravelInfo = require('../models/travel-info');

exports.createdTravelInfo = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const travelInfo = new TravelInfo({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imagePath: url +'/images/' + req.file.filename
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
