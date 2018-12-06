/* require your controllers here */
let app = require('../app');
let loginController = require('../controllers/loginController');

// backend site routes
app.get('/', loginController.index);


