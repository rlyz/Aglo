import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <h1>testing</h1>
      </div>
    </Router>

  );
}

export default App;
