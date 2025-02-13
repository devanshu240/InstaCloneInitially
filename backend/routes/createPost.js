const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST")

router.post("/creatpost",requireLogin,(req,res)=>{
    const {body,pic} = req.body;
    if(!pic || !body){
        return res.status(422).json({error:"Please add all the fields"})
    }
    req.user;
   const post = new POST({
    body,
    photo:pic,
    postedBy:req.user
   })
   post.save().then((result)=>{
    return res.json({post:result})
   }).catch(err=>{
    console.log(err)
   })
})
module.exports = router;