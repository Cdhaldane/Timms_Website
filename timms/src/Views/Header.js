import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Header() {
  return(
    <div id="home">
    <header class="masthead hidden" >
            <div class="container mast-text">
                <div class="masthead-subheading">Globally Inspired. Nature Based. Gender Neutral. </div>
                <div class="masthead-heading text-uppercase">Hair + Body Care.</div>
                <img src="shampooBG.jpeg" />
            </div>
        </header>
    </div>
  );
}
export default Header;
