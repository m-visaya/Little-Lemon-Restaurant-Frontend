import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useReducer } from "react";
import "./App.css";
import Main from "./components/Main";
import Booking from "./components/Booking";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI } from "./api";

export const updateTimes = (state, action) => fetchAPI(new Date(action.date));
export const initializeTimes = fetchAPI(new Date());

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Main availableTimes={availableTimes} />
          <Footer />
        </>
      ),
    },
    {
      path: "/booking",
      element: (
        <>
          <Nav />
          <Booking
            availableTimes={availableTimes}
            setAvailableTimes={dispatch}
          />
          <Footer />
        </>
      ),
    },
    {
      path: "/confirmed-booking",
      element: (
        <>
          <Nav />
          <ConfirmedBooking />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
