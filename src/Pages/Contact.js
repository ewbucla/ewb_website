import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../CSS/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_u8b1a4o', 'template_klz92zg', form.current, 'kzQa1CH1wltlGclM-')
      .then((result) => {
          console.log(result.text)
          form.current.reset();
      }, (error) => {
          console.log(error.text)
      });
  };

  return (
    <div className="contact">
      <div className='contactus_banner'>
        <div className="contactus_banner-overlay"></div>
        <div className='contactus_banner-text'>Contact Us</div>
      </div>
      <div className="rightSide">
        {/* <h1> Contact Us</h1> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="user_name" placeholder="Enter full name..." required/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Enter email..." required/>
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Enter message..." required/>
        <button type="submit" value="Send">SEND</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;