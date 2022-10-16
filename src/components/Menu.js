import React from "react";
import { Link } from "react-router-dom";

function Menu({ user }) {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {user === "b" &&
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>}
      <li>Blog</li>
      <li>Job Information</li>
      <li>About Us</li>
    </ul>
  );
}

export default Menu;
