import React from "react";
import HeaderIcon from "@material-ui/icons/EventNote";

function Header() {
  return (
    <header>
      <h1>
        <HeaderIcon fontSize="large" /> Keeper-App
      </h1>

      <ul>
        <li>Log In</li>
        <li>Sign-Up</li>
      </ul>
    </header>
  );
}

export default Header;
