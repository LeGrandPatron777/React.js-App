import { UPDATE_USER_BALANCE } from "./actionTypes";

export const updateUserBalance = (userId, newBalance) => ({
  type: UPDATE_USER_BALANCE,
  payload: {
    userId,
    newBalance,
  },
});
