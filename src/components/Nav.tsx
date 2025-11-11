"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import site from "@/content/site.json";
import Container from "./Container";
import SocialLinks from "./SocialLinks";
import logo from "@/../public/brand/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10 transition",
        scrolled ? "bg-black/70 backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <Container className="h-20 flex items-center justify-center gap-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition"
          aria-label={`${site.brand} home`}
        >
          <Image 
            src={logo} 
            alt={site.brand} 
            width={60} 
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "text-sm uppercase tracking-wider font-light hover:text-primary transition",
                  active ? "text-primary" : "opacity-90",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: socials only */}
        <div className="hidden md:flex items-center">
          <SocialLinks />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded border border-white/15 px-3 py-2 hover:bg-white/10 transition"
        >
          <span className="sr-only">Open menu</span>
          {/* simple hamburger lines */}
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </div>
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden border-t border-white/10 overflow-hidden transition-[max-height,opacity]",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-4 py-3 space-y-3 bg-black/85 backdrop-blur">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "block rounded px-2 py-2 hover:bg-white/10 uppercase tracking-wider font-light",
                  active ? "text-primary" : "opacity-90",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Socials inline on mobile */}
          <div className="pt-2 border-t border-white/10">
            <SocialLinks className="justify-start" />
          </div>
        </div>
      </div>
    </header>
  );
}
