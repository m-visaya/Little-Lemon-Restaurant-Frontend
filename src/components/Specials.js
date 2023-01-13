import React from "react";
import Button from "./Button";
import SpecialsCard from "./SpecialsCard";
import greek_salad from "../assets/images/greek salad.jpg";

export default function Specials() {
  return (
    <section className="Specials">
      <header>
        <h1>This weeks specials!</h1>
        <Button label="Online Menu" classStyle="button-yellow" />
      </header>
      <section className="Card-Container">
        <SpecialsCard image={greek_salad}></SpecialsCard>
        <SpecialsCard image={greek_salad}></SpecialsCard>
        <SpecialsCard image={greek_salad}></SpecialsCard>
      </section>
    </section>
  );
}
