import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div class="header1">
        <ul>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/LoginPage">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup">Signup</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/register"></Link>
            <Link to="/forgetpassword"></Link>
          
        </ul>
      
    </div>
  )
}

export default Nav
