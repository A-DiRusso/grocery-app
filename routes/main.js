
const express = require('express');

const mainRouter =  express.Router();

const loadMainPage = require('../controllers/main');

mainRouter.post('/',loadMainPage);



module.exports = mainRouter;