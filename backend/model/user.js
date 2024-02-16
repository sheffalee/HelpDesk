var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username: String,
	password: String,
	isAdmin: {type:Boolean , default:false},
	
}),
user = mongoose.model('user', userSchema);

module.exports = user;