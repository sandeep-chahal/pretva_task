const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	product_id: Number,
	product_name: String,
	lead_time: Number,
	weight_gsm: Number,
	quantity: Number,
	price_rs: Number,
	buyer_name: String,
});

module.exports = mongoose.model("Product", productSchema);
