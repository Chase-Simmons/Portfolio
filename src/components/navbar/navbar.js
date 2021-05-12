import NavItem from './navitem';
import highlight from './navhighlight';
import Brand from '../../assets/Cs.png';

import './navbar.css';

const navItemNames = ['Home', 'Works', 'About', 'Contact'];
let onNavItem = false;

const Nodes = {};
let selectedTab;

export default function navbar() {
  function updateNodes(node, data) {
    Nodes[node] = data;
    console.log('setting data', Nodes);
  }

  function getNode(node) {
    return Nodes[node];
  }

  function selectTab(selection) {
    selectedTab = selection;
  }

  window.addEventListener('resize', () => {
    highlight.style.cssText = `transform: translate(${
      Nodes[selectedTab].offsetLeft
    }px, ${Nodes[selectedTab].offsetTop - 1}px); width: ${
      Nodes[selectedTab].clientWidth
    }px; height: ${Nodes[selectedTab].clientHeight}px; `;
  });

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img className="navbar-brand-image" src={Brand} />
        </div>
        <ul className="navbar-nav">
          {navItemNames.map((name) => (
            <NavItem
              functions={{
                updateNodes: (node, data) => {
                  updateNodes(node, data);
                },
                getNode: (node) => {
                  getNode(node);
                },
                selectTab: (selection) => {
                  selectTab(selection);
                },
              }}
              name={name}
              key={`nav${name}`}
              onNavItem={(bool) => {
                if (bool === undefined) return onNavItem;
                onNavItem = bool;
                return onNavItem;
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
