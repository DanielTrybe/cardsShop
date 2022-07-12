import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { MainLayout } from "layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<h1>project with Api</h1>} />
        <Route path="about" element={<h1>test</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
