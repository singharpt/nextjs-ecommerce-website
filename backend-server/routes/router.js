const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/auth");
const {
  get_products,
  get_individual_products,
} = require("./asynchronous/get_products");
const register = require("./asynchronous/register");
const login = require("./asynchronous/login");
const logout = require("./asynchronous/logout");
const {
  get_cart_details,
  add_to_cart,
  remove_from_cart,
} = require("./asynchronous/cart_operations");

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", authenticate, logout);
router.get("/getproducts", get_products);
router.get("/getproducts/:id", get_individual_products);
router.get("/getcart", authenticate, get_cart_details);
router.put("/addcart", authenticate, add_to_cart);
router.delete("/removecart", authenticate, remove_from_cart);

module.exports = router;
