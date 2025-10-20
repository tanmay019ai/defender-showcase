import React, { useState } from "react";
import landRoverLogo from "../assets/landrover.png";
import engineSound from "../assets/engine.mp3";

export default function OpeningPage() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!started) {
      setStarted(true);

      // Play engine sound
      const audio = new Audio(engineSound);
      audio.play().catch(() => console.log("Autoplay blocked"));

      // Navigate to landing page after 4 seconds
      setTimeout(() => {
        window.location.href = "/landing";
      }, 4000);
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleStart}
    >
      {/* Land Rover logo */}
      <img
        src={landRoverLogo}
        alt="Land Rover"
        className={`w-64 md:w-96 transition-all duration-1000 ${
          started ? "scale-0 opacity-0" : "scale-100 opacity-100 animate-pulse"
        }`}
      />

      {/* Blinking "Click anywhere to start" */}
      {!started && (
        <div className="absolute bottom-20 text-center text-white text-xl md:text-3xl font-bold animate-bounce">
          Click anywhere to start
        </div>
      )}
    </div>
  );
}
