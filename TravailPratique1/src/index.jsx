import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import App from "./App";
import thunk from "redux-thunk";

// importer le reducer
import userReducer from "./reducers/Reducer";

// Combiner les reducers au cas ou j'aurai eu un autre reducer
const rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Render App
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
