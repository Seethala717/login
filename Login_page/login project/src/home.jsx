import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const Navigate=useNavigate();
    function Log(){
        Navigate("/LoginPage")
    }
    function Sign(){
        Navigate("/signup")
    }
  return (
    <div className="succ">
      <h1>WELCOME TO OUR PAGE!!! </h1>
      <button onClick={Log}>LOGIN</button><br></br>
      <button onClick={Sign}>SIGNUP</button>
    </div>
  )
}

export default Home