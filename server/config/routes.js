console.log('routes');
var path = require('path');
var users = require('../controllers/users.js');

module.exports = function(app) {
    // example below
    app.post('/login', users.login);
};
// this adds route listeners to users for 5 of the 7 RESTful routes, excluding new and edit.
