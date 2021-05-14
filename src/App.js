import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Works from './components/works/works';
import About from './components/about/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="landing">
          <Home />
          <Works />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
