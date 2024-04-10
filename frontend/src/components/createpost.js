import React,{useState,useEffect} from 'react'
import "./createpost.css"

export default function CreatePost() {
  const [body,setBody] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl]= useState("")

  useEffect(()=>{
    
  },[url])
  const postDetails = () =>{
    console.log(body,image)
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","instaclone")
    data.append("cloud_name","devcloud1111")
    fetch("https://api.cloudinary.com/v1_1/devcloud1111/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data=>setUrl(data.url))
    .catch(err=>console.log(err))


    fetch("http://localhost:5000/createpost",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        body,
        pic:url
      })
    }).then(res=>res.json())
    .then(data=>console.log(data.url))
    .catch(err=> console.log(err))
    setUrl(data.url)
    
  }
    const loadfile= (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
    };
};
  return (

    <div className="createpost">
       <div className="post-header">
        <h4 style={{margin:"3px auto"}}>Create New Post</h4>
        <button id="post-btn" onClick={()=>{postDetails()}}>Share</button>
       </div>
       <div className="main-div">
        <img id='output' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" alt="" />
        <input type="file" accept='image/*' onChange={(event)=>{loadfile(event); setImage(event.target.files[0])}}/>
       </div>
       <div className="details">
        <div className="card-header">
            <div className="card-pic">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
            </div>
            <h5> Ramesh</h5>
        </div>
        <textarea value={body} onChange={(e)=>{setBody(e.target.value)}} type="text"  cols="30" rows="2" placeholder='Write a caption .... '></textarea>
       </div>
    </div>
  )
}

