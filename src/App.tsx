import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>  
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    <Footer/>
  </div>
    </Router>
);
}

export default App
