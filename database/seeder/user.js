/**
 * User Seeder
 */
const User = require('../../models').user;
const Category = require('../../models').category;
module.exports = function(app) {
    app.get('/setup', function(req, res) {
        //seed database
        let starterTodos = [{
            name: "Administrator",
            email: 'admin@node.com',
            password: 1234567,
            token: ''
        }];

        User.find({name: "Administrator"}).then((result) => {
            if(result){
                res.send("DB already seeded.");
            }
        }).catch((err) => {
            throw err;
        });

        User.create(starterTodos, function(err, results) {
            const admin = results;
        });

        /* add categories */
        let seederCategories = [{
            name: "LOVE & SEX",
            icon: "files/Polls1/1498120641763book.jpg"
        },
        {
            name: "MONEY",
            icon: "files/Polls1/1498120662811image.jpg"
        },
        {
            name: "GOING OUT",
            icon: "files/Polls1/1498120683292jhon.jpg"
        },
        {
            name: "ONLINE",
            icon: "files/Polls1/1498120709363logo1.png"
        },
        {
            name: "PERSONAL",
            icon: "files/Polls1/1498120734670logo3.jpg"
        },
        {
            name: "RANDOM",
            icon: "files/Polls1/1498120953950logo2.jpg"
        }];

        /* check the category seed */
        Category.find({}).then((data) => {
            res.send("DB already seeded.");
        }).catch((err) => {
            throw err;
        });
        
        Category.insertMany(seederCategories, function(err, results) {
            if(err) throw err;
        })
        .then()
        .catch((err) => {
            throw err;
        });

        
        res.send("DB seeded");
        
    });
}