import React from "react";
import navImg from "../redux/amazon-logo.png";
import { Badge } from "@mui/material";

function NavBar() {
  return (
    <div className="nav-flx">
      <div className="nav-right">
        <div>
        <img src={navImg}></img> 
        </div>
        <div>
        <button>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <span>Deliver To India</span>
        </button>
        </div>
      </div>
      <div className="nav-search">
        <input placeholder="Search"></input>
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div className="nav-left">
      <button>
      <Badge badgeContent={null}>
        <i class="fa fa-home" aria-hidden="true"></i><br></br>
      </Badge><br></br>
        <span>Home</span>
        </button>
        <button>
          <Badge badgeContent={null}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Badge><br></br>
         <span> Cart</span>
        </button>
        <button>
          <Badge  badgeContent={null}>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          </Badge>
         <span>Favorite</span> 
        </button>
        
      </div>
    </div>
  );
}

export default NavBar;
