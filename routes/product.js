const router = require("express").Router();
const productController = require("../controllers/product");

router.get("/api/products/:buyer_name", productController.getProducts);

module.exports = router;
