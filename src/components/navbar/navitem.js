import React, { Component } from 'react';
import highlight from './navhighlight';
import navCoords from './navcoords';

let isTransitioning;
let oldLocation;

export default class NavItem extends Component {
  textColor = '#111118';

  componentDidMount() {
    let thisNode = this._reactInternals.child.stateNode;
    this.props.functions.updateNodes(this.props.name, thisNode);
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
        width: props.Nodes[props.name].clientWidth,
        height: props.Nodes[props.name].clientHeight,
        top: props.Nodes[props.name].offsetTop - 1,
        left: props.Nodes[props.name].offsetLeft,
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

      setTimeout(() => {
        props.onNavItem(true);
      }, 5);
    }

    function onClick() {
      window.scrollTo({
        left: 0,
        top: navCoords[props.name],
        behavior: 'smooth',
      });
      props.functions.selectTab(props.name);
      const coords = {
        width: props.Nodes[props.name].clientWidth,
        height: props.Nodes[props.name].clientHeight,
        top: props.Nodes[props.name].offsetTop - 1,
        left: props.Nodes[props.name].offsetLeft,
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
