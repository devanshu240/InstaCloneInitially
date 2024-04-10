import React from 'react'
import "./profile.css"
export default function Profile() {
  return (
    <div className='Profile'>
        <div className="profile-frame">
          <div className="profile-pic">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="hell"/>
          </div>
          <div className="profile-data">
          <h1>Devanshu</h1>
          <div className="profile-info" style={{display:"flex"}}>
            <p>40 posts</p>
            <p>40 follower</p>
            <p>40 following</p>
          </div>
        </div>
        </div>
        <hr style={{
          width:"90%",
          margin:"auto",
          opacity:"0.8",
          // eslint-disable-next-line no-dupe-keys
          margin:"25px auto",
        }}
        />
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
      </div>
        
    </div>
    
  )
}
