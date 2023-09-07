const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE;
const uri =
  "mongodb+srv://07arpit:OtO9TjB8jNNwXBsj@cluster0.pevcnmw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection successful to mongoDB"))
  .catch((error) =>
    console.log("Error in connecting to mongoDB database" + error.message)
  );
