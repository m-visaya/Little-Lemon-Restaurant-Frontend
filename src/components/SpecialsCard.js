import React from "react";
import Icon from "../assets/images/deliver.svg";

export default function SpecialsCard(props) {
  return (
    <section className="Specials-Card">
      <img src={props.image} alt="card-image" />
      <div className="Card-Body">
        <div>
          <h3>Greek Salad</h3>
          <p>$ 9.00</p>
        </div>
        <p>
          Thr famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>
          <p>Order a delivery</p>
          <img src={Icon} />
        </button>
      </div>
    </section>
  );
}
