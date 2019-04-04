const express = require('express');
const PORT =3500;
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views','./views');
app.set('view engine','html');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

//allow you to get req.body parameters from POST form
app.use(express.urlencoded({extended:true}));


app.all('*',(req, res) => {
    res.render('index');
})


app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}.`);
})