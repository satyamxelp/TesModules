const express = require('express');
const router = express.Router();
const userController = require('../Controller/controller')
const { authenticationMiddleware } = require('../middleware'); 

router.get('/details/:user_id', userController.getUserDetails);

router.put('/update/:user_id',authenticationMiddleware,userController.updateUserDetails);

router.get('/image/:user_id', userController.getUserImage);

router.post('/insert',  authenticationMiddleware,userController.insertUser);

router.delete('/delete/:user_id', userController.deleteUser);

module.exports = router;
