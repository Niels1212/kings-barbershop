import site from "@/content/site.json";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/brand/hero.jpg" // put a photo in /public/brand/hero.jpg
          alt="Barbershop"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>
      <Container className="min-h-[70vh] flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {site.tagline}
        </h1>
        <p className="mt-4 max-w-xl text-lg opacity-90">
          Fades, shaves, and sharp lines—done right.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/services" className="rounded border border-white/20 px-5 py-3 hover:bg-white/10">View Services</Link>
          <a href={site.bookingUrl} target="_blank" className="rounded bg-primary px-5 py-3 font-semibold text-dark hover:opacity-90">Book Now</a>
        </div>
      </Container>
    </section>
  );
}
