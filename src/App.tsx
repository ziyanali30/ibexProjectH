import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalyticsComponent from "./components/analytics";

// Local GIF path (ensure it's inside the public folder for easy access)
const localGif = "9idfpr.gif"; // Update with your correct path

// External GIF URL
const externalGif = "https://th.bing.com/th/id/R.d9442cb2dfe12b917e467b01668020db?rik=6I97rzUo3iG6LQ&pid=ImgRaw&r=0";

function RandomGifDisplay() {
  // Randomly choose between local GIF and external GIF
  const selectedGif = Math.random() < 0.5 ? localGif : externalGif;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      backgroundColor: "#f4f4f4" // Optional background color
    }}>
      <img 
        src={selectedGif} 
        alt="Random GIF" 
        style={{
          maxWidth: "80%", // Scale up
          height: "auto",
          transform: "scale(1.2)", // Slightly scale up the GIF
          borderRadius: "10px" // Optional rounded corners
        }} 
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Always displays a randomly selected GIF */}
          <Route path="*" element={<RandomGifDisplay />} />
        </Routes>
        <AnalyticsComponent />
      </div>
    </Router>
  );
}

export default App;
