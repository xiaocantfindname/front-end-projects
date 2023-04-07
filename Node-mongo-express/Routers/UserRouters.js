const mongoose = require("mongoose");
const User = mongoose.model('posts');

const express = require('express');
const router = express.Router();

const userController = require('../Controllers/UserController');

router.get('/', userController.baseRoute);
router.post('/create', userController.create);
router.post('/edit/:id', userController.edit);
router.delete('/delete/:id', userController.delete);
router.get('/getAll',userController.getAll);

module.exports = router;