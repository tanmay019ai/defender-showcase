import React from "react";
import TopNav from "./TopNav";

const VERSIONS = [
  {
    name: "Defender 90",
    tagline: "Compact agility",
    description:
      "Short wheelbase confidence for tight trails, city driving, and weekend escapes.",
    highlights: ["2-door profile", "Trail-ready stance", "Everyday usability"],
  },
  {
    name: "Defender 110",
    tagline: "The iconic all-rounder",
    description:
      "Balanced space and capability with the signature Defender silhouette.",
    highlights: ["Versatile cabin", "Adventure comfort", "Family-ready"],
  },
  {
    name: "Defender 130",
    tagline: "Maximum room",
    description:
      "Extra length for larger crews, more gear, and long-distance journeys.",
    highlights: ["Expanded seating", "More cargo space", "Road-trip focused"],
  },
];

function VersionCard({ version }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">
            {version.tagline}
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-wide text-white">
            {version.name}
          </h2>
        </div>
        <div className="h-10 w-10 rounded-full bg-green-500/10 border border-green-500/20" />
      </div>

      <p className="mt-4 text-white/70 leading-relaxed">{version.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {version.highlights.map((h) => (
          <span
            key={h}
            className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/75"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
        >
          See Details
        </button>
        <button
          type="button"
          className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}

export default function Versions() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,197,94,0.10),transparent_60%)]" />

      <TopNav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">
            Defender lineup
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-wide">
            Choose the version that fits.
          </h1>
          <p className="mt-4 text-white/65 leading-relaxed">
            Compare the Defender 90, 110, and 130 at a glance — then explore the
            model in 3D back on the landing page.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERSIONS.map((v) => (
            <VersionCard key={v.name} version={v} />
          ))}
        </div>
      </main>
    </div>
  );
}
