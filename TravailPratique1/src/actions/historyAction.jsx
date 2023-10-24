import { HISTORY } from "./actionTypes";

export const History = (Data) => {
  return {
    type: HISTORY,
    payload: Data,
  };
};
