import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const HotelInfo = () => {
  const [hotels, setHotels] = useState([]);

  const token = "6ccf4da559f0777e5a5c543cd67ca555";
  const location = "Quebec";
  const checkIn = "2023-11-13";
  const checkOut = "2023-12-18";
  const currency = "CAD";

  useEffect(() => {
    axios
      .get(
        `/api/hotellook/v2/cache.json?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&currency=${currency}&token=${token}`
      )
      .then((res) => {
        console.log(res.data);
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <div key={index}>
            <h1>{hotel.hotelName}</h1>
            <p>Location: {hotel.location.name}</p>
            <p>Country: {hotel.location.country}</p>
            <p>Price from: {hotel.priceFrom}</p>
            <p>Average price: {hotel.priceAvg}</p>
            <p>Stars: {hotel.stars}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default HotelInfo;
