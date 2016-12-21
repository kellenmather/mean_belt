"use strict"

console.log('users controller');

  var mongoose = require('mongoose');
  var User = mongoose.model('User');
  var bcrypt = require('bcryptjs');

function UsersController() {

    this.login = function(req, res) {
        User.findOne({name: req.body.name}, function(err, user) {
            if(user < 1) { // If the user is not found create him as a new user
                var newUser = new User(req.body);
                newUser.save(function(err, user) {
                    if(err) {
                        res.json({err: err});
                    }
                    else {
                        res.json(user);
                    }
                })
            }
            else { // If the name is found return the user to log him in
                res.json(user)
            };
        });
    };
};

module.exports = new UsersController();
