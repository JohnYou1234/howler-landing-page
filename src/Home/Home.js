import React from 'react';
import './home.css';
import { FaArrowDown } from 'react-icons/fa';

function Home() {
  const handleButtonClick = () => {
    window.open('https://howler.onrender.com/board/', '_blank');
  };

  return (
    <div className="landing-page">
      <h1 className="landing-title">Howler</h1>
      <p className="landing-subtitle">An Online Community for UW Students</p>
      <button className="cta-button" onClick={handleButtonClick}>
        Make Your Howls
      </button>
      <div className="scroll-down-arrow">
        <a href="#about"><FaArrowDown size={24} /></a>
      </div>
    </div>
  );
}

export default Home;
