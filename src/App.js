import Home from './Home/Home.js';
import './App.css';
import Header from './Header/Header.js'
import About from './About/About.js';
import TeamPage from './Team/TeamPage.js';
import ContributePage from './Contribute/ContributePage.js';
import VideoPlayer from './Video/Video.js';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <VideoPlayer />
      <TeamPage />
      <ContributePage />
    </>
  );
}

export default App;
