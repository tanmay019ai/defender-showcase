import React, { useState } from "react";
import TopNav from "./TopNav";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,197,94,0.10),transparent_60%)]" />

      <TopNav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.22em] uppercase text-white/60">
              Contact
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-wide">
              Let’s talk.
            </h1>
            <p className="mt-4 text-white/65 leading-relaxed">
              Share what you’re looking for — version, budget, timeline — and we’ll
              get back to you.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="text-sm font-semibold text-white/85">Details</div>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Email</span>
                  <span className="text-white/80">sales@defender.example</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Phone</span>
                  <span className="text-white/80">+1 (000) 000-0000</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/50">Hours</span>
                  <span className="text-white/80">Mon–Sat, 9:00–18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-sm font-semibold text-white/85">
                Send a message
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <div className="text-xs tracking-[0.18em] uppercase text-white/55">
                    First name
                  </div>
                  <input
                    required
                    name="firstName"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-green-500/60"
                    placeholder="Alex"
                  />
                </label>

                <label className="block">
                  <div className="text-xs tracking-[0.18em] uppercase text-white/55">
                    Last name
                  </div>
                  <input
                    required
                    name="lastName"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-green-500/60"
                    placeholder="Morgan"
                  />
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <div className="text-xs tracking-[0.18em] uppercase text-white/55">
                    Email
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-green-500/60"
                    placeholder="alex@email.com"
                  />
                </label>

                <label className="block">
                  <div className="text-xs tracking-[0.18em] uppercase text-white/55">
                    Interested in
                  </div>
                  <select
                    name="interest"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500/60"
                    defaultValue="Defender 110"
                  >
                    <option>Defender 90</option>
                    <option>Defender 110</option>
                    <option>Defender 130</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="block mt-4">
                <div className="text-xs tracking-[0.18em] uppercase text-white/55">
                  Message
                </div>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-green-500/60"
                  placeholder="I’d like to book a test drive next week..."
                />
              </label>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-sm text-white/60">
                  {status === "sent" ? "Message sent (demo)." : "We’ll reply as soon as possible."}
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
