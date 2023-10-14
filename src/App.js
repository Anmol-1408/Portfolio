import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <About/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
