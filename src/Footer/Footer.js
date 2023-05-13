import React from 'react';
import iSchoolLogo from './logo.jpg';
import './footer.css';
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={iSchoolLogo} alt="iSchool Logo" />
        <p>© {new Date().getFullYear()} iSchool. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
