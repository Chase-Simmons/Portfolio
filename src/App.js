import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Particles from './components/particles/particles';
import Home from './components/home/home';
import Works from './components/works/works';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="landing">
          <Particles />
          <div className="fix-particle-margin"></div>
          <Home />
          <Works />
        </div>
      </div>
    );
  }
}

export default App;
