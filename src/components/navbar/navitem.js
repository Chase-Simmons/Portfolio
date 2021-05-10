import React, { Component } from 'react';
import highlight from './navhighlight';

let isTransitioning;
let oldLocation;

const Nodes = {};

export default class NavItem extends Component {
  textColor = '#111118';

  componentDidMount() {
    const testNode = this._reactInternals.child.stateNode;
    Nodes[testNode.innerHTML] = testNode;
    if (testNode.innerHTML !== 'Home') return;
    highlight.style.width = `${testNode.clientWidth}px`;
    highlight.style.height = `${testNode.clientHeight}px`;
    highlight.style.transform = `translate(${testNode.offsetLeft}px, ${
      testNode.offsetTop - 1
    }px)`;
  }
  render() {
    window.addEventListener('resize', () => {
      highlight.style.cssText = `transform: translate(${
        Nodes.Home.offsetLeft
      }px, ${Nodes.Home.offsetTop - 1}px); width: ${
        Nodes.Home.clientWidth
      }px; height: ${Nodes.Home.clientHeight}px; `;
    });

    const props = this.props;

    function onMouseLeave(e) {
      props.onNavItem(false);

      setTimeout(() => {
        if (props.onNavItem() === false && isTransitioning === true) {
          props.onNavItem(false);
          isTransitioning = false;
          highlight.style.cssText = oldLocation;
        }
      }, 1000);
    }

    function onMouseEnter(e) {
      const thisNode = Nodes[props.name];

      if (isTransitioning !== true) {
        isTransitioning = true;
        oldLocation = highlight.style.cssText;
      }

      const coords = {
        width: Nodes[props.name].clientWidth,
        height: Nodes[props.name].clientHeight,
        top: Nodes[props.name].offsetTop - 1,
        left: Nodes[props.name].offsetLeft,
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

      setTimeout(() => {
        props.onNavItem(true);
      }, 5);
    }

    return (
      <li
        className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ color: this.textColor }}
      >
        {this.props.name}
      </li>
    );
  }
}
