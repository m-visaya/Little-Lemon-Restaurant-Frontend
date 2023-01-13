import React from "react";
import Logo from "../assets/images/Logo.svg";
import hamburger from "../assets/images/icon _hamburger menu.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="LittleLemon Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservation</Link>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      <img src={hamburger} style={{ display: "none" }} />
    </nav>
  );
}
