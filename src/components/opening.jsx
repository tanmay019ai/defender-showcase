import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import landRoverLogo from "../assets/landrover.png";
import engineSound from "../assets/engine.mp3";

export default function OpeningPage() {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!started) {
      setStarted(true);

      // Play engine sound
      const audio = new Audio(engineSound);
      audio.play().catch(() => console.log("Autoplay blocked"));
    }
  };

  // Navigate after animation finishes
  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => {
        navigate("/landing");
      }, 800); // short delay for fade animation
      return () => clearTimeout(timer);
    }
  }, [started, navigate]);

  return (
    <div
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleStart}
    >
      {/* Subtle premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,197,94,0.10),transparent_55%)]" />

      <img
        src={landRoverLogo}
        alt="Land Rover"
        className={`relative z-10 w-64 md:w-96 transition-all duration-700 ease-out ${
          started ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {!started && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
          <div className="px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur text-center">
            <div className="text-sm md:text-base font-semibold tracking-wide">
              Click anywhere to start
            </div>
            <div className="text-xs md:text-sm text-white/60 mt-0.5">
              Audio may be blocked by your browser
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
