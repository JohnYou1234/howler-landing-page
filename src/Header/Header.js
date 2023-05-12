import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <a href="#" className='nav-link'><h1 className="header-title">Howler</h1></a>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#team" className="nav-link">Who We Are</a>
        <a href="#contribute-page" className="nav-link">Contribute</a>
        <a href="https://github.com/JohnYou1234/capstone-teamU" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub size={20} className="github-icon" />
          View Repo
        </a>
      </div>
    </div>
  );
}

export default Header;
