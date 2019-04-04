
const express = require('express');

const mainRouter =  express.Router();

const { loadMainPage,
    deleteAStore,
    deleteAnItem,
    addStore,
    addItem} = require('../controllers/main');

mainRouter.post('/',loadMainPage);

mainRouter.post('./delete/store/:id',deleteAStore);

mainRouter.post('/delete/item/:id', deleteAnItem);

mainRouter.post('/add/store', addStore);

mainRouter.post('/add/item', addItem)

module.exports = mainRouter;