import React, { Component } from 'react';
import navCoords from '../navbar/navcoords';
import worksDetails from './worksdetails';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Necromancy from '../../assets/wizon.jpg';
import WiFind from '../../assets/wifind.png';
import ConnectHer from '../../assets/connectHer.png';

import './works.css';

const displayArray = [ConnectHer, Necromancy, WiFind];

export default class Home extends Component {
  state = {
    display: 0,
    left: '#f8f8ff',
    right: '#f8f8ff',
  };

  componentDidMount() {
    setTimeout(() => {
      this.updateCoords();
    }, 500);
  }
  updateCoords = () => {
    navCoords.About =
      this._reactInternals.child.stateNode.offsetHeight + navCoords.Works;
  };
  onClickLeft = () => {
    let setDisplay = this.state.display;
    setDisplay--;
    if (setDisplay < 0) {
      setDisplay = worksDetails.length - 1;
    }
    this.setState({ display: setDisplay });
  };
  onClickRight = () => {
    let setDisplay = this.state.display;
    setDisplay++;
    if (setDisplay > worksDetails.length - 1) {
      setDisplay = 0;
    }
    this.setState({ display: setDisplay });
  };

  render() {
    window.addEventListener('resize', this.updateCoords);
    return (
      <div className="works">
        <div className="works-container">
          <div className="works-align">
            <div className="works-left">
              <div className="works-display-container">
                <div className="works-display">
                  <img
                    src={displayArray[this.state.display]}
                    alt={worksDetails[this.state.display].title}
                    className="works-display-img"
                  />
                </div>
                <div className="works-display-knob-container">
                  <div
                    onMouseEnter={() => {
                      this.setState({ ...this.state, left: '#5a78b2' });
                    }}
                    onMouseLeave={() => {
                      this.setState({ ...this.state, left: '#f8f8ff' });
                    }}
                  >
                    <ArrowBackIosIcon
                      className="works-display-next-left"
                      onClick={this.onClickLeft}
                      style={{ color: this.state.left, fontSize: 25 }}
                    />
                  </div>
                  {displayArray.map((item, key) => {
                    return this.state.display === key ? (
                      <div
                        className="works-display-knob"
                        style={{ backgroundColor: '#f8f8ff80' }}
                      />
                    ) : (
                      <div className="works-display-knob" />
                    );
                  })}
                  <div
                    onMouseEnter={() => {
                      this.setState({ ...this.state, right: '#5a78b2' });
                    }}
                    onMouseLeave={() => {
                      this.setState({ ...this.state, right: '#f8f8ff' });
                    }}
                  >
                    <ArrowForwardIosIcon
                      className="works-display-next-right"
                      onClick={this.onClickRight}
                      style={{ color: this.state.right, fontSize: 25 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="works-spacing" />
            <div className="works-right">
              <div className="works-right-container">
                <div className="works-title-container">
                  <p className="works-title">
                    {worksDetails[this.state.display].title}
                  </p>
                </div>
                <div className="works-description-container">
                  <p className="works-description">
                    {worksDetails[this.state.display].description}
                  </p>
                </div>
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
