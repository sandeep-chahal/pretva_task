const router = require("express").Router();
const productController = require("../controllers/product");

router.get("/api/products/:buyer_name", productController.getProducts);
router.get("/api/filter-products", productController.filterProducts);

module.exports = router;
