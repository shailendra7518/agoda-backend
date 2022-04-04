require('dotenv').config()

const mongoose = require("mongoose");

const connect = async() => {
  return mongoose.connect(process.env.MONGO_URL)
}
module.exports=connect