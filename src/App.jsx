import React from "react";
import { Routes, Route } from "react-router-dom";
import OpeningPage from "./components/opening";
import Landing from "./components/Landing";
import Versions from "./components/Versions";
import Offers from "./components/Offers";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OpeningPage />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/versions" element={<Versions />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
