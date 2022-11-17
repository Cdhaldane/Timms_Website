import {Switch,Route,Link,NavLink} from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import { useAlert } from "react-alert";

import DateTimePicker from 'react-datetime-picker';






function Contact() {
  const [value, onChange] = useState(new Date());
  const [dropVal, setDrop] = useState("Select");
  const alert = useAlert();


  function handleSubmit(event) {
    console.log(event)
    let str = JSON.stringify(value)
    str = str.substring(1, str.length-9)
    alert.success("Appointment Booked on " + str);
    event.preventDefault();
  }

  function handleClick(event) {
    console.log(event.target.text)
    setDrop(event.target.text)
    event.preventDefault();
  }


  return(
    <div>
    <section class="page-section hidden" id="contact">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Contact Us</h2>
              <h3 class="section-subheading text-muted">Schedule an appointment today!</h3>
          </div>
          <div className="d-flex justify-content-center calendar-container">
            <DateTimePicker onChange={onChange} value={value} />
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle custom-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {dropVal}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" onClick={handleClick}>Cut</a>
                  <a class="dropdown-item" onClick={handleClick}>Colour</a>
                  <a class="dropdown-item" onClick={handleClick}>Cut & Colour</a>
                </div>
              </div>
          </div>

          <form class="needs-validation" novalidate onSubmit={handleSubmit} >
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">First name</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Last name</label>
              <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required/>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustomUsername">Email</label>
              <div class="input-group">

                <input type="email" class="form-control" id="validationCustomEmail" placeholder="Email" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                  Enter email
                </div>
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
              <button class="btn btn-primary text-center" type="submit">Submit form</button>
          </div>
          </form>

      </div>
    </section>
    </div>
  );
}
export default Contact;
