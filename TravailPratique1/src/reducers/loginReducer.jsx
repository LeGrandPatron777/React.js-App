import { REGISTER_USER, SET_CURRENT_USER } from "./actions/actionTypes";

const initialState = {
  users: [],
  currentUser: {
    nom: "Nom par défaut",
    prenom: "Prénom par défaut",
    email: "email@defaut.com",
    dateDeNaissance: "01/01/2000",
  },
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
