import React from "react";
import Logo_footer from "../assets/images/Logo_footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={Logo_footer} alt="Little Lemon Logo" />
      <section>
        <header>Navigation</header>
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
      </section>
      <section>
        <header>Contact</header>
        <p>Adress</p>
        <p>Phone Number</p>
        <p>Email</p>
      </section>
      <section>
        <header>Social Media Links</header>
        <p>Adress</p>
        <p>Phone Number</p>
        <p>Email</p>
      </section>
    </footer>
  );
}
