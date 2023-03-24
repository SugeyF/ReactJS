import React from 'react'
import "./Navbar.css";

import Shop from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <a href="www.google.com">Home</a>
        </li>
        <li>
          <a href="www.google.com">Contact</a>
        </li>
        <li>
          <a href="www.google.com">About</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;