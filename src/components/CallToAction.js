import React from "react";
import restauranfood from "../assets/images/restauranfood.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function CallToAction() {
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
        <Link to="booking">
          <Button label="Reserve a Table" classStyle="button-yellow" />
        </Link>
      </section>
      <img src={restauranfood} alt="RestaurantFood" />
    </header>
  );
}
