const products = require("../../mongoDB/models/product_schema");

const get_cart_details = async (req, res) => {
  try {
    res.status(200).json({ data: req.user.carts });
  } catch (error) {
    res.status(400).json({ error: "Error while getting cart data" });
  }
};

const add_to_cart = async (req, res) => {
  try {
    const { product_id } = req.body;

    // console.log(product_id);

    const product = await products.findOne({ id: product_id });

    if (!product) {
      throw new Error("Product not found");
    }

    new_cart = [...req.user.carts, product];
    req.user.carts = new_cart;
    req.user.save();
    res.status(200).json({
      data: req.user,
      message: "Product added to the cart successfully",
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding product to the cart" });
  }
};

const remove_from_cart = async (req, res) => {
  try {
    const { product_id } = req.body;

    req.user.carts = req.user.carts.filter((cart_items) => {
      return cart_items.id != product_id;
    });

    req.user.save();
    res.status(200).json({
      data: req.user,
      message: "Items removed from the cart successfully",
    });
  } catch (error) {
    res.status(400).json({ error: "error in removing product from the cart" });
    console.log("error in removing product from the cart. Error : ", error);
  }
};

module.exports = { get_cart_details, add_to_cart, remove_from_cart };
