import React from 'react';
import iSchoolLogo from './logo.jpg';
import './footer.css';

/**
 * footer component for footer, holds ischool logo
 * @return {Element} footer Element
 */
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={iSchoolLogo} alt="iSchool Logo" />
      </div>
    </footer>
  );
};

export default Footer;
