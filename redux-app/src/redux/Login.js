import React from 'react'
import {Button,TextField} from '@mui/material';
import logo from '../redux/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Login() {
  
  return (
    <div className='login'>
      <img src={logo}></img>
      <div className='loginBox'>
      <AccountCircleIcon></AccountCircleIcon>
       <h2>Sign Up</h2>
       <div className='ip'>
      <TextField id="ip-1" label="Enter Your Name" variant="outlined" />
      <TextField type='password' id="ip-2" label="Enter Your PassWord" variant="outlined" /><br></br>
      <Button variant="contained">Login</Button>
      </div>
      </div> 
    </div>
  )
}

export default Login