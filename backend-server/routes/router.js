const express = require("express");
const router = new express.Router();
const {
  get_products,
  get_individual_products,
} = require("./asynchronous/get_products");
const register = require("./asynchronous/register");
const login = require("./asynchronous/login");

router.post("/register", register);
router.post("/login", login);
router.get("/getproducts", get_products);
router.get("/getproducts/:id", get_individual_products);

module.exports = router;
