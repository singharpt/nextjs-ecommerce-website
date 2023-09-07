const user = require("../../mongoDB/models/user_schema");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(400).json({ error: "Fill in all the details" });
  }

  try {
    const check_user = await user.findOne({ email: email });

    if (check_user) {
      res.status(400).json({ error: "This email already exists" });
    } else if (password !== cpassword) {
      res.status(400).json({ error: "Passwords not matching" });
    } else {
      bcrypt.hash(password, 10).then(async (hash) => {
        const finaluser = new user({
          fname,
          email,
          mobile,
          password: hash,
        });

        const storedata = await finaluser.save();
        res.status(200).json(storedata);
      });
    }
  } catch (error) {
    console.log("Error in registering user, try again" + error.message);
    res.status(400).send(error);
  }
};

module.exports = register;
