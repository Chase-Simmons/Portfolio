import './navbar.css';
import NavItem from './navitem';

import Brand from '../../assets/Cs.png';

const navItemNames = ['Home', 'Works', 'About', 'Contact'];
let onNavItem = false;

export default function navbar() {
  const Nodes = {};
  let selectedTab;

  function updateNodes(node, data) {
    console.log('setting data');
    Nodes[node] = data;
  }

  function getNode(node) {
    return Nodes[node];
  }

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
