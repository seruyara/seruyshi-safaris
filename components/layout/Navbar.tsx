"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="nav-container desktop-nav">
        <ul>
          <li>
            <a href="#destinations">Destinations</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#experiences">Experiences</a>
          </li>

          <li>
            <a
              href="mailto:hello@seruyshi.com"
              className="contact-button"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#destinations" onClick={closeMenu}>
              Destinations
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
          </li>

          <li>
            <a href="#experiences" onClick={closeMenu}>
              Experiences
            </a>
          </li>

          <li>
            <a
              href="mailto:hello@seruyshi.com"
              className="mobile-contact-button"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;