import { REGISTER_USER } from "./actions/actionTypes";
import { SET_CURRENT_USER } from "./actions/actionTypes";

const initialState = {
  users: [],
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
