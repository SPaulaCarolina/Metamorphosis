import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <AboutUs title="About Me" />
      <Portfolio title="My works" /> 
      <Contact title="Get in touch" />
      <Footer />
    </div>
  );
}

export default App;
