import React from 'react';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='app__footer-links'>
      <div className='app__footer-links_logo'>
        <img src={images.LDNlogo} alt='app_logo' />
        <p>LDN Sport Social Limited</p>
        <p>Unit 1, Kennet House, 8 Enterprise Way</p>
        <p>London SW18 1GF UK</p>
        <p>Company Registration No: 14487021</p>
        <p>VAT Reg No. 430084532</p>
      </div>
      <div className='app__footer-links_div'>
        <h4>Links</h4>
        <a
          href='https://twitter.com/ldnsportsocial'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Twitter</p>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100088593576706'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Facebook</p>
        </a>
        <a
          href='https://www.instagram.com/ldn.sport.social/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Instagram</p>
        </a>
      </div>
      <div className='app__footer-links_div'>
        <h4>Company</h4>
        <a
          href='https://raw.githubusercontent.com/mander5/LDNsportSocial/master/src/assets/LDNSportSocialTermsAndConditions.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Terms & Conditions</p>
        </a>
        <a href='mailto:sam@ldnsportsocial.com'>
          <p>Contact</p>
        </a>
      </div>
      <div className='app__footer-links_div'>
        <h4>Get in touch</h4>
        <p>London, UK</p>
        <a href='mailto:sam@ldnsportsocial.com'>
          <p>sam@ldnsportsocial.com</p>
        </a>
      </div>
    </div>

    <div className='app__footer-copyright'>
      <p>©2022 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
