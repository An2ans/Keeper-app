import React from "react";
import HeaderIcon from "@material-ui/icons/EventNote";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>
        <Link to="/">
          <HeaderIcon fontSize="large" /> Keeper-App
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign-Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
