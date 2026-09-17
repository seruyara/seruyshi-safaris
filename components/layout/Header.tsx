"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
        <a href="/">
          <img
            className="nav-logo"
            src="/logo/SERUYSHI WHITE.png"
            alt="Seruyshi Signature Safaris"
          />
        </a>
      </div>

      <Navbar/>
    </header>
  );
};

export default Header;