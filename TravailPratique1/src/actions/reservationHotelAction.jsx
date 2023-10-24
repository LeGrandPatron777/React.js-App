import { REGISTER_RESERVATION_HOTEL } from "./actionTypes";

export const registerHotelReservation = (hotel) => {
  return {
    type: REGISTER_RESERVATION_HOTEL,
    payload: hotel,
  };
};
