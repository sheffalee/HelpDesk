var mongoose = require('mongoose');
var Schema = mongoose.Schema;

productSchema = new Schema( {
	name: String,
	desc: String,
	price: Number,
	image: String,
	discount: Number,
	user_id: Schema.ObjectId,
	admin_id:{
		type:Schema.ObjectId,
		default:'64ad68eabc78f0cbf4f9ec80'
	},
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
}),
product = mongoose.model('product', productSchema);

module.exports = product;