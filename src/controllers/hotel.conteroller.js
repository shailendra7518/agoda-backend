
const express = require("express");
const req = require("express/lib/request");
const Hotel = require("../models/hotel.model");

const router = express.Router();



router.post("", async (req, res) => {
  try {
    const hotels = await Hotel.create(req.body)
    return res.status(201).send(hotels)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("", async (req, res) => {
  try {
    const hotels = await Hotel.find().lean().exec()
    
    return res.status(200).send(hotels)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("/:name", async (req, res) => {
  try {
    const hotels= await Hotel.find({place_name:req.params.name}).lean().exec()
    return res.status(200).send(hotels)
  } catch (e) {
    return res.status(200).send(e.massage)
  }
})


module.exports=router