import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fab fa-githun" />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: "GitHub Finder"
};

export default Navbar;
