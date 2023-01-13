import React from "react";
import Logo from "../assets/images/Logo.svg";
import hamburger from "../assets/images/🦆 icon _hamburger menu.svg";

export default function Nav() {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="LittleLemon Logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
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
