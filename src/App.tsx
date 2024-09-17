import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header />
    <Hero />
    {/* Add other components here */}
  </div>
);
}

export default App
