const express = require('express');
const multer = require('multer');

const TravelInfoController = require('../controllers/travel-info');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, 'backend/images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

router.post(
  '/api/travel-info',
  multer({storage: storage}).single('image'),
  TravelInfoController.createdTravelInfo
);

router.post(
  '/api/travel-info/comment',
  TravelInfoController.createdComment
);

router.put('/api/travel-info/:id', multer({storage: storage}).single('image'), TravelInfoController.updateTravelInfo);

router.get('/api/travel-info',  TravelInfoController.getTravelInfos);

router.get('/api/travel-info/:id', TravelInfoController.getTravelInfo);

router.get('/api/travel-info/:id/comments', TravelInfoController.getComments);

router.get('/api/travel-info/comment/:id', TravelInfoController.getComment);

router.put('/api/travel-info/comment/:id', TravelInfoController.updateComment);

router.delete('/api/travel-info/:id', TravelInfoController.deleteTravelInfo);

module.exports = router;