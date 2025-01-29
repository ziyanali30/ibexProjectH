import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ITSupport from "./components/ITSupport";
import BPOServices from "./components/BPO";
import AnalyticsComponent from "./components/analytics";
function RedirectPage() {
  // Change this to your target URL
  window.location.href =
    "https://th.bing.com/th/id/R.d9442cb2dfe12b917e467b01668020db?rik=6I97rzUo3iG6LQ&pid=ImgRaw&r=0";
  return null; // Prevent rendering anything
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<RedirectPage />} />
          {/* <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/IT" element={<ITSupport />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/bpo" element={<BPOServices />} /> */}
        </Routes>
        <Footer />
        <AnalyticsComponent></AnalyticsComponent>
      </div>
    </Router>
  );
}

export default App;
