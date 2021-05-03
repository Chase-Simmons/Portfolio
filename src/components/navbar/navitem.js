import React, { Component } from 'react';
import highlight from './navhighlight';

let isTransitioning;
let oldLocation;

const eachNode = {};

export default class NavItem extends Component {
  componentDidMount() {
    const testNode = this._reactInternals.child.stateNode;
    eachNode[testNode.innerHTML] = testNode;
    if (testNode.innerHTML !== 'Home') return;
    highlight.style.width = `${testNode.clientWidth}px`;
    highlight.style.height = `${testNode.clientHeight}px`;
    highlight.style.transform = `translate(${testNode.offsetLeft}px, ${
      testNode.offsetTop - 1
    }px)`;
  }
  render() {
    window.addEventListener('resize', () => {
      highlight.style.cssText = `transform: translate(${eachNode.Home.offsetLeft}px, ${eachNode.Home.offsetTop}px); width: ${eachNode.Home.clientWidth}px; height: ${eachNode.Home.clientHeight}px; `;
    });

    const props = this.props;

    function onMouseLeave(e) {
      props.onNavItem(false);

      setTimeout(() => {
        if (props.onNavItem() === false) {
          if (isTransitioning === true) {
            props.onNavItem(false);

            highlight.style.cssText = oldLocation;
            isTransitioning = false;
          }
        }
      }, 1000);
    }

    function onMouseEnter(e) {
      if (!e.relatedTarget.childNodes) return;

      const nodeChildren = [...e.relatedTarget.childNodes];

      if (nodeChildren.length !== 4) return;

      const thisNode = nodeChildren.filter(
        (node) => node.innerHTML === props.name
      );

      // console.log(nodeChildren.filter((node) => node.innerHTML === props.name));

      if (isTransitioning !== true) {
        isTransitioning = true;
        oldLocation = highlight.style.cssText;
      }

      const coords = {
        width: thisNode[0].clientWidth,
        height: thisNode[0].clientHeight,
        top: thisNode[0].offsetTop - 1,
        left: thisNode[0].offsetLeft,
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
      >
        {this.props.name}
      </li>
    );
  }
}
