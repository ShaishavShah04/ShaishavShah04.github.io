import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      {/* Navbar */}

      {/* Mainpage */}
      <LandingPage />
      {/* About Me */}
      <AboutMe />
      {/* Projects */}
      <Projects />
      {/* Experience */}
      <Experience />
      {/* Footer */}

    </div>
  );
}

export default App;
