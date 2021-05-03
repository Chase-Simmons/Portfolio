import './navbar.css';
import NavItem from './navitem';

import Brand from '../../assets/Cs.png';

const navItemNames = ['Home', 'Works', 'About', 'Contact'];
let onNavItem = false;

export default function navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img className="navbar-brand-image" src={Brand} />
        </div>
        <ul className="navbar-nav">
          {navItemNames.map((name) => (
            <NavItem
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
