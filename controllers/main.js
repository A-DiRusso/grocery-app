const User = require('../models/users');
const Store = require('../models/stores');

async function  loadMainPage(req, res) {
    //get items first
    // console.log("we are getting here");
    // console.log(req.session.stores)
    console.log("This is the store id from form:",req.body.id)
    const arrayOfItems = await Store.items(parseInt(req.body.id));
    console.log("items",arrayOfItems)
    const storeName = await Store.getById(req.body.id);
    res.render('main',{locals:{user:req.session.user,stores:req.session.stores,items:arrayOfItems,storeName:storeName.storeName}})

    //then render main with session vars and items.
}

module.exports = loadMainPage;