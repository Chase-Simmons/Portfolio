import './navbar.css';

export default function navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Chase</div>
        <ul className="navbar-nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">Works</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </div>
  );
}
