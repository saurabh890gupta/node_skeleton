// redirect to the home page
let userModel = require('../models/user');

exports.index = (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/dashboard');
        res.end();
    }else{
        res.render('login', {session: req.session});
    }
}
