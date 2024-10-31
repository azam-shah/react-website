import React from 'react'
import "./Contact.css";
import phone_icon from "../images/icons-phone.png";
import email_icon from "../images/icons-mail.png";
import Footer from './Footer';

function Contact() {
  return (
    <>
    <div className='contact-container'>
      <div className='contact-box'>
        <div className='mail-box'>
          <div className='call'>
            <div><img src={phone_icon} alt="" /></div>
            <div>< p>Call To Us</ p></div>
          </div>
          <div className='peras'>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className='email'>
            <div><img src={email_icon} alt="" /></div>
            <div>< p>Write To US</ p></div>
          </div>
          <div className='mail'>
            <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>


        <div className='message-container'>
          <div className='inputs'>
            <div>
              <input type="text" name="name" id="name" placeholder='Your Name *' />
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder='Your Email *' />
            </div>
            <div>
              <input type="phone" name="phone" id="phone" placeholder='Your phone *' />
            </div>
          </div>
          <div className='message'>
            <input type="message" name="message" id="message" placeholder='Message *' />
          </div>
          <div className='buttons'>
           <button type='btn' id='send-btn'>Send Massage</button>
          </div>
        </div>


      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;
