import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalyticsComponent from "./components/analytics";

// Local GIF path (ensure it's inside the public folder for easy access)
const localGif = "9idfpr.gif"; // Update the path as per your project structure

function RedirectPage() {
  // Randomly choose between the local GIF and external link
  const randomChoice = Math.random() < 0.5; // 50% chance

  if (randomChoice) {
    // Redirect to external link
    window.location.href = "https://th.bing.com/th/id/R.d9442cb2dfe12b917e467b01668020db?rik=6I97rzUo3iG6LQ&pid=ImgRaw&r=0";
  } else {
    // Render the local GIF
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={localGif} alt="Random GIF" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    );
  }

  return null; // Prevent rendering in case of a redirect
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirects to either the local GIF or external link randomly */}
          <Route path="*" element={<RedirectPage />} />
        </Routes>
        <AnalyticsComponent />
      </div>
    </Router>
  );
}

export default App;
