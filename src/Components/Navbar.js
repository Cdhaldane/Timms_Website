import './Navbar.css';
import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';




function Navbar() {


  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
             <div class="container">
                 <a class="navbar-brand" href="#page-top"><img src="timmLogo.png" alt="..." /></a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     Menu
                     <i class="fas fa-bars ms-1"></i>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav text-uppercase">
                         <li class="nav-item"><a class="nav-link" href="#services">Store</a></li>
                         <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                         <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                         <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                         <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                     </ul>
                 </div>
             </div>
         </nav>
    </div>
  );
}
export default Navbar;
