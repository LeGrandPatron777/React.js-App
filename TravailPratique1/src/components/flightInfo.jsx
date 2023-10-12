import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FlightInfo = () => {
  const [flights, setFlights] = useState({}); // Initialisez avec un objet vide
  const [dates, setDates] = useState([]);

  const token = "6ccf4da559f0777e5a5c543cd67ca555";

  useEffect(() => {
    axios
      .get(
        `/api/v1/prices/calendar?origin=YUL&destination=CDG&depart_date=2023-11&return_date=2023-12&token=${token}&currency=CAD`
      )
      .then((res) => {
        if (res.data && res.data.data) {
          // Vérifiez que les données existent avant de les utiliser
          setDates(Object.keys(res.data.data));
          setFlights(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return dates.map((date) => {
    const flight = flights[date];

    if (flight) {
      // Assurez-vous que l'objet de vol existe avant d'y accéder
      return (
        <div key={date}>
          <p>
            <b>{date}</b>
          </p>
          <p>
            <span>{flight.origin}</span> to <span>{flight.destination}</span>
          </p>
          <p>{flight.price} CAD</p>
          <hr />
        </div>
      );
    } else {
      return null; // Renvoyez null si l'objet de vol n'existe pas pour cette date
    }
  });
};

export default FlightInfo;
