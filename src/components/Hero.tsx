"use client";

import { useState, useEffect } from "react";
import { Sparkles, FileText, Gamepad2, Check, Lock, Play, Star, Rocket } from "lucide-react";
import { translations } from "@/utils/translations";

// Custom Brand Logo and Asset Components
const PayPalIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 7.5c-.24-1.9-1.32-3.52-3.22-4.4C14.5 2.4 12.4 2.2 10.3 2.2H2.7c-.6 0-1.1.5-1.2 1.1L.1 19.3c-.1.6.4 1.2 1 1.2h4.9l1.3-10.4c.1-.7.6-1.2 1.3-1.2h3c3.9 0 7-1.7 7.9-6.4z" fill="#003087" />
    <path d="M16.5 10.7c-.2 1.9-1.3 3.5-3.2 4.4-1.4.7-3.5.9-5.6.9H4.8l-1.3 10.4c-.1.6.4 1.2 1 1.2h4.9l1.3-10.4c.1-.7.6-1.2 1.3-1.2h3c3.9 0 7-1.7 7.9-6.4.4-2.3.2-3.8-.8-5.3-.2-.3-.5-.5-.7-.8-.2 2.3-1.3 4.1-3.2 5.0z" fill="#0079C1" />
  </svg>
);

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

const GoldCoinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#coinGrad)" stroke="#d97706" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="7.5" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1.5 1.5" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="#d97706" strokeWidth="0.75" />
    <text x="12" y="15.5" fill="#78350f" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
      $
    </text>
    <defs>
      <linearGradient id="coinGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

const RunningIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 21.5c-.1.5.2 1 .7 1.1.5.1 1-.2 1.1-.7l2.1-9.6 3.6 3.4V22c0 .6.4 1 1 1s1-.4 1-1v-7.3c0-.3-.1-.5-.3-.7l-3.3-3.3 1.2-5.7c1.3 1.5 3.1 2.5 5.2 2.5.6 0 1-.4 1-1s-.4-1-1-1c-1.8 0-3.3-1-4.1-2.5L14 3.7c-.4-.7-1.1-1.1-1.9-1.1-.5 0-1 .2-1.4.5L6.2 6.5C5.8 6.9 5.6 7.4 5.8 8c.2.6.7 1 1.3 1h2.7z" />
  </svg>
);

interface HeroProps {
  onStartEarning: () => void;
  language?: string;
}

