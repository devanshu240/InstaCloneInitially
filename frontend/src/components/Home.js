import React from 'react'
import "./home.css"
export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="card-header">
          <div className="card-pic">
          
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="no"/>
            <h5>Ramesh</h5>

          </div>
          <div className="card-content">
            
          </div>
        </div>
        <div className="card-image">

          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt=""/>
        
        </div>
        <div className="card-content">
        <span className="material-symbols-outlined">
          favorite
        </span>
        <p>1 like</p>
        <p> This is Amazing</p>
        </div>
        <div className="add-comment">
        <span className="material-symbols-outlined">mood</span>
        <input type="text" placeholder='add a comment'/>
        <button className='comment'>Post</button>
        </div>
      </div>
    </div>
  )
}
