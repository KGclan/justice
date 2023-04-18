import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Beers = lazy(() => import("./beers"));
const BeerStatistics = lazy(() => import("./beerStatistics"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback="Загрузка..."><Beers /></Suspense>} />
      <Route path="/beerStatistics" element={<Suspense fallback="Загрузка..."><BeerStatistics /></Suspense>} />
    </Routes>
  );
};