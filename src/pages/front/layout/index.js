import React from "react";
import Menu from "./../../components/Menu";
import logo from "./../../logo.svg";

function LayoutPages(props) {
  return (
    <div id="header">
      <div className="container">
        <div className="row-between">
          <img src={logo} />
          <Menu user="a" />
          <div>
            <a href="#">Login</a> |
            <a href="register.html"> Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutPages;
