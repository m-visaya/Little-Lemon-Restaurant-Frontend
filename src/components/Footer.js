import React from "react";
import Logo_footer from "../assets/images/Logo_footer.png";

export default function Footer() {
  return (
    <footer>
      <img src={Logo_footer} alt="Little Lemon Logo" width={100} />
      <section>
        <header>Doormat Navigation</header>
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
