import React, { useRef } from "react";
import Models from "./Models";
import TopNav from "./TopNav";

export default function Landing() {
  const modelsRef = useRef(null);

  const handleScrollToModels = () => {
    modelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden text-white">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.12),transparent_55%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-green-500/10 blur-3xl rounded-full" />

        <TopNav
          rightSlot={
            <button
              type="button"
              onClick={handleScrollToModels}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
            >
              Explore
              <span className="text-white/50">↓</span>
            </button>
          }
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.12em] uppercase text-white drop-shadow">
            CHOOSE YOUR DEFENDER
          </h1>
          <p className="text-white/65 text-base sm:text-lg md:text-2xl mt-4 max-w-2xl">
            Unleash the spirit of adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              type="button"
              onClick={handleScrollToModels}
              className="px-7 py-3 rounded-full border border-white/15 bg-white/5 text-base sm:text-lg font-semibold tracking-wide hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
            >
              Explore Models
            </button>
            <button
              type="button"
              className="px-7 py-3 rounded-full bg-green-600 text-base sm:text-lg font-semibold tracking-wide hover:bg-green-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
            >
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
