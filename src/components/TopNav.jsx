import React from "react";
import { NavLink } from "react-router-dom";
import landRoverLogo from "../assets/landrover.png";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60",
          isActive
            ? "bg-white/10 text-white"
            : "text-white/75 hover:bg-white/10 hover:text-white",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function TopNav({ rightSlot }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
        <NavLink to="/landing" className="flex items-center gap-3">
          <img src={landRoverLogo} alt="Land Rover" className="h-8 w-auto opacity-90" />
          <div className="hidden sm:block text-sm tracking-[0.22em] uppercase text-white/70">
            Defender Showcase
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur p-1 overflow-x-auto max-w-[60vw]">
          <NavItem to="/versions">Versions</NavItem>
          <NavItem to="/offers">What We Offer</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">{rightSlot}</div>
      </div>
    </header>
  );
}
