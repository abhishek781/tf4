import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="title-box">
          <Link to="/" className="navbar-title">
            Dictionary App
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>&nbsp<Link to="/history">History</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


