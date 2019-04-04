const User = require('../models/users');
async function  createNewUser(req, res) {
    console.log(req.body);
    const newUser = await User.getByEmail(req.body.email);
    if (newUser === null) {
        const newPassword = User.hashPassword(req.body.password);
        await User.insertUser(req.body.firstname, req.body.lastname, req.body.email, newPassword);
    } else {
        res.render('login', {locals: {message: 'Looks like we know each other, please log in', email:req.body.email}})
    }
     //hash the pass word and save user to db
    
    //pull it out of the db for the unique id

    //create {} for future use 
    // const newUserInfo = new User ()
    //save id+ to session

    
}

function showSignUp(req, res) {
    res.render('signup', {locals: {message: "Sign up here"}});
}

module.exports = {createNewUser, showSignUp};