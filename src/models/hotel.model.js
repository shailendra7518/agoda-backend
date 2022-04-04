const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  place_name : { type: String, required: true },
  price: { type: Number, required: true },
  hotel_name: { type: String, required: true },
  main_image: { type: String, required: true },
  brand_name:{type:String,required:true},
  filter_name:{type:String,required:true},
  room:[{type:String}]

}, { versionKey: false, timestamps: true })

const Hotel = mongoose.model("hotel", hotelSchema) 
module.exports=Hotel