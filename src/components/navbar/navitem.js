import React, { Component } from 'react';
import highlight from './navhighlight';

let isTransitioning;
let oldLocation;

const Nodes = {};

export default class NavItem extends Component {
  textColor = '#111118';

  componentDidMount() {
    const testNode = this._reactInternals.child.stateNode;
    this.props.functions.updateNodes(this.props.name, testNode);
    Nodes[testNode.innerHTML] = testNode;
    if (testNode.innerHTML !== 'Home') return;
    highlight.style.width = `${testNode.clientWidth}px`;
    highlight.style.height = `${testNode.clientHeight}px`;
    highlight.style.transform = `translate(${testNode.offsetLeft}px, ${
      testNode.offsetTop - 1
    }px)`;
  }
  render() {
    const props = this.props;
    function onMouseLeave() {
      props.onNavItem(false);

      setTimeout(() => {
        if (props.onNavItem() === false && isTransitioning === true) {
          props.onNavItem(false);
          isTransitioning = false;
          highlight.style.cssText = oldLocation;
        }
      }, 1000);
    }

    function onMouseEnter() {
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

    function onClick() {
      props.functions.selectTab(props.name);
      const coords = {
        width: Nodes[props.name].clientWidth,
        height: Nodes[props.name].clientHeight,
        top: Nodes[props.name].offsetTop - 1,
        left: Nodes[props.name].offsetLeft,
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

      oldLocation = highlight.style.cssText;
    }

    return (
      <li
        className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        style={{ color: this.textColor }}
      >
        {this.props.name}
      </li>
    );
  }
}
