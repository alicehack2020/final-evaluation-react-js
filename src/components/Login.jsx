import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  let navigate = useNavigate();

  const loginHanddle=()=>{
    const data = { email: email,password:password};

    fetch('https://reqres.in/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => 
    {
      if(data.token)
      {
        navigate('/home')
      }
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }

  return (
    <div>
      
      <div className='flex'>
      <h1>Login</h1>
          <input type="text" name="" id="" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" name="" id="" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button className='flex loginButton' onClick={loginHanddle}>Login</button>
    </div>
  )
}

export default Login