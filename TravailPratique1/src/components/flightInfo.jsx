import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FlightInfo = () => {
  const [flights, setFlights] = useState({});
  const [currency, setCurrency] = useState("");
  const [destinationKey, setDestinationKey] = useState(null);

  const token = "6ccf4da559f0777e5a5c543cd67ca555";
  const origin = "YUL";
  const destination = "CDG";
  const depart_date = "2023-11-09";
  const return_date = "2023-12-06";

  useEffect(() => {
    axios
      .get(
        `/api/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${depart_date}&return_date=${return_date}&page=1&currency=CAD&token=${token}`
      )
      .then((res) => {
        if (res.data && res.data.data) {
          setDestinationKey(Object.keys(res.data.data)[0]);
          setFlights(res.data.data);
          if (res.data.currency) {
            setCurrency(res.data.currency);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!destinationKey || !flights[destinationKey]) {
    return <div>Chargement des informations de vol...</div>;
  }

  return (
    <div>
      {Object.values(flights[destinationKey]).map((flightData) => (
        <div key={flightData.departure_at}>
          <p>
            <b>Départ:</b>{" "}
            {flightData.departure_at &&
              new Date(flightData.departure_at).toLocaleDateString()}{" "}
            {flightData.departure_at &&
              new Date(flightData.departure_at).toLocaleTimeString()}
          </p>
          <p>
            <b>Retour:</b>{" "}
            {flightData.return_at &&
              new Date(flightData.return_at).toLocaleDateString()}{" "}
            {flightData.return_at &&
              new Date(flightData.return_at).toLocaleTimeString()}
          </p>
          <p>
            <b>Compagnie aérienne:</b> {flightData.airline}
          </p>
          <p>
            <b>Numéro de vol:</b> {flightData.flight_number}
          </p>
          <p>
            {flightData.price} {currency}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FlightInfo;
