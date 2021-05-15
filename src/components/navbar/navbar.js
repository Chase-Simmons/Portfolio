import NavItem from './navitem';
import highlight from './navhighlight';
import navCoords from './navcoords';
import Brand from '../../assets/Cs.png';

import './navbar.css';

const navItemNames = ['Home', 'Works', 'About', 'Contact'];
let onNavItem = false;

const Nodes = {};
let selectedTab = 'Home';

export default function navbar() {
  function updateNodes(node, data) {
    Nodes[node] = data;
    if (node === 'Home') {
      onLoadHome();
    }
  }

  function getNode(node) {
    return Nodes[node];
  }

  function selectTab(selection) {
    selectedTab = selection;
  }

  function onLoadHome() {
    highlight.style.width = `${Nodes.Home.clientWidth}px`;
    highlight.style.height = `${Nodes.Home.clientHeight}px`;
    highlight.style.transform = `translate(${Nodes.Home.offsetLeft}px, ${
      Nodes.Home.offsetTop - 1
    }px)`;
  }

  function moveSelectedTab() {
    highlight.style.cssText = `transform: translate(${
      Nodes[selectedTab].offsetLeft
    }px, ${Nodes[selectedTab].offsetTop - 1}px); width: ${
      Nodes[selectedTab].clientWidth
    }px; height: ${Nodes[selectedTab].clientHeight}px; `;
  }
  window.addEventListener('resize', moveSelectedTab);

  window.addEventListener('scroll', () => {
    if (
      window.scrollY > navCoords.Works * 1.2 &&
      window.scrollY < navCoords.About * 2
    ) {
      selectedTab = 'About';
      moveSelectedTab();
    } else if (
      window.scrollY > navCoords.Works / 2.2 &&
      window.scrollY < navCoords.Works * 1.2
    ) {
      selectedTab = 'Works';
      moveSelectedTab();
    } else {
      selectedTab = 'Home';
      moveSelectedTab();
    }
  });
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img className="navbar-brand-image" src={Brand} alt="Branded-Name" />
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
              Nodes={Nodes}
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
