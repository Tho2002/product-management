const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("connect suscess");
  } catch (error) {
    console.log("connec error");
  }
};
