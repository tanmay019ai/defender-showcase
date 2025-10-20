import React from "react";
import { Routes, Route } from "react-router-dom";
import OpeningPage from "./components/opening";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OpeningPage />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}
