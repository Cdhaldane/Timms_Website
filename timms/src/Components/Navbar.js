import './Navbar.css';
import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';




function Navbar() {


  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
             <div class="container">

                     <ul class="text-uppercase" id="textNav">
                         <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                         <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                         <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                         <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                         <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                     </ul>

                 <a class="navbar-brand" href="#page-top"><img src="timmLogo.png" alt="..." /></a>

                     <ul class="text-uppercase" id="textNav2">
                         <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                         <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                         <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                         <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                         <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                     </ul>

             </div>
         </nav>
    </div>
  );
}
export default Navbar;
