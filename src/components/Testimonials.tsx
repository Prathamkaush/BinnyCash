"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  avatarText: string;
  avatarColor: string;
  rating: number;
  text: string;
  task: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Marcus K.",
      avatarText: "MK",
      avatarColor: "bg-purple-600",
      rating: 5,
      text: "BinnyCash is the first site that paid me instantly without having to wait weeks. I made $25 on my first day just trying out a strategy mobile game. Highly recommend it to anyone looking to make a quick buck!",
      task: "Earned $25.00 via Litecoin",
    },
    {
      name: "Pratham K.",
      avatarText: "PK",
      avatarColor: "bg-emerald-600",
      rating: 5,
      text: "As a student, I have loads of short breaks between classes. Taking two surveys a day on BinnyCash paid for my coffee and lunch. It is super user-friendly and supports instant payments to PayPal. Zero complaints!",
      task: "Earned $54.20 via PayPal",
    },
    {
      name: "Sarah L.",
      avatarText: "SL",
      avatarColor: "bg-indigo-600",
      rating: 5,
      text: "The referral system is amazing. I invited my friends and now I earn a passive commission whenever they complete surveys. It is transparent, fast, and secure. A+ rewards experience!",
      task: "Earned $110.00 via Amazon Gift Card",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">REVIEWS & FEEDBACK</span>
        <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
          Earners Love BinnyCash
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
          See what our global users have to say about their cash rewards experience.
        </p>
      </div>

      <div className="relative overflow-hidden w-full max-w-3xl mx-auto py-4">
        {/* Review Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="min-w-full flex-shrink-0 px-4">
              <div className="bg-card-bg border border-card-border rounded-3xl p-10 text-center hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 relative shadow-xl">
                {/* Quote Icon */}
                <div className="text-5xl text-accent-purple/10 font-serif absolute top-6 left-10">
                  “
                </div>

                <p className="text-base md:text-lg italic text-text-primary mb-8 leading-relaxed">
                  {review.text}
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-lg border-2 border-accent-green shadow-glow-green ${review.avatarColor}`}>
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text-primary font-display">{review.name}</h4>
                    <p className="text-xs text-accent-green font-semibold mt-0.5">{review.task}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-500 text-sm mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            className="w-11 h-11 rounded-full bg-bg-tertiary border border-card-border hover:bg-accent-purple hover:border-accent-purple hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
          >
            ←
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx ? "w-6 bg-accent-green" : "w-2 bg-text-muted"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Review"
            className="w-11 h-11 rounded-full bg-bg-tertiary border border-card-border hover:bg-accent-purple hover:border-accent-purple hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
