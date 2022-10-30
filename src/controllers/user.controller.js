
const express = require("express");
const req = require("express/lib/request");
const User = require("../models/user.model");
const { body,validationResult } = require("express-validator")
const router = express.Router();
const bcrypt = require('bcrypt');


router.post("/register",

body("first_name").exists().isString(),
body("last_name").exists().isString(),
body("email").exists().isEmail()
 
, async (req, res) => {
    console.log(req.body)
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.find({email:req.body.email}).lean().exec();
    if(user){
        return res.status(200).json("user already exist with given mail")
    }else{
        const user = await User.create({...req.body,password:bcrypt.hashSync(req.body.password, 10)})
        return res.status(201).send(user)
    }

  
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email:req.body.email}).lean().exec();
  
   const ans=  bcrypt.compareSync(req.body.password, user.password)

    if(!ans && user){
        return res.status(404).json("incorrect password")
    }else if(!user && !ans){
        return res.status(404).json("please register first")
    }

    return res.status(200).send(user)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})




module.exports=router