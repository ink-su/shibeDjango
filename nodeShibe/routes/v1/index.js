const passport = require('passport');
const express = require('express');
const router = express.Router();


require('../../middleware/passport.middleware')(passport)

const UserController = require('./user.controller');
const TaskController = require('./task.controller'); 

router.post('/users/register', UserController.register);    
router.post('/users/login', UserController.login);

router.get('/task',passport.authenticate('jwt',{session:false}), TaskController.getAll);
module.exports = router;
