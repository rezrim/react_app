import React from "react";

function Menu({ user }) {
  return (
    <ul>
      <li>Home</li>
      {user === "b" &&
        <li>
          <a href="login.html">Calculator</a>
        </li>}
      <li>Blog</li>
      <li>Job Information</li>
      <li>About Us</li>
    </ul>
  );
}

export default Menu;
