import React from "react";

import BookingForm from "./BookingForm";

export default function Booking(props) {
  return (
    <main className="Booking">
      <BookingForm {...props} />
    </main>
  );
}
