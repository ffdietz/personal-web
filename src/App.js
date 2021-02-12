import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About  from './components/About/About'

export default function App () {

    return (
      // <div className="App">
      <Router>
        <Navbar />
        <Route path= '/about' component={About}/>
      </Router>
      // </div>
    );
}
