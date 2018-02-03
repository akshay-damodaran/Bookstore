import React from 'react';

const Navbar = ({ loggedIn, username }) => (
  <div id="navbar">
    <li>Home</li>
    <li>Hi {username}</li>
  </div>
);

export default Navbar;
