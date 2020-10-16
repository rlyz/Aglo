import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/navbar";
import Youtube from "./Components/Youtube/youtube";
import youtube from './Components/Youtube/youtube';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Youtube />
        <h1>testing</h1>
      </div>
    </Router>

  );
}

export default App;
