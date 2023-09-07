const user = require("../../mongoDB/models/user_schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// get the JWT secret key from the .env file
const secretKey = process.env.JWT_SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }

  try {
    const userlogin = await user.findOne({ email: email });
    if (userlogin) {
      const checkPassword = await bcrypt.compare(password, userlogin.password);

      if (!checkPassword) {
        res.status(400).json({ error: "Invalid password" });
      } else {
        // specify the maxAge of the JWT token
        const maxAge = 3 * 60 * 60;

        // create the token using email
        const token = jwt.sign(
          {
            email,
          },
          secretKey,
          {
            expiresIn: maxAge,
          }
        );

        // send this token as a cookie to the user
        res.cookie("eccomerce", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
        res.status(200).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "User does not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: "Error while logging in the user" });
  }
};

module.exports = login;
