import React from 'react'
import{Routes,Route}from 'react-router-dom'
import Home from './home'
import LoginPage from './LoginPage'
import Signup from './signup'
// import LoginSuccess from './LoginSuccess'
import ForgetPassword from './forgetpassword'
import Register from './register'


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path='/LoginPage'element={<LoginPage/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>

        </Route>
      </Routes>
    </div>
  )
}
export default Router