const products = require("../../mongoDB/models/product_schema");

const get_products = async (req, res) => {
  try {
    const products_data = await products.find();
    res.status(200).json({ data: products_data });
  } catch (error) {
    res.status(400).json({ Error: "Error in getting products data" });
    console.log("Error in getting products data. Error : " + error.message);
  }
};

const get_individual_products = async (req, res) => {
  try {
    var { id } = req.params;
    const product_data = await products.findOne({ id: id });
    res.status(200).json({ data: product_data });
  } catch (error) {
    res.status(400).json({ Error: `Error in getting product with id : ${id}` });
    console.log("Error in getting products data. Error : " + error.message);
  }
};

module.exports = { get_products, get_individual_products };
