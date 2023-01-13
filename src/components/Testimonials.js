import React from "react";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  return (
    <section className="Testimonials">
      <div>
        <h1>Testimonials</h1>
        <div className="Testimonials-Card-Container">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
    </section>
  );
}
