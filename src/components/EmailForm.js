import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Button, Form} from 'semantic-ui-react'


// import './ContactUs.css';

function EmailForm({listing, setTextBox}){ 
    const [name, setName] = useState("Conor")
    const [address, setAddress] = useState(listing.address)
    const [message, setMessage] = useState("I'm very interested in this apartment, please respond if still available")
    // console.log(listing.saved_listings[0].id)

    function sendEmail(e) {
    e.preventDefault();
    let findSaved = listing.saved_listings.find(savedListing => savedListing.listing_id === listing.id)
        if (!!findSaved){
   
       
          fetch(`/saved_listings/${listing.saved_listings[0].id}`,{
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
  
    // <form className="email-form" onSubmit={sendEmail}>
       
      <Form success onSubmit={sendEmail}>
    
      <Form.Input  label='Email' type="text" value = {listing.broker_email} name="contact" />
      
      <Form.Input label="Address" type="text"  value = {address} onChange = {(e) => setAddress(e.target.value)}name="address" />
     
      <Form.Input label="City" type="text"  value = {listing.city} name="city" />
    
      <Form.Input label="State" type="text"  value = {listing.state} name="state" />
     
      <Form.Input label="Name" type="text"  value ={name}   onChange = {(e) => (setName(e.target.value))}  name="name" />
    
      <label>Message</label>
      <textarea label = "Message" value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" />
      {/* <Message
      success
      header='Email Sent!'
      content="You're email has been sent, and this listing has been added to your applied list"
    /> */}
      <Button>Submit</Button> 
       {/* <input type="submit" value="Send" /> */}
    </Form>
    // </form>
  );
}
export default EmailForm;