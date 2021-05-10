import React, { Component } from 'react';

import Selfie from '../../assets/me.png';
import Background from '../../assets/background.jpg';

import './works.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className="home-background" src={Background} />
        <div className="home-container">
          <div className="home-align">
            <div className="home-left">
              <h1 className="home-intro">Hello, my name is Chase.</h1>
              <h1 className="home-intro">I am a Software Engineer.</h1>
            </div>
            <div className="home-right">
              <div className="home-image">
                <img src={Selfie} alt="image" className="home-selfie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
