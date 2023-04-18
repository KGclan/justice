import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Beers = lazy(() => import("./beers"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback="Загрузка..."><Beers /></Suspense>} />
    </Routes>
  );
};