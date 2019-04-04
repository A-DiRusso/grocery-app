const express = require('express');
const PORT =3500;
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views','./views');
app.set('view engine','html');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session( {
    store: new FileStore(),   //no options for now
    secret: 'mygreatlist'    }      //just a random string to help encrypt
));



const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signup');
const mainRouter = require('./routes/main');

//allow you to get req.body parameters from POST form
app.use(express.urlencoded({extended:true}));


//login page
app.use('/login',loginRouter);
//sign up page
app.use('/signup', signUpRouter);

app.use('/main',mainRouter);

//default for all other pages'
app.all('*',(req, res) => {
    res.render('index');
})


app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}.`);
})