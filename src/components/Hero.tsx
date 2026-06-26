"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  onStartEarning: () => void;
}

export default function Hero({ onStartEarning }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Taking Surveys.",
    "Playing Games.",
    "Trying New Apps.",
    "Completing Simple Offers.",
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 60);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 120);
    }

    // Handle typing limits
    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // pause at full phrase
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length); // move to next phrase
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden pt-40 pb-20 px-6 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-radial from-accent-purple/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-radial from-accent-green/8 to-transparent -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-xs font-bold tracking-wider">
            🔥 #1 TRUSTED REWARDS PLATFORM
          </div>

          <h1 className="text-4xl md:text-5.5xl font-black font-display text-text-primary leading-tight">
            Turn Your Spare <br />
            Time Into{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-green bg-clip-text text-transparent">
              Real Cash
            </span>
            <br />
            By <span className="text-accent-green inline-block border-r-3 border-accent-green pr-1 animate-caret">{typedText}</span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            Whether you are taking surveys, testing exciting new apps, playing games, or discovering exclusive offers, BinnyCash makes it easy to earn extra income online anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={onStartEarning}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-green hover:from-accent-green hover:to-accent-purple text-white font-bold rounded-2xl shadow-glow-purple hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Earning Now 🚀
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-text-primary hover:border-accent-purple border border-card-border font-semibold rounded-2xl text-center hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
            >
              How It Works
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-6">
            <div className="flex items-center gap-2.5 text-sm text-text-secondary">
              <span className="text-accent-purple text-lg">💰</span>
              <span>74+ Tasks Available Today</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-text-secondary">
              <span className="text-accent-green text-lg">⚡</span>
              <span>Average Payout: $15.40/day</span>
            </div>
          </div>
        </div>

        {/* Right Column Glowing Wallet Widget */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[380px] group">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-radial from-accent-purple/20 to-transparent blur-2xl group-hover:from-accent-green/25 transition-all duration-500 rounded-full" />

            {/* Glowing Premium Wallet Card */}
            <div className="relative bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-card-border group-hover:border-accent-green rounded-3xl p-8 shadow-2xl shadow-black/60 group-hover:shadow-glow-green transform lg:perspective-1000 lg:-rotate-y-6 lg:rotate-x-6 hover:transform-none transition-all duration-500 duration-normal">
              {/* Star logo accent */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-accent-green/20 flex items-center justify-center bg-accent-green/5 text-accent-green text-xl shadow-glow-green">
                ✦
              </div>

              {/* Wallet header */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-text-muted">Binny Wallet</span>
                <h3 className="text-base font-bold text-text-primary mt-1">Cash Balance</h3>
              </div>

              {/* Wallet amount */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-4.5xl font-black font-display text-text-primary">$45.80</span>
                <span className="text-accent-green text-xs font-bold px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 rounded-md">
                  +12.4% today
                </span>
              </div>

              {/* Transaction lists mockup */}
              <div className="space-y-4 border-t border-white/5 pt-6">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>Recent tasks</span>
                  <span className="text-accent-purple font-semibold">View all</span>
                </div>
                <div className="flex items-center justify-between bg-bg-primary/50 p-3 rounded-xl border border-card-border text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-accent-green text-base">✓</span>
                    <div>
                      <p className="font-semibold text-text-primary">Bubble Shooter Pro</p>
                      <p className="text-text-muted text-[10px]">App Install • Completed</p>
                    </div>
                  </div>
                  <span className="text-accent-green font-bold">+$1.80</span>
                </div>
                <div className="flex items-center justify-between bg-bg-primary/50 p-3 rounded-xl border border-card-border text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-accent-green text-base">✓</span>
                    <div>
                      <p className="font-semibold text-text-primary">Consumer Survey 2026</p>
                      <p className="text-text-muted text-[10px]">Survey • Completed</p>
                    </div>
                  </div>
                  <span className="text-accent-green font-bold">+$3.20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