export default function Hero({ onStartEarning, language = "en" }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const t = translations[language] || translations["en"];

  const phrases = [
    t.phrase_surveys,
    t.phrase_games,
    t.phrase_apps,
    t.phrase_offers,
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 60);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 120);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section className="relative w-full pt-40 pb-24 px-4 md:px-6 bg-gradient-to-t from-[rgba(16,185,129,0.16)] via-transparent to-transparent border-b border-card-border/20 overflow-hidden">

      {/* Background Glowing Accents - Green on bottom-left, Purple on top-right */}
      <div className="absolute -bottom-40 left-1/4 w-[550px] h-[450px] bg-accent-green/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-accent-purple/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">

            {/* Earning Platform Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#130f26]/80 border border-[#8b5cf6]/20 text-xs font-semibold text-text-primary tracking-wide shadow-lg backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>{t.hero_badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5.5xl font-black font-display text-text-primary leading-tight">
              {t.hero_title} <br />
              <span className="bg-gradient-to-r from-accent-purple to-accent-green bg-clip-text text-transparent inline-block border-r-3 border-accent-green pr-1.5 animate-caret">
                {typedText}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
              {t.hero_subtitle}
            </p>

            {/* Dynamic Country/Offers Info */}
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span>{t.hero_offers}</span>
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India flag"
                className="w-5 h-3.5 object-cover rounded-sm border border-white/10"
              />
              <span className="font-semibold text-text-primary">India</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={onStartEarning}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-purple to-[#6d28d9] hover:opacity-90 text-white font-bold rounded-2xl shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5 text-white" /> {t.hero_start_earning}
              </button>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-text-primary hover:border-accent-purple border border-card-border font-semibold rounded-2xl text-center hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.hero_how_it_works}
              </a>
            </div>

            {/* Sub-caption */}
            <p className="text-xs text-text-muted mt-1">
              {t.hero_withdraw}
            </p>
          </div>

          {/* Right Column Interactive Phone Mockup & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-4">
            <div className="relative w-full max-w-[310px] aspect-[9/18.5] select-none">

              {/* Background glowing effects - large green glowing halo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-accent-green/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-accent-purple/15 rounded-full blur-[70px] pointer-events-none" />

              {/* Floating Badge: Reward Credited (Top Left) */}
              <div className="absolute -top-6 -left-12 z-20 backdrop-blur-md bg-[#130f26]/85 border border-[#8b5cf6]/35 rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-base shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  <GoldCoinIcon className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-none">+320</p>
                  <p className="text-[9px] text-text-muted mt-0.5">Reward Credited</p>
                </div>
              </div>

              {/* Floating Badge: Complete Survey (Middle Right) */}
              <div className="absolute top-1/4 -right-12 z-20 backdrop-blur-md bg-[#120e21]/85 border border-[#8b5cf6]/25 rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                  <FileText className="w-4 h-4 text-accent-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-white leading-none">Complete</p>
                  <p className="text-[9px] text-text-muted mt-0.5">Survey</p>
                </div>
              </div>

              {/* Floating Badge: Play & Earn (Bottom Left) */}
              <div className="absolute bottom-[16%] -left-14 z-20 backdrop-blur-md bg-[#120e21]/85 border border-accent-green/25 rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-accent-green" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-white leading-none">Play &</p>
                  <p className="text-[9px] text-accent-green font-bold mt-0.5">Earn</p>
                </div>
              </div>

              {/* Floating Currency Coin 1 */}
              <div className="absolute top-[48%] -left-16 z-10 w-7 h-7 flex items-center justify-center animate-float-slow">
                <GoldCoinIcon className="w-7 h-7" />
              </div>

              {/* Floating Currency Coin 2 */}
              <div className="absolute bottom-[10%] -right-8 z-10 w-7 h-7 flex items-center justify-center animate-float-delayed">
                <GoldCoinIcon className="w-7 h-7" />
              </div>

              {/* Floating PayPal Icon (Top Right) */}
              <div className="absolute top-10 -right-6 z-10 w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg animate-float-delayed">
                <PayPalIcon className="w-5 h-5" />
              </div>

              {/* Floating Google G Icon (Bottom Left-ish) */}
              <div className="absolute bottom-[35%] -left-8 z-10 w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-lg animate-float-slow">
                <GoogleIcon className="w-5 h-5" />
              </div>

              {/* Mascot: Space Bunny (Bottom Right) */}
              <div className="absolute -bottom-8 -right-14 z-25 w-32 h-32 hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <img
                  src="/binny_mascot.png"
                  alt="Binny Mascot"
                  className="w-full h-full object-contain mix-blend-screen pointer-events-none filter drop-shadow-[0_8px_16px_rgba(139,92,246,0.35)] animate-float-slow"
                />
              </div>

              {/* Phone Frame */}
              <div className="relative w-full h-[580px] bg-[#09070f] border-4 border-[#1b1532] rounded-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-3.5">
                {/* Inner screen content */}
                <div className="relative w-full h-full bg-[#0c0915] rounded-[32px] overflow-hidden flex flex-col pt-8 pb-4 px-3.5 border border-white/5">

                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-20 flex items-center justify-center border border-white/5" />

                  {/* Offer screen title */}
                  <div className="flex items-between justify-between mt-1 mb-4">
                    <span className="text-xs font-bold text-text-primary">Runner</span>
                    <button className="w-6 h-6 rounded-full bg-bg-tertiary flex items-center justify-center text-[10px] text-text-secondary border border-card-border">✕</button>
                  </div>

                  {/* Offer Detail Card */}
                  <div className="bg-bg-tertiary/60 border border-card-border rounded-2xl p-4 flex flex-col items-center gap-1.5 text-center relative overflow-hidden mb-4">
                    {/* Game poster mockup */}
                    <div className="w-full h-24 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                      <img
                        src="/runner.png"
                        alt="Runner Game"
                        className="absolute inset-0 w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

                      <span className="text-sm font-extrabold uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10">Runner</span>

                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md border border-white/10 z-10">
                        <PayPalIcon className="w-2.5 h-2.5" />
                        <span className="text-[8px] font-semibold text-white">PayPal</span>
                      </div>
                    </div>

                    {/* Cash value */}
                    <span className="text-3xl font-black font-display text-text-primary mt-1">$ 6.38</span>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-4 gap-1 w-full border-t border-b border-white/5 py-2.5 my-1.5 text-center">
                      <div>
                        <p className="text-[8px] text-text-muted uppercase">Status</p>
                        <p className="text-[9px] font-bold text-amber-500">Not Started</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-text-muted uppercase">Popularity</p>
                        <div className="flex gap-0.5 justify-center mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-amber-400" />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[8px] text-text-muted uppercase">Category</p>
                        <p className="text-[9px] font-bold text-text-primary">Games</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-text-muted uppercase">Provider</p>
                        <p className="text-[9px] font-bold text-accent-purple">Ekiton</p>
                      </div>
                    </div>

                    {/* CTA button inside phone */}
                    <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-[#6d28d9] hover:opacity-90 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-glow-purple border border-white/10 cursor-pointer">
                      <Play className="w-2.5 h-2.5 fill-current" /> Play & Earn $6.38
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 border-b border-white/5 pb-2 mb-3">
                    <span className="text-xs font-bold text-text-primary border-b-2 border-accent-purple pb-1.5">Rewards</span>
                    <span className="text-xs font-semibold text-text-secondary pb-1.5 cursor-pointer">Details</span>
                  </div>

                  {/* Task Steps */}
                  <div className="flex-1 space-y-2.5 overflow-y-auto pr-1 scrollbar-none">
                    <div className="flex items-center justify-between p-2.5 bg-bg-tertiary/40 border border-card-border rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-md">$0.00</span>
                        <span className="text-[10px] text-text-secondary font-medium">depth_reached100</span>
                      </div>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-bg-tertiary/40 border border-card-border rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-md">$0.04</span>
                        <span className="text-[10px] text-text-secondary font-medium">depth_reached300</span>
                      </div>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-bg-tertiary/40 border border-card-border rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-md">$0.34</span>
                        <span className="text-[10px] text-text-secondary font-medium">depth_reached500</span>
                      </div>
                      <Check className="w-3.5 h-3.5 text-accent-green" />
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-bg-tertiary/40 border border-card-border rounded-xl opacity-60">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 text-text-primary rounded-md">$1.50</span>
                        <span className="text-[10px] text-text-secondary font-medium">depth_reached1000</span>
                      </div>
                      <Lock className="w-3.5 h-3.5 text-text-muted" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
