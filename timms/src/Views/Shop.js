import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function Shop() {
  return(
    <div>
    <section class="page-section bg-light" id="portfolio">
         <div class="container">
             <div class="text-center">
                 <h2 class="section-heading text-uppercase">Our Global Collection</h2>
                 <h3 class="section-subheading">Explore our globally inspired collection of artisanlly crafted, small batch, gender neutral, hair + body care products made from nature, with pure essential oils</h3>
             </div>
             <div class="row ">
                 <div class="col-lg-4 col-sm-6 mb-4  hidden p1">
                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="signature-wash.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Signature Wash</div>
                             <div class="portfolio-caption-subheading text-muted">$36</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-sm-6 mb-4  hidden p2">
                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="signature-condition.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Signature Condition</div>
                             <div class="portfolio-caption-subheading text-muted">$38</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-sm-6 mb-4  hidden p3">
                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="signature-moisturize.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Signature Moisturize</div>
                             <div class="portfolio-caption-subheading text-muted">$48</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0  hidden p4">
                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="kami-wash.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Kami Wash</div>
                             <div class="portfolio-caption-subheading text-muted">$64</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0  hidden p5">

                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="kami-condition.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Kami Condition</div>
                             <div class="portfolio-caption-subheading text-muted">$68</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-4 col-sm-6  hidden p6">

                     <div class="portfolio-item">
                         <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                             <div class="portfolio-hover">
                                 <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                             </div>
                             <img class="img-fluid" src="kami-moisturize.jpeg" alt="..." />
                         </a>
                         <div class="portfolio-caption">
                             <div class="portfolio-caption-heading">Kami Moisturize</div>
                             <div class="portfolio-caption-subheading text-muted">$84</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    </div>
  );
}
export default Shop;
