import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About  from './components/About/About';
import Works  from './components/Works';
import Shop   from './components/Shop';
import Contact from './components/Contact';


export default function App () {

    return (
      <div className="App">
      
        <Navbar />

        <Router>
          <Route path= '/about'   component={ About }   />
          <Route path= '/works'   component={ Works }   />
          <Route path= '/shop'    component={ Shop }    />
          <Route path= '/contact' component={ Contact } />
        </Router> 
      </div>
    );
}
