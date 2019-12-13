import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavHeader extends Component {
  state = {};
  render() {
    return (
      <nav id="nav_header">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./services">Services</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;
