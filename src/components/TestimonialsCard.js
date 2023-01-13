import React from "react";
import Person from "../assets/images/person.jpg";

export default function TestimonialsCard() {
  return (
    <div className="Testimonials-Card">
      <h3>9/10 ⭐</h3>
      <div>
        <img src={Person}></img>
        <p>John Doe</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni
        molestias nam eveniet voluptas aspernatur.
      </p>
    </div>
  );
}
