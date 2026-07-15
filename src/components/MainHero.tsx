import { Sparkles, Star } from "lucide-react";

interface MainHeroProps {
  onStartEarning: () => void;
  language?: string;
}

const DollarBillSVG = () => (
  <svg viewBox="0 0 70 40" className="w-full h-full text-accent-green opacity-95 filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
    {/* Bill Canvas Background */}
    <rect width="70" height="40" rx="3.5" fill="#064e3b" stroke="#047857" strokeWidth="1" />
    <rect x="2" y="2" width="66" height="36" rx="2.5" fill="#047857" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1.5 1" />
    
    {/* Corner dollar symbols */}
    <text x="5" y="8.5" fill="#34d399" fontSize="5.5" fontWeight="bold" fontFamily="monospace">$</text>
    <text x="65" y="8.5" fill="#34d399" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="end">$</text>
    <text x="5" y="35.5" fill="#34d399" fontSize="5.5" fontWeight="bold" fontFamily="monospace">$</text>
    <text x="65" y="35.5" fill="#34d399" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="end">$</text>
    
    {/* Center Oval Portrait Ring */}
    <ellipse cx="35" cy="20" rx="11" ry="13" fill="#064e3b" stroke="#34d399" strokeWidth="0.75" />
    <ellipse cx="35" cy="20" rx="9" ry="11" fill="none" stroke="#6ee7b7" strokeWidth="0.5" strokeDasharray="1 1" />
    
    {/* Portrait representation */}
    <path d="M30,25 C30,19 40,19 40,25 Z" fill="#10b981" opacity="0.9" />
    <circle cx="35" cy="18" r="3.2" fill="#10b981" opacity="0.9" />
    
    {/* Decorative Leaf scroll motifs */}
    <path d="M12,20 Q19,14 22,20" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.6" />
    <path d="M58,20 Q51,14 48,20" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.6" />
    
    {/* Small stars */}
    <circle cx="21" cy="28" r="0.6" fill="#6ee7b7" />
    <circle cx="49" cy="28" r="0.6" fill="#6ee7b7" />
  </svg>
);

