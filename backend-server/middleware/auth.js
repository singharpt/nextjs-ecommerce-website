const user = require("../../mongoDB/models/user_schema");

// get the JWT secret key from the .env file
const secretKey = process.env.JWT_SECRET_KEY;

//check if valid token received
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.eccomerce;
    const verifyToken = jwt.verify(token, secretKey);

    const rootUser = await user.findOne({
      email: verifyToken.email,
    });

    if (rootUser) {
      req.user = rootUser;
      next();
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    res.status(400).send("Unauthorized token");
  }
};

module.exports = authenticate;
