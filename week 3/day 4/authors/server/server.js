const express = require("express")
const cors=require("cors")
const app = express()
app.use(cors(),express.json(),express.urlencoded({extended: true}))
require("dotenv").config()
require("./config/mongoose.config")
require("./routes/authors.routes")(app) 
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`>>>>> server is running on Port ${port}😊😊`)
})