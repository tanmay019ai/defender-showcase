import React from "react";
import { NavLink } from "react-router-dom";
import TopNav from "./TopNav";

const OFFERS = [
  {
    title: "Test Drive Scheduling",
    description:
      "Pick a time that works and we’ll confirm availability with the closest location.",
  },
  {
    title: "Finance Options",
    description:
      "Flexible monthly plans and down-payment options tailored to your needs.",
  },
  {
    title: "Protection & Service Plans",
    description:
      "Coverage and maintenance plans designed for long-term peace of mind.",
  },
  {
    title: "Accessories",
    description:
      "Adventure-ready add-ons for cargo, roof, lighting, and interior protection.",
  },
  {
    title: "Trade-In Support",
    description:
      "Fast valuation guidance so you can plan the next step with confidence.",
  },
  {
    title: "Delivery & Handover",
    description:
      "A clean handover experience with setup help and feature walkthroughs.",
  },
];

function OfferCard({ offer }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <div className="flex items-start gap-4">
        <div className="mt-1 h-9 w-9 rounded-full bg-green-500/10 border border-green-500/20" />
        <div>
          <h3 className="text-lg font-extrabold tracking-wide">{offer.title}</h3>
          <p className="mt-2 text-white/70 leading-relaxed">{offer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Offers() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,197,94,0.10),transparent_60%)]" />

      <TopNav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">
            Support
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-wide">
            What we offer.
          </h1>
          <p className="mt-4 text-white/65 leading-relaxed">
            From the first test drive to ownership support, these are the most
            common ways we help you get into the right Defender.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFERS.map((o) => (
            <OfferCard key={o.title} offer={o} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white/85">Need a quick answer?</div>
            <div className="text-sm text-white/60 mt-1">
              Send a message from the Contact page and we’ll respond.
            </div>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
          >
            Contact Us
          </NavLink>
        </div>
      </main>
    </div>
  );
}
