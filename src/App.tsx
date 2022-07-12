import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1>projeto a ser desenvolvido usando api externa</h1>}
      />
      <Route path="about" element={<h1>teste</h1>} />
    </Routes>
  );
}

export default App;
