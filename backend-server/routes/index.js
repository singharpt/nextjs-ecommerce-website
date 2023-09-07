const express = require("express");
const router = new express.Router();
router.get("/", function (req, res) {
  router.render("Hello how are you");
});
module.exports = router;
