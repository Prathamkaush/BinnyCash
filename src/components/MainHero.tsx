"use client";

import { useState, useEffect } from "react";
import { Sparkles, Star, Rocket, Clock, DollarSign, Award, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

const PayPalIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 7.5c-.24-1.9-1.32-3.52-3.22-4.4C14.5 2.4 12.4 2.2 10.3 2.2H2.7c-.6 0-1.1.5-1.2 1.1L.1 19.3c-.1.6.4 1.2 1 1.2h4.9l1.3-10.4c.1-.7.6-1.2 1.3-1.2h3c3.9 0 7-1.7 7.9-6.4z" fill="#003087" />
    <path d="M16.5 10.7c-.2 1.9-1.3 3.5-3.2 4.4-1.4.7-3.5.9-5.6.9H4.8l-1.3 10.4c-.1.6.4 1.2 1 1.2h4.9l1.3-10.4c.1-.7.6-1.2 1.3-1.2h3c3.9 0 7-1.7 7.9-6.4.4-2.3.2-3.8-.8-5.3-.2-.3-.5-.5-.7-.8-.2 2.3-1.3 4.1-3.2 5.0z" fill="#0079C1" />
  </svg>
);

const GoldCoinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#coinGradMain)" stroke="#d97706" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="7.5" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1.5 1.5" />
    <text x="12" y="15.5" fill="#78350f" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
      $
    </text>
    <defs>
      <linearGradient id="coinGradMain" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

interface MainHeroProps {
  onStartEarning: () => void;
  language?: string;
}

