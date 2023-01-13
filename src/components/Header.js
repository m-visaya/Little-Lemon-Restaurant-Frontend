import React from "react";
import restauranfood from "../assets/images/restauranfood.jpg";
import Button from "./Button";

export default function Header() {
  return (
    <header className="Header">
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned <br />
          Mediterranean restaurant, <br />
          focused on traditional
          <br />
          recipes served with a modern twist.
        </p>
        <Button label="Reserve a Table" classStyle="button-yellow" />
      </section>
      <img src={restauranfood} alt="RestaurantFood" />
    </header>
  );
}
