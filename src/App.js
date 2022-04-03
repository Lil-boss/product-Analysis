import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import About from './components/About/About'
import Navbar from "./components/Navbar/Navbar";
import Notfound from "./components/NotFound/Notfound";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </div>
  );
}

export default App;
