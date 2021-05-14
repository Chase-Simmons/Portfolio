import React, { Component } from 'react';
import navCoords from '../navbar/navcoords';
import Selfie from '../../assets/me.png';

import './home.css';

export default class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.updateCoords();
    }, 500);
  }
  updateCoords = () => {
    navCoords.Works = this._reactInternals.child.stateNode.offsetHeight;
  };
  render() {
    window.addEventListener('resize', this.updateCoords);
    return (
      <div className="home">
        <div className="home-container">
          <div className="home-align">
            <div className="home-left">
              <h1 className="home-intro">Hello, my name is Chase.</h1>
              <h1 className="home-intro">I am a Software Engineer.</h1>
            </div>
            <div className="home-right">
              <div className="home-image">
                <img src={Selfie} alt="home" className="home-selfie" />
              </div>
            </div>
          </div>
          <div className="home-fix" />
        </div>
      </div>
    );
  }
}
