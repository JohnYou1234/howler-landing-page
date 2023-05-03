import Home from './Home/Home.js';
import './App.css';
import Header from './Header/Header.js'
import About from './About/About.js';
import FaqPage from './FAQ/FaqPage.js';
import TeamPage from './Team/TeamPage.js';
import ContributePage from './Contribute/ContributePage.js';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <FaqPage />
      <TeamPage />
      <ContributePage />
    </>
  );
}

export default App;
