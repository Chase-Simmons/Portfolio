import React, { Component } from 'react';

import './contact.css';

export default class Home extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.updateCoords();
  //   }, 500);
  // }
  // updateCoords = () => {
  //   navCoords.Works = this._reactInternals.child.stateNode.offsetHeight;
  // };
  render() {
    window.addEventListener('resize', this.updateCoords);
    return <div className="contact"></div>;
  }
}
