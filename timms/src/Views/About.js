import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

function About() {
  return(
    <div>
    <section class="page-section hidden" id="about">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase text-primary">About</h2>
              <h3 class="section-subheading text-muted">A little about us.</h3>
          </div>
          <ul class="timeline">
              <li>
                  <div class="timeline-image"><img class="rounded-circle img-fluids" src="timmShayne.png" alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">

                          <h4 class="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Entrepreneur and Author Shayne Traviss + Hairstylist Timm Emberley launched Timm David Shampoo Company in December of 2019 at 92 Walton Street in the Heritage Town of Port Hope, Ontario. Walton Street is one of the best-preserved 19th century commercial streetscapes in Southern Ontario.</p></div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image"><img class="rounded-circle img-fluids" src="inspiration.png" alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">

                          <h4 class="subheading">Our Inspiration</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Inspired by their Vivid Life Journeys around the globe and born of a desire to deliver hand made, nature based hair + body care products. Together Shayne’s entrepreneur and creative nature and Timm’s in depth industry experience and keen eye for precision have created a line of 12 hair + body care products, beginning with their signature shampoo + conditioner, inspired by places such as India, South Africa, and Japan as well as cities from their ‘home and native land’, Canada. As they continue their journeys both at home and abroad their product line continues to grow.</p></div>
                  </div>
              </li>
              <li>
                  <div class="timeline-image"><img class="rounded-circle img-fluids" src="vividelife.jpg" alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">

                          <h4 class="subheading">Our Vividlife.me</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Shayne began his career in marketing and business development later founding one of the world’s top personal development online platforms, reaching millions around the globe landing him followed on Twitter by and an invitation to Oprah’s private event in New York City and to the publishing of his first book; Your Vivid Life, An Invitation to a Radically Authentic Life with Watkins Publishing London, UK October 2019.</p></div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image"><img class="rounded-circle img-fluids" src="czar.jpg" alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">

                          <h4 class="subheading">Our Czar</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Timm graduated the Aveda Advanced Academy in precision cutting and went on to own his own successful practice. His hair has been seen on stages before thousands, on runways in Paris, prosecuting in court rooms, leading Sunday service and now strolling the streets of Port Hope.</p></div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image">
                      <h4>
                          Be Part
                          <br />
                          Of Our
                          <br />
                          Story!
                      </h4>
                  </div>
              </li>
          </ul>
      </div>
  </section>
    </div>
  );
}
export default About;
