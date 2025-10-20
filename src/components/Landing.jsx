import React, { useRef } from "react";
import Models from "./Models";

export default function Landing() {
  const modelsRef = useRef(null);

  const handleScrollToModels = () => {
    modelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden text-white">
        {/* Glow reflection under car */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-green-500/10 blur-3xl rounded-full" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-[3rem] md:text-[6rem] font-extrabold tracking-[0.15em] uppercase text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
            CHOOSE YOUR DEFENDER
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl mt-3">
            Unleash the spirit of adventure.
          </p>

          <div className="flex gap-6 mt-10">
            <button
              onClick={handleScrollToModels}
              className="px-8 py-3 border border-gray-600 text-lg font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Models
            </button>
            <button className="px-8 py-3 bg-green-600 text-lg font-semibold tracking-wide hover:bg-green-500 transition-all duration-300">
              Book a Test Drive
            </button>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <div ref={modelsRef}>
        <Models />
      </div>
    </div>
  );
}
