const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Shivamonal:NFtzlvMeUhfIeEBo@shivamonal.keyql.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
