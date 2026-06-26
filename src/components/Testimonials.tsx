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

const AstroBunnyAvatar = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <circle cx="32" cy="32" r="30" fill="url(#bunnyGrad)" stroke="#a78bfa" strokeWidth="2" />
    <defs>
      <radialGradient id="bunnyGrad" cx="50%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#2e1065" />
        <stop offset="100%" stopColor="#090514" />
      </radialGradient>
    </defs>
    
    {/* Bunny Ears */}
    {/* Left Ear */}
    <path d="M22 28 C18 10 24 6 27 18 C28 22 27 28 27 28" fill="#f3e8ff" stroke="#a78bfa" strokeWidth="1.5" />
    <path d="M22.5 24 C19.5 12 23 10 25 18" fill="#f472b6" />
    {/* Right Ear */}
    <path d="M42 28 C46 10 40 6 37 18 C36 22 37 28 37 28" fill="#f3e8ff" stroke="#a78bfa" strokeWidth="1.5" />
    <path d="M41.5 24 C44.5 12 41 10 39 18" fill="#f472b6" />
    
    {/* Suit / Body */}
    <path d="M16 54 C16 44 22 40 32 40 C42 40 48 44 48 54" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1.5" />
    <path d="M26 40 L38 40 L35 48 L29 48 Z" fill="#e9d5ff" />
    <circle cx="32" cy="45" r="2.5" fill="#34d399" />

    {/* Head */}
    <circle cx="32" cy="32" r="13" fill="#f5f3ff" stroke="#c084fc" strokeWidth="1" />
    
    {/* Face Details */}
    <circle cx="28" cy="31" r="1.5" fill="#1e1b4b" />
    <circle cx="36" cy="31" r="1.5" fill="#1e1b4b" />
    <path d="M31 34 L33 34 L32 35.5 Z" fill="#f472b6" />
    {/* Cheeks */}
    <circle cx="26" cy="34" r="1.5" fill="#f472b6" opacity="0.6" />
    <circle cx="38" cy="34" r="1.5" fill="#f472b6" opacity="0.6" />

    {/* Space Helmet Visor */}
    <ellipse cx="32" cy="32" rx="17" ry="14" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="1.8" />
    <path d="M22 26 A 13 11 0 0 1 42 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const AstroCatAvatar = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="url(#catGrad)" stroke="#10b981" strokeWidth="2" />
    <defs>
      <radialGradient id="catGrad" cx="50%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#064e3b" />
        <stop offset="100%" stopColor="#022c22" />
      </radialGradient>
    </defs>
    
    {/* Cat Ears */}
    <path d="M18 24 L26 31 L18 34 Z" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5" />
    <path d="M19.5 26 L24 31 L19.5 32.5 Z" fill="#f472b6" />
    <path d="M46 24 L38 31 L46 34 Z" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5" />
    <path d="M44.5 26 L40 31 L44.5 32.5 Z" fill="#f472b6" />
    
    {/* Suit / Body */}
    <path d="M16 54 C16 44 22 40 32 40 C42 40 48 44 48 54" fill="#059669" stroke="#34d399" strokeWidth="1.5" />
    <path d="M26 40 L38 40 L35 48 L29 48 Z" fill="#a7f3d0" />
    <circle cx="32" cy="45" r="2.5" fill="#fbbf24" />

    {/* Head */}
    <circle cx="32" cy="33" r="12" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1" />
    
    {/* Face Details */}
    <circle cx="28" cy="32" r="1.5" fill="#1e1b4b" />
    <circle cx="36" cy="32" r="1.5" fill="#1e1b4b" />
    <path d="M31 35 L33 35 L32 36.5 Z" fill="#f472b6" />
    {/* Whiskers */}
    <path d="M22 34 L25 35 M22 37 L25 36" stroke="#d97706" strokeWidth="1" />
    <path d="M42 34 L39 35 M42 37 L39 36" stroke="#d97706" strokeWidth="1" />

    {/* Space Helmet Visor */}
    <ellipse cx="32" cy="32" rx="17" ry="14" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399" strokeWidth="1.8" />
    <path d="M22 26 A 13 11 0 0 1 42 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const CosmoFoxAvatar = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="url(#foxGrad)" stroke="#6366f1" strokeWidth="2" />
    <defs>
      <radialGradient id="foxGrad" cx="50%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="100%" stopColor="#03001e" />
      </radialGradient>
    </defs>
    
    {/* Fox Ears */}
    <path d="M19 22 L29 30 L20 34 Z" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
    <path d="M20.5 24 L27 30 L21.5 32 Z" fill="#ffedd5" />
    <path d="M45 22 L35 30 L44 34 Z" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
    <path d="M43.5 24 L37 30 L42.5 32 Z" fill="#ffedd5" />
    
    {/* Suit / Body */}
    <path d="M16 54 C16 44 22 40 32 40 C42 40 48 44 48 54" fill="#4f46e5" stroke="#818cf8" strokeWidth="1.5" />
    <path d="M26 40 L38 40 L35 48 Z" fill="#c7d2fe" />
    <circle cx="32" cy="45" r="2.5" fill="#f43f5e" />

    {/* Head */}
    <path d="M22 34 C22 26 42 26 42 34 C42 39 37 41 32 41 C27 41 22 39 22 34 Z" fill="#ff781f" stroke="#ea580c" strokeWidth="1" />
    <path d="M26 34 C26 31 38 31 38 34 C38 37 36 39 32 39 C28 39 26 37 26 34 Z" fill="#ffffff" />

    {/* Face Details */}
    <circle cx="28" cy="32" r="1.5" fill="#1e1b4b" />
    <circle cx="36" cy="32" r="1.5" fill="#1e1b4b" />
    <circle cx="32" cy="35" r="2" fill="#1e1b4b" />

    {/* Space Helmet Visor */}
    <ellipse cx="32" cy="32" rx="17" ry="14" fill="rgba(129, 140, 248, 0.15)" stroke="#818cf8" strokeWidth="1.8" />
    <path d="M22 26 A 13 11 0 0 1 42 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

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

  const renderAvatar = (idx: number) => {
    if (idx === 0) return <AstroBunnyAvatar />;
    if (idx === 1) return <AstroCatAvatar />;
    return <CosmoFoxAvatar />;
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
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-4">
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
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-green shadow-glow-green flex items-center justify-center bg-bg-primary/50">
                    {renderAvatar(idx)}
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
