import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Header() {
  return(
    <div id="home">
    <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Globally Inspired. Nature Based. Gender Neutral. </div>
                <div class="masthead-heading text-uppercase">Hair + Body Care.</div>
                <a class="btn btn-primary btn-x1 text-uppercase" href="#contact">Book an Appointment</a>
            </div>
        </header>
    </div>
  );
}
export default Header;
