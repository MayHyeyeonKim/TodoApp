const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');
const router = express.Router();

//register endpoint
router.post("/",userController.createUser);
router.post("/login",userController.loginWithEmail)

// Extract the userID from the token, find the user object using that ID, and send the user object to the front eng
router.get("/me",  authController.authenticate, userController.getUser);
module.exports = router;
