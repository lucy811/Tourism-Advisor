const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.post('/api/user/signup', UserController.createUser);

module.exports = router;