const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.authUser);
router.post('/logout', userController.logoutUser);
router.post('/register', userController.createUser);

module.exports = router;
