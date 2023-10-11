import { REGISTER_USER } from "./actionTypes";

export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};
