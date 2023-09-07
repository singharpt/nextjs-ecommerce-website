var express = require("express");
var router = express.Router();

//check if valid token received
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.eccomerce;
    const verifyToken = jwt.verify(token, keysecret);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(error);
  }
};

module.exports = authenticate;
