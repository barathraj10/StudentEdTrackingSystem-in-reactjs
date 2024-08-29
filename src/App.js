import React from 'react';
import './App.css';
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";


function Nav(){
  return(
    <div className="sidenav">
    <div className='logo'>
        <img src=""></img>
    </div> 
    <div className='menu'>
    <ul>
        <li><a href=""><HiMiniUsers /></a></li>
        <li><a href=""><FaWallet /></a></li>
        <li><a href=""><RiDiscountPercentFill /></a></li>
        <li><a href=""><MdDashboard /></a></li>
    </ul>
    </div>            
</div>
  )
}

export default Nav;
