const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');



var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail,
            message: '{Value} is not an email'
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 6,

    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc123').toString();

    user.tokens = user.tokens.concate([{ access, token }]);
    return user.save().then(() => {
        return token;
    })
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;
    try {
            decoded= jwt.verify(token,'abc123')
    } catch (e) {

    }
  return  User.findOne({
      '_id' : decoded._id,
      'tokens.token':token,
      'token.access':'auth'
  })
}




var User = mongoose.model('User', UserSchema);

module.exports = { User };