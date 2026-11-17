"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Gautami Kharwar, home">
          <span className="mark" aria-hidden="true">G</span>Gautami Kharwar
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#work" className="hide-sm">Work</Link>
          <Link href="/#experience" className="hide-sm">Experience</Link>
          <Link href="/#about" className="hide-sm">About</Link>
          <a className="btn" href="#contact">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
