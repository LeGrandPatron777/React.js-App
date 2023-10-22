import {
  REGISTER_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  UPDATE_CURRENT_USER,
} from "../actions/actionTypes";

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
    default:
      return state;
  }
};

export default userReducer;
