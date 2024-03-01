const express = require("express");
const router = express.Router();
const product = require("../../controllers/client/product.controller");
router.get("/", product.index);
module.exports = router;
