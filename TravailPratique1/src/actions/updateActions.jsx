// fichier actions.js
import { UPDATE_CURRENT_USER } from "./actionTypes";

export const updateCurrentUser = (userData) => ({
  type: UPDATE_CURRENT_USER,
  payload: userData,
});