const GoldCoinSVG = ({ className = "w-10 h-10 text-sm" }: { className?: string }) => (
  <div className={`${className} rounded-full border-2 border-[#d97706] bg-gradient-to-tr from-[#fef08a] via-[#f59e0b] to-[#b45309] shadow-[0_6px_15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center font-black text-amber-950 select-none transform hover:scale-115 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300 cursor-pointer`}>
    <svg viewBox="0 0 24 24" className="w-full h-full p-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Inner dotted ridge ring */}
      <circle cx="12" cy="12" r="9.5" stroke="#b45309" strokeWidth="0.75" strokeDasharray="1.8 1.2" />
      {/* Shiny light center */}
      <circle cx="12" cy="12" r="7" fill="url(#coinHighlightGrad)" opacity="0.45" />
      {/* 3D dollar symbol */}
      <text x="12" y="16.5" fill="#78350f" fontSize="13" fontWeight="950" textAnchor="middle" fontFamily="sans-serif" filter="drop-shadow(1px 1px 0px #fbbf24)">
        $
      </text>
      <defs>
        <radialGradient id="coinHighlightGrad" cx="9" cy="9" r="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const GamepadSVG = () => (
  <div className="w-full h-full transform hover:rotate-[-8deg] hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
    <svg viewBox="0 0 100 65" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Outer gamepad body */}
      <path d="M25,8 C36,8 41,12 50,12 C59,12 64,8 75,8 C92,8 101,18 97,45 C94,56 81,62 70,52 C61,43 59,41 50,41 C41,41 39,43 30,52 C19,62 6,56 3,45 C-1,18 8,8 25,8 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      
      {/* Grip panel inserts (black matte panels) */}
      <path d="M4,44 C7,54 18,59 28,49 C30,47 33,45 35,43 C33,39 28,26 23,22 C13,20 7,28 4,44 Z" fill="#1e293b" opacity="0.85" />
      <path d="M96,44 C93,54 82,59 72,49 C70,47 67,45 65,43 C67,39 72,26 77,22 C87,20 93,28 96,44 Z" fill="#1e293b" opacity="0.85" />
      
      {/* Touchpad in top center */}
      <path d="M37,13 h26 v12 C63,25 55,27 50,27 C45,27 37,25 37,25 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.75" />
      {/* Touchpad neon light glow strip */}
      <path d="M38,23 C43,24 57,24 62,23" fill="none" stroke="#3b82f6" strokeWidth="0.75" opacity="0.9" />
      
      {/* Directional Pad */}
      <g fill="#475569">
        <rect x="22" y="24" width="4" height="4" rx="0.5" />
        <rect x="18" y="28" width="4" height="4" rx="0.5" />
        <rect x="26" y="28" width="4" height="4" rx="0.5" />
        <rect x="22" y="32" width="4" height="4" rx="0.5" />
        <circle cx="24" cy="30" r="1.5" fill="#334155" />
      </g>
      
      {/* Actions Buttons XYAB with letter indicators */}
      <circle cx="76" cy="22" r="3.2" fill="#f87171" stroke="#ef4444" strokeWidth="0.5" /> {/* B */}
      <circle cx="70" cy="28" r="3.2" fill="#60a5fa" stroke="#3b82f6" strokeWidth="0.5" /> {/* X */}
      <circle cx="82" cy="28" r="3.2" fill="#34d399" stroke="#10b981" strokeWidth="0.5" /> {/* Y */}
      <circle cx="76" cy="34" r="3.2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5" /> {/* A */}
      
      {/* Joysticks with textured caps */}
      <circle cx="37" cy="39" r="7.5" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="0.5" />
      <circle cx="37" cy="39" r="6" fill="#475569" />
      <circle cx="36.5" cy="38" r="3" fill="#1e293b" />
      <circle cx="36.5" cy="38" r="1" fill="#475569" />
      
      <circle cx="63" cy="39" r="7.5" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="0.5" />
      <circle cx="63" cy="39" r="6" fill="#475569" />
      <circle cx="62.5" cy="38" r="3" fill="#1e293b" />
      <circle cx="62.5" cy="38" r="1" fill="#475569" />
      
      {/* Share & Options tiny buttons */}
      <rect x="32" y="16" width="3" height="1.5" rx="0.5" fill="#475569" transform="rotate(-15 32 16)" />
      <rect x="65" y="16" width="3" height="1.5" rx="0.5" fill="#475569" transform="rotate(15 65 16)" />
      
      {/* PS Logo circle */}
      <circle cx="50" cy="33" r="3.5" fill="#6d28d9" stroke="#5b21b6" strokeWidth="0.5" />
      <path d="M49.5,31.5 L50.5,31.5 L50.5,34.5 L49.5,34.5 Z" fill="white" />
      <path d="M48.5,32.5 L51.5,32.5 L51.5,33.5 L48.5,33.5 Z" fill="white" />
    </svg>
  </div>
);

const GiftBoxSVG = () => (
  <div className="w-full h-full transform hover:rotate-[8deg] hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      
      {/* Box Base (3D shaded) */}
      <rect x="22" y="45" width="56" height="42" rx="4" fill="url(#boxBaseGrad)" stroke="#4c1d95" strokeWidth="0.5" />
      <rect x="22" y="45" width="28" height="42" fill="black" opacity="0.12" />
      
      {/* Box Lid (overlaps base) */}
      <rect x="18" y="34" width="64" height="12" rx="2" fill="url(#boxLidGrad)" stroke="#5b21b6" strokeWidth="0.5" />
      <rect x="18" y="34" width="32" height="12" fill="black" opacity="0.12" />
      
      {/* Ribbon - Vertical */}
      <rect x="46" y="34" width="8" height="53" fill="url(#ribbonGrad)" />
      <rect x="46" y="34" width="4" height="53" fill="white" opacity="0.15" />
      
      {/* Ribbon - Horizontal on Lid */}
      <rect x="18" y="39.5" width="64" height="2.5" fill="url(#ribbonGrad)" />
      
      {/* 3D Bow Loops (Multiple layered curly ribbons) */}
      <path d="M50,35 C35,17 23,23 46,35 Z" fill="url(#ribbonGrad)" stroke="#0e7490" strokeWidth="0.5" />
      <path d="M50,35 C38,21 30,25 46,35 Z" fill="white" opacity="0.2" />
      
      <path d="M50,35 C65,17 77,23 54,35 Z" fill="url(#ribbonGrad)" stroke="#0e7490" strokeWidth="0.5" />
      <path d="M50,35 C62,21 70,25 54,35 Z" fill="white" opacity="0.2" />
      
      <path d="M50,35 C42,25 35,27 48,35 Z" fill="#22d3ee" opacity="0.95" />
      <path d="M50,35 C58,25 65,27 52,35 Z" fill="#22d3ee" opacity="0.95" />

      {/* Center Ribbon Knot */}
      <rect x="43" y="32" width="14" height="6.5" rx="3.2" fill="#22d3ee" stroke="#0e7490" strokeWidth="0.5" />
      <circle cx="47" cy="34" r="1.5" fill="white" opacity="0.45" />
    </svg>
  </div>
);

