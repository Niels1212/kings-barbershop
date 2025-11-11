"use client";
import Link from "next/link";
import site from "@/content/site.json";
import Container from "./Container";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur border-b border-white/10">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-wide">{site.brand}</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/gallery" className="hover:text-primary">Gallery</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <a href={site.bookingUrl} target="_blank" className="rounded bg-primary px-4 py-2 font-semibold text-dark hover:opacity-90">
            Book
          </a>
        </nav>
      </Container>
    </header>
  );
}
