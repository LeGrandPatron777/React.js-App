import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import App from "./App";
import thunk from "redux-thunk";

// ActionTypes
export const REGISTER_USER = "REGISTER_USER";

// ActionCreators
export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

// User Reducer
const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// Another Reducer
const anotherInitialState = {};
const anotherReducer = (state = anotherInitialState, action) => state;

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  another: anotherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
