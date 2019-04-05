const User = require('../models/users');
const Store = require('../models/stores');
const Item = require('../models/items');
const UserStore = require('../models/users-stores');

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

async function deleteAStore (req, res) {
    //the id will come on the req.params.id
    const storeID = req.params.id
    console.log("The store id to delete is ",storeID);

    //to delete a store, you need to delete all items for that store
    await Item.deleteByStoreID(storeID);

    //then delete the user-store references
    await UserStore.deleteAllStoreID(storeID);

    //then delete the store record...
    await Store.deleteStore(storeID);

    //then re-render the main page with the new list of stores
    const userStores = await req.session.userObject.stores;  //get a list of stores

    //re pull the stores based on req.sessions.id -- this is the user id.

    //and resave the stores in session because it has changed
    req.session.stores = userStores;

    res.render('main',{locals:{user:req.session.user,storeName:null,stores:userStores,items:[{item:"create New Item"}]}});


    }





module.exports = { loadMainPage,
deleteAStore,
deleteAnItem,
addStore,
addItem};