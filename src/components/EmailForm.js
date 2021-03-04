import React, {useState} from 'react';
import emailjs from 'emailjs-com';


// import './ContactUs.css';

function EmailForm({listing, setTextBox}){ 
    const [name, setName] = useState("Conor")
    const [address, setAddress] = useState(listing.address)
    const [message, setMessage] = useState("I'm very interested in this apartment, please respond if still available")
    // console.log(listing.saved_listings[0].id)

    function sendEmail(e) {
    e.preventDefault();

        if (listing.saved_listings){
   
          fetch(`http://localhost:3000/saved_listings/${listing.saved_listings[0].id}`,{
            method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            
        }
    
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
       
      <label>Broker Email</label>
      <input type="text" value = {listing.broker_email} name="contact" />
      <br></br>
      <label>Address</label>
      <input type="text"  value = {address} onChange = {(e) => setAddress(e.target.value)}name="address" />
      <br></br>
      <label>City</label>
      <input type="text"  value = {listing.city} name="city" />
      <br></br>
      <label>State</label>
      <input type="text"  value = {listing.state} name="state" />
      <br></br>
      <label>Name</label>
      <input type="text"  value ={name}   onChange = {(e) => (setName(e.target.value))}  name="name" />
      <br></br>
      <label>Message</label>
      <textarea value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
export default EmailForm;