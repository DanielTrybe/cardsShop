import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "components/layouts";
import { CardsPage, CardDetails } from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<CardsPage />} />
        <Route path="/:id" element={<CardDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
