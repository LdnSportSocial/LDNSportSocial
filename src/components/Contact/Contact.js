import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className='app__cta' id='contact'>
    <script async src='https://www.tiktok.com/embed.js'></script>
    <div className='app__cta-content'>
      <p>
        Are you ready to connect with millions of sports fans? Contact LDN Sport
        Social for a free consultation to have your products or services seen by
        the right people at the best sporting events.
      </p>
      <h3>Connect with our team.</h3>
    </div>
    <div className='app__cta-btn'>
      <a href='mailto:sam@ldnsportsocial.com'>
        <button type='button'>Contact</button>
      </a>
    </div>
  </div>
);

export default Contact;
