import {
  REGISTER_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  UPDATE_CURRENT_USER,
  REGISTER_RESERVATION,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  reservations: [],
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
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        users: state.users.map((user) =>
          user.email === action.payload.email ? action.payload : user
        ),
      };
    case REGISTER_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
