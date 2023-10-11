import React, { useState } from "react";
import Vue1 from "./routes/login";
import Vue2 from "./routes/flight";
import Vue3 from "./routes/hotel";
import Vue4 from "./routes/invoice";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Vue1 />} />
        <Route path="/vue2" element={<Vue2 />} />
        <Route path="/vue3" element={<Vue3 />} />
        <Route path="/vue4" element={<Vue4 />} />
      </Routes>
    </Router>
  );
}

export default App;
