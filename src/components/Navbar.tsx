"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Default to localhost for development testing
  const PDF_LINK = "http://localhost:5000/api/public/landing-pdf";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: isHomePage ? "#features" : "/#features" },
    {
      name: "How It Works",
      href: isHomePage ? "#how-it-works" : "/#how-it-works",
    },
    {
      name: "Testimonials",
      href: isHomePage ? "#testimonials" : "/#testimonials",
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/">
        <div className="logo">
          <img
            src="/logo.jpg"
            alt="Global Video Logo"
            width="44"
            height="44"
            className="rounded-full"
          />
          Global Video
        </div>
      </Link>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a
          href={PDF_LINK}
          className="btn-primary"
          style={{ padding: "14px 28px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={PDF_LINK}
            className="btn-primary mobile-menu-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
