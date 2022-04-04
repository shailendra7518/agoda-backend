const mongoose = require("mongoose");
// "_id": "621497f02905d7555ec8dd92",
// "place_name": "mumbai",
// "price": 7840,
// "hotel_name": "The St. Regis Mumbai",
// "main_image": "https://cache.marriott.com/marriottassets/marriott/BOMXR/bomxr-exterior-1522-hor-feat.jpg?resize=373:150&output-quality=70",
// "brand_name": "STREGIS",
// "filter_name": "Restaurant on site",
// "room": [
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