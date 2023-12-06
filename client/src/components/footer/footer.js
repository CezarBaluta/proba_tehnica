import React from 'react';
import './footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/lsacbucuresti/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-white.png" alt="Instagram Logo" />
        </a>
        <a href="https://www.facebook.com/LsacBucuresti/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-white.png" alt="Facebook Logo" />
        </a>
        <a href="https://www.twitch.tv/lsac_bucuresti" target="_blank" rel="noopener noreferrer">
          <img src="/twitch-white.png" alt="Twitch Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
