import React from 'react';
import { IoMail } from "react-icons/io5";
import '../styles/contact.css';

const Components = () => {
  return (
    <div id='Contact' className='contact'>
      {/* Flexbox to align sections */}
      <div className='contact-container'>
        
        {/* Left Section: Call Section */}
        <div className='call-section'>
          <h2 className='gradient-text'>Let's get in Touch</h2>
          <p className='section-description'>
            Lets have a call and get in touch.
          </p>
          <div className='contact-info'>
            <IoMail size={30} /> mehakfaheem1234@gmail.com
          </div>
        </div>
        
        {/* Right Section: Form */}
        <div className='form-section'>
          <div className='input-group'>
            <label htmlFor="name">Name</label>
            <input type="text" className='input-field' id='name' />
          </div>
          <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="text" className='input-field' id='email' />
          </div>
          <div className='input-group'>
            <label htmlFor="msg">Message</label>
            <textarea className='input-field' id='msg' rows={8}></textarea>
          </div>
          <button className='send-button'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Components;
