import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Particles from './components/particles/particles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Particles />
      </div>
    );
  }
}

export default App;
