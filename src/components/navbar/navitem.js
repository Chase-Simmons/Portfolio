import React, { Component } from 'react';

const highlight = document.createElement('span');

highlight.classList.add('nav-highlight');
document.body.append(highlight);
highlight.style.transform = `translate(5000px, 27px)`;

export default class NavItem extends Component {
  componentDidMount() {
    const testNode = this._reactInternals.child.stateNode;
    if (testNode.innerHTML !== 'Home') return;
    console.log(testNode.innerHTML);
    highlight.style.width = `${testNode.clientWidth}px`;
    highlight.style.height = `${testNode.clientHeight}px`;
    highlight.style.transform = `translate(${testNode.offsetLeft}px, ${
      testNode.offsetTop - 1
    }px)`;
  }
  render() {
    const props = this.props;

    function onMouseEnter(e) {
      if (!e.relatedTarget.childNodes) return;

      const nodeChildren = [...e.relatedTarget.childNodes];

      if (nodeChildren.length !== 4) return;

      const thisNode = nodeChildren.filter(
        (node) => node.innerHTML === props.name
      );

      // console.log(nodeChildren.filter((node) => node.innerHTML === props.name));

      const coords = {
        width: thisNode[0].clientWidth,
        height: thisNode[0].clientHeight,
        top: thisNode[0].offsetTop - 1,
        left: thisNode[0].offsetLeft,
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    return (
      <li className="nav-item" onMouseEnter={onMouseEnter}>
        {this.props.name}
      </li>
    );
  }
}
