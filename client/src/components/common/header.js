import React, { Component } from "react";
import NavHeader from "./navHeader";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div id="header_center">
          <figure>
            <img id="logo" src={require("../../assets/img/logo-white.png")} />
          </figure>
          <NavHeader />
        </div>
      </header>
    );
  }
}

export default Header;
