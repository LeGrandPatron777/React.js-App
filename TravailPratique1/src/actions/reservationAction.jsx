import { REGISTER_RESERVATION } from "./actionTypes";

export const registerReservation = (flightData) => {
  return {
    type: REGISTER_RESERVATION,
    payload: flightData,
  };
};
