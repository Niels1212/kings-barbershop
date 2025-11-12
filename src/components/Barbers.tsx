"use client";

import Image from "next/image";
import barbers from "@/content/barbers.json";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { IconButton } from "@/components/ui";
import { ChevronLeftIcon, ChevronRightIcon, InstagramIcon } from "@/components/icons";

export default function Barbers() {
  const { scrollRef, scroll } = useHorizontalScroll();

  return (
    <div className="relative">
      {/* Scroll Left Button */}
      <IconButton
        icon={<ChevronLeftIcon />}
        label="Scroll left"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 flex-shrink-0 w-[320px] snap-center"
          >
            {/* Barber Photo */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src={barber.photo}
                alt={barber.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Name overlay on image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white">{barber.name}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white/80 italic mb-4">"{barber.phrase}"</p>
              
              {/* Buttons Row */}
              <div className="flex gap-3 items-center">
                {/* Book with Barber Button */}
                <a
                  href={barber.booksyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full border-2 border-primary/60 bg-primary/10 px-6 py-2.5 font-semibold text-primary hover:bg-primary hover:text-dark transition uppercase tracking-wider text-sm"
                >
                  Book with {barber.name}
                </a>

                {/* Instagram Link */}
                <a
                  href={barber.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 p-2.5 hover:border-primary/60 hover:bg-primary/10 transition"
                  aria-label={`${barber.name}'s Instagram`}
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <IconButton
        icon={<ChevronRightIcon />}
        label="Scroll right"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      />

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
