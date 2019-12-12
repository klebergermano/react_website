import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavHeader extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./services">Services</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;
