import React from 'react'
import './Contact.css'
import contact from '../images/contact.png'
function Contact() {
  return (
   <>
   <h2 className='contact_heading'>CONTACT</h2>
   <div className="cont_main">
    <div className="box1">
        <h4 className="cont_name">Name</h4>
        <input className='cont_input' type="text" placeholder='Enter your name'/>
  
        <h4 className="cont_name">Email</h4>
        <input className='cont_input' type="email" placeholder='Enter your email'/>

        <h4 className="cont_name">Message</h4>
        <textarea className='cont_textarea' name="" id="" cols="70" rows="8"></textarea>
 <br />
        <button className='cont_btn'>SUBMIT</button>
    </div>
    <div className="box2">
        <img src={contact} width="100%" alt="" />
    </div>
   </div>
   </>
  )
}

export default Contact