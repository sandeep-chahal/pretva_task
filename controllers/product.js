const Product = require("../models/product");

const getProducts = async (req, res, next) => {
	try {
		const buyer_name = req.params.buyer_name;
		const products = await Product.find({ buyer_name });
		res.json(products);
	} catch (err) {
		console.log("Error in getProducts:", err.message);
		next(new Error("Something Went Wrong!"));
	}
};

module.exports = {
	getProducts,
};
