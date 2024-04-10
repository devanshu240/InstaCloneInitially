const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {Jwt_secret} = require("../keys")
const requireLogin = require("../middlewares/requireLogin")

router.get('/', (req, res) => {
    console.log(res.send("hello"));
});
router.post("/signup", (req, res) => {
    const { name, userName, email, password } = req.body;
    
    
    if (!email || !name || !userName || !password) {
        return res.status(422).json({ error: "please add all fields" });
    }

    
    USER.findOne({ $or:[{email:email},{userName:userName}]}).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "User already exists with this email or username" });
        }

        bcrypt.hash(password,12).then((hashedPassword)=>{
            const user = new USER({
                name,
                email,
                userName,
                password:hashedPassword
            });
    
            
            user.save()
                .then(user => {
                    res.json({ message: "Registered successfully" });
                })
                .catch(err => {
                    console.log(err);
                });
        })
        
    });
});
router.post("/signin",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({message:"Please add Email and Password"})
    }
    USER.findOne({ email: email}).then((savedUser)=>{
       if(!savedUser){
            return res.status(422).json({error:"User not found. Please check your email"})
        }
        bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                return res.status(200).json({message:"Signed In Successfully"})
                /*const token = jwt.sign({_id:savedUser.id},Jwt_secret);
                res.json(token)
                console.log(token);*/
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err => console.log(err))
        console.log(savedUser);
       
    })
})

module.exports = router;
