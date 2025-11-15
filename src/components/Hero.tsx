"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import site from "@/content/site.json";

// Static import automatically adds a hash to the built file
import hero1 from "@/../public/brand/fondo.jpeg";
import hero2 from "@/../public/brand/fondo2.jpeg";
import heroLogo from "@/../public/brand/hero-logo.png";

export default function Hero() {
  const [useHero2, setUseHero2] = useState(true);
  const hero = useHero2 ? hero2 : hero1;

  return (
    <section className="relative">
      {/* Background Toggle Button - Top Right */}
      <button
        onClick={() => setUseHero2(!useHero2)}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/10 backdrop-blur-sm border border-primary/30 rounded-lg text-white text-sm hover:bg-primary/20 transition"
      >
        Switch Background
      </button>

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
        <div className="-mt-8">
          <Image
            src={heroLogo}
            alt={site.brand}
            width={400}
            height={600}
            className="object-contain w-[250px] h-[375px] md:w-[400px] md:h-[600px]"
            priority
          />
          {/* Since 2024 Badge */}
          <div className="flex items-center justify-center gap-3 -mt-12 md:-mt-24 mb-8 md:mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm md:text-base font-bold tracking-[0.35em] uppercase text-primary animate-pulse-subtle" style={{ textShadow: '0 0 15px rgba(212,175,55,0.9), 0 0 30px rgba(212,175,55,0.5)' }}>
              Since 2024
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Book Button */}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm px-12 py-3 font-semibold text-white hover:bg-primary/20 hover:border-primary/80 transition uppercase tracking-wider shadow-lg"
        >
          BOOK
        </a>
      </Container>
    </section>
  );
}
