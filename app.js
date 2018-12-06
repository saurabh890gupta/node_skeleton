const express = require('express');
const session = require('express-session');
const flash   = require('express-flash');
const fileUpload = require('express-fileupload');
const cors    = require('cors');

const multer  = require('multer');
const app           = express();
const bodyParser    = require('body-parser');
// const formidable    = require('express-formidable');
const formidable    = require('formidable');
const path          = require('path');
const fs            = require('fs-extra');
// Check node_env, if not set default to development
const env           = ("development");
const config        = require('./config')[env];
/**
 * project files
 */
const db            = require('./config/database');
const model         = require('./models');
const userSeeder    = require('./database/seeder/user');
var guest = 0;



// Configuration, defaults to jade as the view engine
app.engine('ejs', require('express-ejs-extend'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());    
app.use('/assets', express.static(__dirname + '/public'));
// app.use('/uploadDir', express.static(__dirname + '/public/files'));
app.set('env', 'dev');
app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 }, 
    resave: true, 
    saveUninitialized: true 
}));
// Custom flash middleware -- from Ethan Brown's book, 'Web Development with Node & Express'
app.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
});
app.use(flash());
// app.use(fileUpload());
userSeeder(app);
/*
* This section is for environment specific configuration
*/
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    if (err) {
        throw err;
    }
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error', { error: res.locals.error });
    process.on('uncaughtException', function(error) {
        console.log(error.stack);
    });
});
app.listen(config.EnvConfig.port, function() {
    console.log(`http://localhost:${config.EnvConfig.port}`);
});


/*
* Exports the express app for other modules to use
* all route matches go the routes.js file
<img className= {this.state.display ? 'd_block outer_gif' : 'd_block outer_gif' } src={this.state.img }/>
                          
*/
module.exports = app;

const router = require('./router');
