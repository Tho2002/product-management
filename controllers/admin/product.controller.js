// [GET]admin/products
const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({});

  res.render("admin/pages/products/index", {
    pageTitle: "Trang san pham",
    product: products,
  });
};
