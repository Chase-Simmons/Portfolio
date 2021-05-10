import React, { Component } from 'react';
import ParticlesItem from './particlesitem';

import './particles.css';

const particlesParentNode = {};
export default class Particles extends Component {
  componentDidMount() {
    const thisNode = this._reactInternals.child.stateNode;
    particlesParentNode['parent'] = thisNode;
  }
  render() {
    console.log(particlesParentNode);
    return <div className="particles">{/* <ParticlesItem /> */}</div>;
  }
}
