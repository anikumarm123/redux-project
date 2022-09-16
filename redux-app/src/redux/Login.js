import React from 'react'
import {Button,TextField} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../redux/logo.png'
function Login() {
  
  return (
    <div className='login'>
      <img src={logo}></img>
      <div className='loginBox'>
       <AccountCircleIcon ></AccountCircleIcon> 
       <h2>Sign Up</h2>
      <p> <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" /></p>
      <p><TextField type='password' id="outlined-basic" label="Enter Your PassWord" variant="outlined" /></p>
      <Button variant="contained">Login</Button>
      </div> 
    </div>
  )
}

export default Login