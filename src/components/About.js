import React from "react";
import RestaurantImg from "../assets/images/restaurant.jpg";
import ChefImg from "../assets/images/Mario and Adrian A.jpg";

export default function About() {
  return (
    <div className="About">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint
          pariatur nam culpa voluptatum. Beatae unde eveniet totam animi error
          minus iste quae ipsam, deleniti, quia sunt minima laboriosam,
          asperiores a? Sed mollitia eveniet harum esse. Facere ullam odio
          earum. Assumenda autem, earum neque fuga voluptas ab iste quam
          voluptatum.
        </p>
      </div>
      <div className="Img-Stack">
        <img src={ChefImg} />

        <img src={RestaurantImg} />
      </div>
    </div>
  );
}
