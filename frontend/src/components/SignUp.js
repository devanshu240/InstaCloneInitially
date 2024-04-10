import React,{useState} from 'react'
import logo from "../img/kisspng-logo-typeface-font-bazar-5b2d4272d71802.4661285415296927868811.jpg"
import "./SignUp.css"
import { NavLink ,useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify';
export default function SignUp() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const notifyA = (msg)=> toast.error(msg)
    const notifyB = (msg)=> toast.success(msg)
    

    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const postData = ()=>{
        if(!emailregex.test(email)){
           notifyA("Invalid Email")
           return;
        }
        else if(!passwordregex.test(password)){
            notifyA("Password must contain at least 8 characters , one uppercase,one lower case,one number,one speacial character")
            return
        }
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                userName:userName,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
            notifyA(data.error)
           }
           else{
            notifyB(data.message)
            navigate("/signin")
           }
           console.log(data)
        })
    }
  return (
  <div className="signUp">
    <div className="form-conatianer">
        <div className='form'>
        <img src={logo} alt="" className="signUpLogo" />
        <p className="loginPara">
            SignUp to see photos and videos 
        </p>
        <div>
            <input type="email" name="email" id="email" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <div>
            <input type="text" name="name" id="name" placeholder='Full Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div>
            <input type="text" name="user name" id="username" placeholder='Username' value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input>
        </div>
        <div>
            <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <p className="loginPara" style={{fontSize:"12px",margin:"3px 0px"}}>
            By Signing up , you agree to out Terms,<br/>
            privacy policies and cookies

        </p>
        <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>{postData()}}/>
        </div>
        <div className="form2">
            Already have an account? <span style={{color:"blue",cursor:"pointer"}}><NavLink to="/signin">Sign In</NavLink></span>
        </div>
        
    </div>
  </div>
  )
}
