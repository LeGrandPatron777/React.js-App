import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import App from "./App";
import thunk from "redux-thunk";

// Import User Reducer
import userReducer from "./reducers/loginReducer";

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
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
