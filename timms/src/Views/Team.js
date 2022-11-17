import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Team() {
  return(
    <div>
    <section class="page-section bg-light hidden" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase ">Our Amazing Team</h2>
                    <h3 class="section-subheading ">“A mind that is stretched by a new experience can never go back to its old dimensions.” - Oliver Wendell Holmes</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="timm.png" alt="..." />
                            <h4 class="section-subheading">Timm David</h4>
                            <p class="">Lead Designer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Timm David Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Timm David Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/timmdavid/" aria-label="Timm David Instagram Profile"><i class="fa fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="shayne.png" alt="..." />
                            <h4>Shayne Traviss</h4>
                            <p class="">Lead Marketer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Shayne Travis Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Shayne Travis Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Shayne Travis Instagram Profile"><i class="fa fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="charlie.jpg" alt="..." />
                            <h4>Charlie Haldane</h4>
                            <p class="">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Charlie Haldane Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Charlie Haldane Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Charlie Haldane Instagram Profile"><i class="fa fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large team">"Alone we can do so little; together we can do so much." – Helen Keller</p></div>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Team;
