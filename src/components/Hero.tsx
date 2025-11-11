import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import site from "@/content/site.json";

// Static import automatically adds a hash to the built file
import hero from "@/../public/brand/hero.jpg"; // <- correct relative path from /src
import heroLogo from "@/../public/brand/hero-logo.png";

export default function Hero() {
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
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Container className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        {/* Centered Logo */}
        <div className="-mb-16">
          <Image
            src={heroLogo}
            alt={site.brand}
            width={400}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        {/* Book Button */}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-12 py-3 font-semibold text-white hover:bg-white/20 transition uppercase tracking-wider"
        >
          BOOK
        </a>
      </Container>
    </section>
  );
}
