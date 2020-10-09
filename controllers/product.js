const Product = require("../models/product");

const getProducts = async (req, res, next) => {
	try {
		// get buyer_name
		const buyer_name = req.params.buyer_name;

		// get products
		const products = await Product.find({ buyer_name });

		// send products
		res.json(products);
	} catch (err) {
		// handle errors
		console.log("Error in getProducts:", err);
		console.log("_".repeat(10));
		next(new Error("Something Went Wrong!"));
	}
};
const filterProducts = async (req, res, next) => {
	try {
		// get filters
		console.log(req.body);
		const filters = req.body.filters;

		// get products
		const products = await Product.find(filters);

		// send products
		res.json(products);
	} catch (err) {
		// handle errors
		console.log("Error in filterProducts:", err);
		console.log("_".repeat(10));
		next(new Error("Something Went Wrong!"));
	}
};

// const getFilters = (req) => {
// 	const filter = {};
// 	if (req.query.buyer_name) filter.buyer_name = req.query.buyer_name;
// 	if (req.query.product_name) filter.product_name = req.query.product_name;
// 	if (req.query.lead_time_lt)
// 		filter.lead_time = { $lt: req.query.lead_time_lt };
// 	if (req.query.lead_time_eq)
// 		filter.lead_time = { $eq: req.query.lead_time_eq };
// 	if (req.query.lead_time_gt)
// 		filter.lead_time = { $gt: req.query.lead_time_gt };
// 	if (req.query.weight_gsm_lt)
// 		filter.weight_gsm = { $lt: req.query.weight_gsm_lt };
// 	if (req.query.weight_gsm_eq)
// 		filter.weight_gsm = { $eq: req.query.weight_gsm_eq };
// 	if (req.query.weight_gsm_gt)
// 		filter.weight_gsm = { $gt: req.query.weight_gsm_gt };
// 	if (req.query.quantity_lt) filter.quantity = { $lt: req.query.quantity_lt };
// 	if (req.query.quantity_eq) filter.quantity = { $eq: req.query.quantity_eq };
// 	if (req.query.quantity_gt) filter.quantity = { $gt: req.query.quantity_gt };
// 	if (req.query.price_rs_lt) filter.price_rs = { $lt: req.query.price_rs_lt };
// 	if (req.query.price_rs_eq) filter.price_rs = { $eq: req.query.price_rs_eq };
// 	if (req.query.price_rs_gt) filter.price_rs = { $gt: req.query.price_rs_gt };
// 	return filter;
// };

module.exports = {
	getProducts,
	filterProducts,
};
