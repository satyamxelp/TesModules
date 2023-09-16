const express = require('express');
const router = express.Router();
const userController = require('../Controller/controller');
const { authenticateUser } = require('../middleware'); 


router.post('/register', userController.RegisterUser);

router.post('/login', userController.loginUser)

router.get('/details/:user_id', userController.getUserDetails);

router.put('/update/:user_id', authenticateUser, userController.updateUserDetails);

router.get('/image/:user_id', userController.getUserImage);

router.post('/insert',authenticateUser,userController.insertUser);

router.delete('/delete/:user_id', userController.deleteUser);


  

module.exports = router;
