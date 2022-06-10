import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Services() {
  return(
    <div id="services">
    <section class="page-section" id="services-body">
         <div class="container">
             <div class="text-center">
                 <h2 class="section-heading text-uppercase">Services</h2>
                 <h3 class="section-subheading text-muted">What we offer.</h3>
             </div>
             <div class="row text-center">
                 <div class="col-md-4">
                     <span class="fa-stack fa-4x">
                         <i class="fas fa-circle fa-stack-2x text-primary"></i>
                         <i class="fa fa-scissors fa-stack-1x fa-inverse"></i>
                     </span>
                     <h4 class="my-3">Cut</h4>
                     <p class="text-muted">Women or Men's cut, price may vary.</p>
                 </div>
                 <div class="col-md-4">
                     <span class="fa-stack fa-4x">
                         <i class="fas fa-circle fa-stack-2x text-primary"></i>
                         <i class="fa fa-solid fa-palette fa-stack-1x fa-inverse"></i>
                     </span>
                     <h4 class="my-3">Colour</h4>
                     <p class="text-muted">Women or Men's colour, price may vary.</p>
                 </div>
                 <div class="col-md-4">
                     <span class="fa-stack fa-4x">
                         <i class="fas fa-circle fa-stack-2x text-primary"></i>
                         <i class="fa fa-solid fa-pump-soap fa-stack-1x fa-inverse"></i>
                     </span>

                     <h4 class="my-3">Products</h4>
                     <p class="text-muted">Organic, homemade hair and body products.</p>
                 </div>
             </div>
         </div>
     </section>
    </div>
  );
}
export default Services;