export default function MainHero({ onStartEarning }: MainHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-24 px-4 md:px-6 overflow-hidden bg-bg-primary">
      {/* Large background neon mesh glows */}
      <div className="absolute -top-[10%] left-[5%] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-accent-green/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start animate-fade-in">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.8 rounded-full bg-[#110b24]/95 border border-[#3b2b64] text-xs font-bold shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-text-secondary font-medium">Get Paid To</span>
              <span className="text-accent-green font-black">Play, Complete & Earn</span>
              <span className="text-[10px] text-text-secondary font-semibold ml-0.5">▼</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5.5xl lg:text-6.5xl font-black font-display text-text-primary leading-[1.1] tracking-tight">
              Earn Real Cash <br />
              Doing <span className="text-[#10b981]">Simple Tasks</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-medium">
              Play games, complete surveys, try apps and more. <br className="hidden sm:inline" />
              Withdraw your earnings instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={onStartEarning}
                className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-accent-green to-[#0fa976] hover:brightness-105 text-[#07050d] font-black rounded-2xl shadow-glow-green transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer text-center text-sm"
              >
                Start Earning Now
              </button>
              
              <button
                onClick={() => onStartEarning()}
                className="w-full sm:w-auto px-8 py-4.5 bg-[#140e28]/70 text-text-primary hover:border-accent-purple/50 border border-[#2f2054] hover:shadow-glow-purple font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer text-sm"
              >
                {/* Outline Play icon */}
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                  <span className="text-[9px] pl-0.5">▶</span>
                </div>
                <span>Watch How It Works</span>
              </button>
            </div>

            {/* Social Proof Trust row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 pt-2">
              {/* Overlapping User Avatars */}
              <div className="flex -space-x-3.5 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#07050d] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar 1" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#07050d] object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar 2" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#07050d] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar 3" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#07050d] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Avatar 4" />
              </div>
              <div className="flex flex-col items-center lg:items-start leading-tight">
                {/* 5 stars */}
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-500 text-sm">
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
                  </div>
                  <span className="text-xs font-black text-white ml-1">4.8</span>
                </div>
                <span className="text-[10px] sm:text-xs text-text-secondary mt-1">Trusted by 100,000+ members</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0 select-none">
            <div className="relative w-full max-w-[460px] h-[400px] flex items-center justify-center">
              
              {/* Background Neon Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#8b5cf6]/15 animate-rotate-slow" />
                <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-accent-green/20 animate-rotate-slow-reverse" />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-[#8b5cf6]/20 animate-pulse" />
                <div className="absolute w-[180px] h-[180px] bg-accent-purple/10 rounded-full blur-[80px]" />
                <div className="absolute w-[130px] h-[130px] bg-accent-green/10 rounded-full blur-[60px]" />
              </div>

              {/* Floating Green Bills in background */}
              <div className="absolute top-[20%] left-[16%] z-10 w-16 h-10 rotate-[25deg] animate-float-slow opacity-60">
                <DollarBillSVG />
              </div>
              <div className="absolute top-[35%] right-[10%] z-10 w-18 h-11 rotate-[-15deg] animate-float-delayed opacity-50">
                <DollarBillSVG />
              </div>

              {/* Floating Gold Coins */}
              <div className="absolute top-[12%] left-[10%] z-10 w-9.5 h-9.5 animate-bounce-slow">
                <GoldCoinSVG className="w-9.5 h-9.5 text-xs font-black" />
              </div>
              <div className="absolute top-[8%] right-[8%] z-10 w-10.5 h-10.5 animate-float-slow">
                <GoldCoinSVG className="w-10.5 h-10.5 text-sm font-black" />
              </div>
              <div className="absolute top-[42%] left-[-15px] z-10 w-11 h-11 animate-float-delayed">
                <GoldCoinSVG className="w-11 h-11 text-sm font-black" />
              </div>
              <div className="absolute top-[48%] right-[-20px] z-10 w-12 h-12 animate-bounce-slow">
                <GoldCoinSVG className="w-12 h-12 text-base font-black" />
              </div>

              {/* Smartphone Mockup */}
              <div className="absolute top-2 right-12 z-20 w-56 h-[340px] bg-[#0d0a1a] border-4 border-[#1f1938] rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] rotate-[6deg] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-[#1f1938] rounded-b-xl z-30" />
                
                {/* Phone screen content */}
                <div className="p-3.5 pt-6 text-left space-y-3.5 h-full flex flex-col justify-start">
                  {/* Balance card */}
                  <div className="bg-[#18122e]/85 border border-[#372968] rounded-xl p-3 shadow-inner mt-2">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Your Balance</span>
                    <span className="text-xl font-black text-white mt-1 block">$23.45</span>
                  </div>

                  {/* Coins card */}
                  <div className="bg-[#18122e]/85 border border-[#372968] rounded-xl p-3 shadow-inner">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Coins</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#d97706] flex items-center justify-center text-[9px] font-black text-amber-950 shadow-sm">
                        $
                      </div>
                      <span className="text-base font-black text-white">2,345</span>
                    </div>
                  </div>

                  {/* Withdraw CTA */}
                  <button 
                    onClick={() => onStartEarning()}
                    className="w-full py-2.5 bg-accent-green hover:bg-[#0d9668] text-[#09070f] font-black text-xs rounded-xl shadow-glow-green text-center mt-3 cursor-pointer transition-all active:scale-95"
                  >
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Wallet with detailed leather creases and stitching */}
              <div className="absolute bottom-12 left-6 z-30 w-[180px] h-[130px] bg-gradient-to-br from-[#3b2fc2] via-[#5241e0] to-[#6d28d9] border border-[#8b5cf6]/40 rounded-2xl p-4 shadow-[0_22px_45px_rgba(0,0,0,0.7)] hover:scale-[1.03] transition-transform duration-300 overflow-hidden">
                {/* Wallet stitch lines */}
                <div className="absolute inset-1.5 border border-dashed border-[#a78bfa]/35 rounded-[11px] pointer-events-none" />
                
                {/* Pocket fold slot curve */}
                <svg viewBox="0 0 180 130" className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,45 C40,40 100,55 180,45" stroke="#4c1d95" strokeWidth="2" fill="none" opacity="0.45" />
                </svg>
                
                {/* Crease shadow for bi-fold */}
                <div className="absolute top-0 bottom-0 left-[48%] w-4.5 bg-black/25 blur-[3px] pointer-events-none" />

                {/* Leather strap clasp */}
                <div className="absolute top-[40%] right-[-12px] w-9 h-8 bg-[#3b2fc2] border border-[#8b5cf6]/50 rounded-lg flex items-center justify-center shadow-md z-10">
                  <div className="absolute inset-0.5 border border-dashed border-[#a78bfa]/30 rounded-md pointer-events-none" />
                  <div className="w-3.5 h-3.5 bg-gradient-to-tr from-yellow-500 to-amber-300 rounded-full border border-amber-600 shadow-sm cursor-pointer flex items-center justify-center font-black text-[7px] text-amber-950">
                    $
                  </div>
                </div>
                
                {/* Logo and name */}
                <div className="h-full flex flex-col justify-end relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-[#10b981] to-[#059669] flex items-center justify-center text-[9px] font-black text-[#07050d] shadow-md border border-white/10">
                      B
                    </div>
                    <span className="text-xs font-black text-white tracking-tight drop-shadow-md">BinnyCash</span>
                  </div>
                </div>
              </div>

              {/* Gamepad */}
              <div className="absolute bottom-[-15px] left-[-15px] z-40 w-40 h-24 pointer-events-auto">
                <GamepadSVG />
              </div>

              {/* Gift Box */}
              <div className="absolute bottom-[-10px] right-[5px] z-40 w-32 h-32 pointer-events-auto">
                <GiftBoxSVG />
              </div>

              {/* Gold coin stacks in front of phone/wallet */}
              <div className="absolute bottom-4 right-[115px] z-30 flex flex-col-reverse items-center">
                <GoldCoinSVG className="w-10 h-10 text-sm shadow-lg" />
                <GoldCoinSVG className="w-10 h-10 text-sm shadow-lg -mb-6" />
                <GoldCoinSVG className="w-10 h-10 text-sm shadow-lg -mb-6" />
              </div>
              <div className="absolute bottom-0 right-[75px] z-35">
                <GoldCoinSVG className="w-10 h-10 text-sm shadow-lg" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
