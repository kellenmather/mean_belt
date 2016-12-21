console.log('users model');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter your name'],
        minlength: [2, 'Your name must be at least two characters']
    }
}, { timestamps: true });

var User = mongoose.model('User', UserSchema)
