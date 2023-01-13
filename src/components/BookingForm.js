import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props) {
  const [reservationDate, setReservationDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [reservationTime, setReservationTime] = useState("9:00");
  const [guests, setGuests] = useState(1);
  const [ocassion, setOccasion] = useState("Birthday");
  const [guestsValid, setGuestsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestsValid) return;
    navigate("/confirmed-booking");
  };

  const handleGuestsChange = (e) => {
    const numGuests = parseInt(e.target.value);
    setGuestsValid(true);
    if (numGuests < 1 || numGuests > 10) {
      setGuestsValid(false);
    }

    setGuests(numGuests);
  };

  return (
    <main className="Form-Container">
      <h1>Book Now</h1>
      <form
        style={{ display: "grid", gap: 10 }}
        onSubmit={handleSubmit}
        className="Booking-Form"
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          aria-label="Reservation Date"
          value={reservationDate}
          onChange={(e) => {
            setReservationDate(e.target.value);
            props.setAvailableTimes({ date: e.target.value });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          aria-label="Reservation Time"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        >
          {props.availableTimes?.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          aria-label="Number of Guests"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />
        {!guestsValid && (
          <p className="form-error-msg">
            *please enter a valid number of guests
          </p>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          aria-label="Occasion"
          value={ocassion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          aria-label="Submit Reservation"
          value="Make Your reservation"
          className={
            guestsValid
              ? "button-yellow button-form"
              : "button-yellow button-form button-form-disabled"
          }
        />
      </form>
    </main>
  );
}
