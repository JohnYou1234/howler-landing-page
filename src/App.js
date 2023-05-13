import Home from './Home/Home.js';
import './App.css';
import Header from './Header/Header.js';
import {React} from 'react';
import About from './About/About.js';
import TeamPage from './Team/TeamPage.js';
import ContributePage from './Contribute/ContributePage.js';
import VideoPlayer from './Video/Video.js';
import Footer from './Footer/Footer.js';

/**
 * App.js, the container for all of the componenmts
 * @return {ReactFragment} The Container
 */
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <VideoPlayer />
      <TeamPage />
      <ContributePage />
      <Footer />
    </>
  );
}

export default App;
