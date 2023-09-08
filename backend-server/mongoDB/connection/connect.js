const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection successful to mongoDB"))
  .catch((error) =>
    console.log("Error in connecting to mongoDB database" + error.message)
  );
