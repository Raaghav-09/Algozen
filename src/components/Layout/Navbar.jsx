// src/components/Layout/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cp", label: "CP Topics" },
  // Add more navigation links here as routes expand.
];

function Navbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-cyan-400 tracking-wide hover:text-cyan-300 transition"
        >
          Algozen
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-slate-200 font-medium hover:text-cyan-400 transition px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
