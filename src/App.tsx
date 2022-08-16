import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { MainLayout } from "components/layouts";
import { CardsPage, CardDetails } from "pages";
import CardsProvider from "services/context/CardsList";

function App() {
  return (
    <BrowserRouter>
      <CardsProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<CardsPage />} />
            <Route path="/:id" element={<CardDetails />} />
          </Route>
        </Routes>
      </CardsProvider>
    </BrowserRouter>
  );
}

export default App;
