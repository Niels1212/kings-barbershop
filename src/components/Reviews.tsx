"use client";

import { useRef } from "react";
import reviews from "@/content/reviews.json";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { IconButton } from "@/components/ui";

// Star component
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-primary fill-primary' : 'text-gray-600 fill-gray-600'}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Stars rating component
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { scrollRef, scroll } = useHorizontalScroll();

  // Calculate average rating
  const avgRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Stars rating={5} />
            <span className="text-2xl font-bold text-primary">{avgRating}</span>
          </div>
          <p className="text-white/60">Based on {totalReviews} reviews</p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <IconButton 
              icon={<ChevronLeftIcon />} 
              label="Previous reviews"
              onClick={() => scroll('left')} 
            />
          </div>

          {/* Reviews Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[300px] md:min-w-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition"
              >
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-4">
                  <Stars rating={review.rating} />
                  <span className="text-sm text-white/40">
                    {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-white/80 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author and Barber */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-primary">Cut by {review.barber}</p>
                  </div>
                  {/* Booksy verified badge */}
                  <div className="text-xs text-white/40 flex items-center gap-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <IconButton 
              icon={<ChevronRightIcon />} 
              label="Next reviews"
              onClick={() => scroll('right')} 
            />
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <p className="text-center text-white/40 text-sm mt-6 md:hidden">
          Swipe to see more reviews →
        </p>
      </div>
    </section>
  );
}
