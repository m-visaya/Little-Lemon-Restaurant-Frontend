import React from "react";
import Specials from "./Specials";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";
import About from "./About";

export default function Main(props) {
  return (
    <main className="Main">
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}
