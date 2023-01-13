import React from "react";
import Logo from "../assets/images/LittleLemon_icon.png";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <section className="Booking-Confirmed">
      <h1>Your Booking has been confirmed!</h1>
      <img src={Logo} alt="LittleLemonLogo" />
      <button className="button-yellow" onClick={() => navigate("/")}>
        Return to Home
      </button>
    </section>
  );
}
