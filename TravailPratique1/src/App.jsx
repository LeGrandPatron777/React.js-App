import React from "react";
import Vue1 from "./routes/login";
import Vue2 from "./routes/flight";
import Vue3 from "./routes/hotel";
import Vue4 from "./routes/invoice";
import Vue5 from "./routes/update";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import "./App.css"; // Importez votre fichier CSS ici

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavigationBar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="view-container">
                  <Vue1 />
                </div>
              }
            />
            <Route
              path="/vue2"
              element={
                <div className="view-container">
                  <Vue2 />
                </div>
              }
            />
            <Route
              path="/vue3"
              element={
                <div className="view-container">
                  <Vue3 />
                </div>
              }
            />
            <Route
              path="/vue4"
              element={
                <div className="view-container">
                  <Vue4 />
                </div>
              }
            />
            <Route
              path="/vue5"
              element={
                <div className="view-container">
                  <Vue5 />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
