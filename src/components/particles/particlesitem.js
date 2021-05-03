import React, { Component } from 'react';

import particle from './particle';

const allParticles = {};
let particleCount = 0;

export default class ParticlesItem extends Component {
  componentDidMount() {
    console.log(this);
    particleCount++;
    const thisNode = { ...this._reactInternals.child.stateNode };
    allParticles[`${particleCount}`] = thisNode;
    console.log(particleCount);
  }
  render() {
    return <div />;
  }
}