export default function MainHero({ onStartEarning, language = "en" }: MainHeroProps) {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Earnings Simulator state
  const [hours, setHours] = useState(2);

  // Live total paid out state
  const [livePaid, setLivePaid] = useState(104238.5);

  const t = translations[language] || translations["en"];

  const phrases = [
    t.phrase_surveys,
    t.phrase_games,
    t.phrase_apps,
    t.phrase_offers,
  ];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  // Live counter ticking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePaid((prev) => prev + parseFloat((Math.random() * 0.45).toFixed(2)));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Simulator configurations
  const getSimulatorRates = (h: number) => {
    switch (h) {
      case 1:
        return { daily: 15.5, multiplier: "1.0x", rank: "Bronze Tier", bonus: 0, progress: 25 };
      case 2:
        return { daily: 32.0, multiplier: "1.15x", rank: "Silver Tier", bonus: 5, progress: 50 };
      case 3:
        return { daily: 51.5, multiplier: "1.35x", rank: "Gold Tier", bonus: 10, progress: 75 };
      case 5:
      default:
        return { daily: 92.5, multiplier: "1.65x", rank: "Platinum VIP", bonus: 20, progress: 100 };
    }
  };

  const simulator = getSimulatorRates(hours);

  return (
    <section className="relative w-full pt-32 pb-24 px-4 md:px-6 overflow-hidden">
      {/* Dynamic star twinkling background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-[10%] left-[20%] w-0.5 h-0.5 bg-white rounded-full animate-ping" />
        <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-white rounded-full animate-ping [animation-delay:1.5s]" />
        <div className="absolute top-[80%] left-[30%] w-0.5 h-0.5 bg-white rounded-full animate-ping [animation-delay:3s]" />
      </div>

      {/* Large radial mesh gradients behind */}
      <div className="absolute -top-[15%] left-[5%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] bg-accent-green/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            
            {/* Global Earning Platform Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#130f26]/90 border border-accent-purple/30 text-xs font-semibold text-text-primary tracking-wide shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="bg-gradient-to-r from-accent-purple via-white to-accent-green bg-clip-text text-transparent">
                {t.hero_badge}
              </span>
            </div>

            {/* Title with typewriter */}
            <h1 className="text-4xl md:text-5.5xl lg:text-6xl font-black font-display text-text-primary leading-none tracking-tight">
              {t.hero_title} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-accent-purple via-[#a78bfa] to-accent-green bg-clip-text text-transparent inline-block border-r-3 border-accent-green pr-2 animate-caret mt-2 min-h-[1.2em]">
                {typedText}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
              {t.hero_subtitle}
            </p>

            {/* Live Cashout Ticket Badge */}
            <div className="flex items-center gap-3 py-1.5 px-4 bg-bg-secondary/80 border border-card-border/80 rounded-2xl text-xs md:text-sm text-text-secondary backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
              <span>Total Rewards Claimed:</span>
              <span className="font-mono font-extrabold text-accent-green">
                ${livePaid.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            {/* Interactive Earnings Simulator */}
            <div className="w-full max-w-lg bg-card-bg/60 border border-card-border rounded-3xl p-6 shadow-2xl relative backdrop-blur-md overflow-hidden group hover:border-accent-purple/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-purple" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Earnings Simulator
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-md">
                  Active Boost
                </span>
              </div>

              {/* Range option selector chips */}
              <div className="grid grid-cols-4 gap-2.5 mb-6">
                {[1, 2, 3, 5].map((h) => (
                  <button
                    key={h}
                    onClick={() => setHours(h)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all duration-300 cursor-pointer ${
                      hours === h
                        ? "bg-accent-purple border-accent-purple text-white shadow-glow-purple"
                        : "bg-bg-tertiary/40 border-card-border text-text-secondary hover:border-accent-purple/40 hover:text-white"
                    }`}
                  >
                    {h} {h === 1 ? "Hour" : "Hours"}
                  </button>
                ))}
              </div>

              {/* Rewards Output Box */}
              <div className="bg-[#0b0816]/95 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 mb-4 relative">
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider mb-1">
                    Estimated Rewards
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3.5xl font-black font-display text-white transition-all duration-500">
                      ${(simulator.daily * 30).toFixed(0)}
                    </span>
                    <span className="text-[11px] text-text-secondary font-semibold">/ month</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent-green/10 border border-accent-green/20 text-[10px] font-extrabold text-accent-green mb-1.5">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>{simulator.multiplier} Multiplier</span>
                  </div>
                  <p className="text-[11px] text-text-secondary font-bold">
                    ~ ${(simulator.daily).toFixed(2)} / day
                  </p>
                </div>
              </div>

              {/* VIP Rank Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="text-text-muted flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-accent-purple" />
                    Tier level:
                  </span>
                  <span className="text-accent-purple uppercase tracking-wider">
                    {simulator.rank} {simulator.bonus > 0 && `(+${simulator.bonus}% Bonus)`}
                  </span>
                </div>
                <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden border border-white/5 p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-accent-purple to-accent-green rounded-full shadow-glow-green transition-all duration-500"
                    style={{ width: `${simulator.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={onStartEarning}
                className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-accent-purple via-[#7c3aed] to-accent-green hover:opacity-95 text-white font-extrabold rounded-2xl shadow-glow-purple border border-white/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Rocket className="w-5 h-5 text-white group-hover:animate-bounce" />
                <span>{t.hero_start_earning}</span>
                <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Free Join
                </span>
              </button>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4.5 bg-transparent text-text-primary hover:border-accent-purple border border-card-border hover:shadow-glow-purple font-semibold rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>{t.hero_how_it_works}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust and Safety Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-text-muted mt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-green" />
                <span>No Investment Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-text-secondary font-bold">Trustpilot 4.8</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span>Instant Payouts Enabled</span>
              </div>
            </div>

          </div>

          {/* Right Column Orbital Achievements & Mascot */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center select-none">
              
              {/* Spinning Orbital Rings */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-accent-purple/20 animate-rotate-slow pointer-events-none" />
              <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-accent-green/25 animate-rotate-slow-reverse pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-white/5 pointer-events-none" />

              {/* Central Glowing Energy Core (Reactor Glow) */}
              <div className="absolute w-[180px] h-[180px] bg-accent-green/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
              <div className="absolute w-[120px] h-[120px] bg-accent-purple/15 rounded-full blur-[50px] pointer-events-none" />

              {/* Main Mascot Bunny */}
              <div className="absolute w-52 h-52 z-20 hover:scale-105 transition-transform duration-500 pointer-events-auto filter drop-shadow-[0_12px_24px_rgba(139,92,246,0.4)]">
                <img
                  src="/binny_mascot.png"
                  alt="Binny Cash Mascot"
                  className="w-full h-full object-contain mix-blend-screen animate-float-slow"
                />
              </div>

              {/* Floating Achievements / Payout Cards (surrounding reactor) */}

              {/* Card 1: PayPal Cashout (Top Left) */}
              <div className="absolute top-2 -left-8 z-30 backdrop-blur-md bg-[#130f26]/90 border border-accent-green/30 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-bounce-slow hover:border-accent-green transition-all hover:scale-105">
                <div className="w-8 h-8 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                  <PayPalIcon className="w-4 h-4 text-accent-green" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-text-muted leading-none">Instant Payout</p>
                  <p className="text-xs font-black text-white mt-1">PayPal: +$25.00</p>
                </div>
              </div>

              {/* Card 2: Crypto Reward (Top Right) */}
              <div className="absolute top-10 -right-8 z-30 backdrop-blur-md bg-[#130f26]/90 border border-accent-purple/35 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float-slow hover:border-accent-purple transition-all hover:scale-105">
                <div className="w-8 h-8 rounded-xl bg-accent-purple/15 border border-accent-purple/20 flex items-center justify-center">
                  <span className="text-accent-purple font-extrabold text-xs">LTC</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-text-muted leading-none">Crypto Payout</p>
                  <p className="text-xs font-black text-white mt-1">0.34 LTC Paid</p>
                </div>
              </div>

              {/* Card 3: Game Task Done (Bottom Left) */}
              <div className="absolute bottom-10 -left-6 z-30 backdrop-blur-md bg-[#130f26]/90 border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float-delayed hover:border-accent-purple transition-all hover:scale-105">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-text-muted leading-none">Task Completed</p>
                  <p className="text-xs font-black text-white mt-1">Runner Game: +$6.38</p>
                </div>
              </div>

              {/* Card 4: Quick Survey Reward (Bottom Right) */}
              <div className="absolute bottom-2 -right-4 z-30 backdrop-blur-md bg-[#130f26]/90 border border-accent-green/30 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float-slow hover:border-accent-green transition-all hover:scale-105">
                <div className="w-8 h-8 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                  <GoldCoinIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-text-muted leading-none">Survey Credited</p>
                  <p className="text-xs font-black text-white mt-1">Opinion Poll: +$1.50</p>
                </div>
              </div>

              {/* Additional Gold Coins revolving */}
              <div className="absolute top-[48%] -right-16 z-10 w-7 h-7 flex items-center justify-center animate-bounce-slow">
                <GoldCoinIcon className="w-7 h-7" />
              </div>
              <div className="absolute top-[60%] -left-16 z-10 w-6 h-6 flex items-center justify-center animate-float-slow">
                <GoldCoinIcon className="w-6 h-6" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
