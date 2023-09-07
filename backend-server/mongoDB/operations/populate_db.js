const product_data = require("../data/product_data");
const products = require("../models/product_schema");
require("../connection/connect");

const UpdateInventory = async () => {
  try {
    await products.deleteMany({});
    await products.insertMany(product_data);
    console.log("Data updated in inventory");
  } catch (error) {
    console.log(
      "Error in updating data to inventory. Error : " + error.message
    );
  }
};

UpdateInventory();
