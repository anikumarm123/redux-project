import React from 'react'
import navImg from '../redux/nav-logo.jpg';
import { Badge} from '@mui/material';
import {AddShoppingCartIcon} from '@mui/icons-material';

function NavBar() {
  return (
    <div>
        <div>
         <img src={navImg}></img>
        </div>
        <div>
        <Badge color="secondary" badgeContent={5}>
         <AddShoppingCartIcon/>
        </Badge>
        </div>
    </div>
  )
}

export default NavBar