import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Footer() {
  return(
    <div>
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">Copyright &copy; 2022</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Instagram"><i class="fa fa-brands fa-instagram"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <p id="footer-text" >Hours: 9-5 Monday - Friday</p>
                    <p id="footer-text" >Phone: (905) 430-2300</p>
                    <p id="footer-text" >Address: 92 Walton St, Port Hope, ON L1A 1N3</p>

                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
export default Footer;
