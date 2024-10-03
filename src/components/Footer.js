import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <SocialIcon
        url="https://www.linkedin.com/in/spandan-patel-90276b300"
        className="social-icon"
      />
      <SocialIcon url="mailto:danspan06@gmail.com" className="social-icon" />
      <SocialIcon url="https://github.com/s-pat6" className="social-icon" />
    </div>
  );
}

export default Footer;