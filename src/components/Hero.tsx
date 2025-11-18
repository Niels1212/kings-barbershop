"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import site from "@/content/site.json";
import { CalendarCheckIcon, WhatsAppIcon, InstagramIcon } from "@/components/icons";

// Static import automatically adds a hash to the built file
import hero from "@/../public/brand/fondo.jpeg";
import heroLogo from "@/../public/brand/hero-logo.png";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (adjust threshold as needed)
      setIsScrolled(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const instagramUrl = site.socials.find(s => s.name === "Instagram")?.url || "";
  const whatsappUrl = `https://wa.me/${site.whatsapp}`;

  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Kings Barbershop interior"
          fill
          priority
          className="object-cover opacity-95"
        />
        {/* Radial gradient overlay - darker on edges, lighter in center */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/40 to-black/70" />
      </div>

      <Container className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        {/* Centered Logo */}
        <div className="-mb-8 md:-mb-16">
          <Image
            src={heroLogo}
            alt={site.brand}
            width={400}
            height={600}
            className="object-contain w-[250px] h-[375px] md:w-[400px] md:h-[600px]"
            priority
          />
        </div>

        {/* Book Button - Static in Hero */}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className={`inline-block rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm px-12 py-3 font-semibold text-white hover:bg-primary/20 hover:border-primary/80 transition uppercase tracking-wider shadow-lg ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          BOOK
        </a>
      </Container>

      {/* Floating Action Buttons - Always visible */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {/* Book Button - Only shows when scrolled */}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className={`w-12 h-12 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white shadow-md hover:scale-105 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          title="Book Appointment"
        >
          <CalendarCheckIcon className="w-5 h-5" />
        </a>

        {/* WhatsApp Button - Always visible */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366]/80 hover:bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-105 transition-all"
          title="WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>

        {/* Instagram Button - Always visible */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-orange-500/80 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition-all"
          title="Instagram"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
