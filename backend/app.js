const express = require('express')
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const {mongoUrl} = require('./keys')
app.use(cors())

require("./models/model")
require("./models/post")

app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))


mongoose.connect(mongoUrl);
 


mongoose.connection.on("connected",()=>{
    console.log("successfully connected");
})



mongoose.connection.on("error",()=>{
    console.log("failure to connect db")
})



app.get("/",(req,res)=>{
    res.json("data")
})



app.listen(5000,(err)=>{
    console.log("server started")
});