const express = require("express");
const res = require("express/lib/response");
const connect = require("./src/config/db");
const cors = require('cors')
const app = express()

app.use(cors())
const user_controller=require('./src/controllers/user.controller')
const hotel_conteroller= require("./src/controllers/hotel.conteroller")

app.use(express.json())
app.use("/auth",user_controller)
app.use("/findhotels", hotel_conteroller)

let port=process.env.PORT || 8080

app.listen(port, async () => {
  try {
    console.log( `server is running on port no ${port}`)
    await connect()
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})