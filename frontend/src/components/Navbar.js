import React from 'react'
import logo from "../img/kisspng-logo-typeface-font-bazar-5b2d4272d71802.4661285415296927868811.jpg"
import "./navbar.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt=""></img>
      <ul className="nav-menu">
        <NavLink to="/signup">
          <li>SignUp</li>
        </NavLink>
        <NavLink to="/signin">
          <li>signin</li>
        </NavLink>
        <NavLink to="/profile">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/createpost">
          <li>Create Post</li>
        </NavLink>
      </ul>
    </div>
  )
}
