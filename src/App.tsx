import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "components/layouts";
import { CardsPage } from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<CardsPage />} />
        <Route path="about" element={<h1>test</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
