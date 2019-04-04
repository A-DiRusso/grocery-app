const User = require('../models/users');

function showLoginPage (req, res) {
    res.render('login',{locals:{email:'margaret@oneillfish.com',message:'Please Log In'}});
}

async function verifyUser  (req, res) {
    //set session email
    req.session.email = req.body.email;
console.log('before save session function')
    req.session.save( async () => { 
console.log("inside save function");
        //get the email from the post body
        // console.log(req.body.email);
        const theUser = await User.getByEmail(`${req.body.email}`);
        // console.log(theUser);
    
    
            //if the user exists, check password
            if (theUser.checkPassword(req.body.password)) {
                // console.log("PASSWORD VALID");
                //get the list of stores for that user
                const userStores = await theUser.stores;
                console.log(userStores);
                res.render('main',{locals:{user:theUser.firstName}})
            }
            //wrong password
            else {
                // await theUser.setPassword(req.body.password);
                // console.log("saved the password");
                // await theUser.save();
                // console.log("updated the db");
        // console.log("incorrct password");
        // send the form back to them, but with the email already filled out for them
                res.render('login',{locals:{email:req.body.email, message:"password incorrect. please try again"}});  //this will be a Get
    
            
            //if user doesn't exist - rewshow login with messge and blank email
        
            //if the password is valid, show main page
                //set the session ID
        
            //if password is invalid - show login with message and same email prefilled.
        }
    })

    ;
}



/*

if (theUser.checkPassword(req.body.password))  {
    console.log('CORRECT PASSWORD')
    //sace the user's id to the session
    
    req.session.user = theUser.id;
    //make sure the session is saved BEFORE we redirect
    req.session.save(() => {
        //redirect if password is correct
        // res.status(200).send(`<a href="./">home<a> ${req.body.email} CORRECT PASSWORD`);
        res.redirect('/dashboard');  //he uses this

    })
}
else {
    // await theUser.setPassword(req.body.password);
    // await theUser.save();
    console.log("incorrct password");
    // send the form back to them, but with the email already filled out for them
    res.render('login',{locals:{email:req.body.email, message:"password incorrect. please try again"}});  //this will be a Get

*/




module.exports =  {showLoginPage, verifyUser} ;