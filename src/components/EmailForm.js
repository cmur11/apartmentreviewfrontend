import React, {useState} from 'react';
import emailjs from 'emailjs-com';


// import './ContactUs.css';

function EmailForm({listing, setTextBox}){ 
    

console.log(listing)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ftsw45h', 'template_3gc505j', e.target, 'user_VABjA8amoJhtsqZIJk1qH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setTextBox(false)
  }

  return (
    <form className="email-form" onSubmit={sendEmail}>
       
      <label>Contact</label>
      <input type="text" value = {listing.broker_email} name="contact" />
      <br></br>
      <label>Address</label>
      <input type="text"  value = {listing.address} name="address" />
      <br></br>
      <label>City</label>
      <input type="text"  value = {listing.city} name="city" />
      <br></br>
      <label>State</label>
      <input type="text"  value = {listing.state} name="state" />
      <br></br>
      <label>Name</label>
      <input type="text"  value = {listing.name}  name="name" />
      <br></br>
      <label>Message</label>
      <textarea placeholder = "I'm very interested in this apartment, please respond if still available" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
export default EmailForm;