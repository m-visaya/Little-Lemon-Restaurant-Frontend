import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";

test("Check if there are schedule times returned", () => {
  const dates = initializeTimes;
  expect(dates).not.toBe([]);
});

test("Check if scheduletimes are updated dynamically", () => {
  const dates = updateTimes("", { date: "2023-01-10" });
  expect(dates).not.toBe([]);
});
