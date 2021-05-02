import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Raw from './raw';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Raw />
      </div>
    );
  }
}

export default App;
