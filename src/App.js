import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      {/* Navbar */}
      {/* <Navbar /> */}
      {/* Mainpage */}
      <LandingPage />
      {/* About Me */}
      <AboutMe />
      {/* Projects */}
      <Projects />
      {/* Experience */}
      <Experience />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
