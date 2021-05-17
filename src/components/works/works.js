import React, { Component } from 'react';
import navCoords from '../navbar/navcoords';

import worksDetails from './worksdetails';

import './works.css';

export default class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.updateCoords();
    }, 500);
  }
  updateCoords = () => {
    navCoords.About =
      this._reactInternals.child.stateNode.offsetHeight + navCoords.Works;
  };
  render() {
    window.addEventListener('resize', this.updateCoords);
    return (
      <div className="works">
        <div className="works-container">
          <div className="works-align">
            <div className="works-left">
              <div className="works-display-container">
                <div className="works-display"></div>
                <div className="works-display-knob-container">
                  <div className="works-display-next-left"></div>
                  <div className="works-display-knob" />
                  <div className="works-display-knob" />
                  <div className="works-display-knob" />
                  <div className="works-display-knob" />
                  <div className="works-display-next-right"></div>
                </div>
              </div>
            </div>
            <div className="works-right">
              <div className="works-right-container">
                <div className="works-title"></div>
                <div className="works-description"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <svg className="works-svg">
          <path
            className="works-svg-path"
            fill="#f8f8ff"
            fill-opacity="1"
            d="M0,96L48,133.3C96,171,192,245,288,272C384,299,480,277,576,240C672,203,768,149,864,117.3C960,85,1056,75,1152,112C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    );
  }
}
