"use client";

import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import Header from "@/components/Header";
import MainHero from "@/components/MainHero";
import InteractiveDemo from "@/components/InteractiveDemo";
import LiveFeed from "@/components/LiveFeed";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Categories from "@/components/Categories";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Dashboard from "@/components/Dashboard";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";
import CommunityChat from "@/components/CommunityChat";
import LiveSupport from "@/components/LiveSupport";
import { LoginModal, SignUpModal, ComingSoonModal } from "@/components/Modals";

export default function Home() {
  const [currentView, setView] = useState<string>("landing");
  const [user, setUser] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([]);
  const [language, setLanguage] = useState<string>("en");
  const [comingSoonFeature, setComingSoonFeature] = useState<string | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [pendingScrollAnchor, setPendingScrollAnchor] = useState<string | null>(null);

  // Read initial language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("binny-lang") || "en";
    setLanguage(savedLang);
  }, []);

  // Listen to window scroll to show/hide sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to anchor on landing view transition if pending
  useEffect(() => {
    if (currentView === "landing" && pendingScrollAnchor) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScrollAnchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setPendingScrollAnchor(null);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentView, pendingScrollAnchor]);

  const handleAnchorClick = (anchorId: string) => {
    if (currentView !== "landing") {
      setPendingScrollAnchor(anchorId);
      setView("landing");
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLanguageSelect = (code: string) => {
    setLanguage(code);
    localStorage.setItem("binny-lang", code);
  };

  // Generate stars on client only to prevent hydration mismatch
  useEffect(() => {
    // Generate stars initially
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generated);
  }, []);

  const handleStartEarning = () => {
    if (user) {
      setView("dashboard");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsSignUpOpen(true);
    }
  };

  const handleLoginSuccess = (username: string) => {
    setUser(username);
    setView("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSignUpSuccess = (username: string) => {
    setUser(username);
    setView("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setUser(null);
    setView("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Global Navigation Bar */}
      <Header
        currentView={currentView}
        setView={setView}
        user={user}
        onLogout={handleLogout}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
        currentLanguage={language}
        onLanguageSelect={handleLanguageSelect}
      />

      {/* Render Main Content Panel depending on active view route */}
      <main className="flex-grow">
        {currentView === "landing" && (
          <div className="relative isolate animate-fade-in overflow-hidden">
            {/* Twinkling Stars Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {stars.map((star) => (
                <div
                  key={star.id}
                  className="absolute bg-white rounded-full animate-twinkle opacity-30 shadow-[0_0_8px_#ffffff]"
                  style={{
                    top: star.top,
                    left: star.left,
                    width: star.size,
                    height: star.size,
                    animationDelay: star.delay,
                  }}
                />
              ))}
            </div>

            {/* Rotating glowing border shapes in background (thicker green borders) */}
            {/* Shape 1: Rounded Square with Green Border (Upper Right) */}
            <div className="absolute top-[8%] right-[-50px] md:right-[5%] w-56 h-56 border-2 border-accent-green/60 rounded-[50px] shadow-glow-green opacity-40 animate-rotate-slow pointer-events-none -z-10" />

            {/* Shape 2: Dashed Circle with Green Border (Middle Left) */}
            <div className="absolute top-[35%] left-[-40px] md:left-[2%] w-48 h-48 border-2 border-dashed border-accent-green/50 rounded-full shadow-glow-green opacity-40 animate-rotate-slow-reverse pointer-events-none -z-10" />

            {/* Shape 3: 4-Pointed Star matching Logo (Lower Right) */}
            <div className="absolute bottom-[22%] right-[-50px] md:right-[6%] w-52 h-52 animate-rotate-slow pointer-events-none -z-10">
              <svg className="w-full h-full text-accent-green/60 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
              </svg>
            </div>

            {/* Shape 4: Hexagon with Purple/Green Border (Middle Right) */}
            <div className="absolute top-[58%] right-[-40px] md:right-[15%] w-40 h-40 animate-rotate-slow-reverse pointer-events-none -z-10">
              <svg className="w-full h-full text-accent-green/50 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
              </svg>
            </div>

            {/* Shape 5: Triangle with Green Border (Lower Left) */}
            <div className="absolute bottom-[10%] left-[-30px] md:left-[5%] w-36 h-36 animate-rotate-slow pointer-events-none -z-10">
              <svg className="w-full h-full text-accent-green/50 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l10 17H2L12 3z" />
              </svg>
            </div>

            <MainHero onStartEarning={handleStartEarning} language={language} />
            <LiveFeed />
            <Stats />
            <Steps language={language} />
            <InteractiveDemo onStartEarning={handleStartEarning} language={language} />
            <Categories onStartEarning={handleStartEarning} />
            <ValueProps />
            <Testimonials />
            <FaqAccordion />
          </div>
        )}

        {currentView === "about" && <AboutUs />}

        {currentView === "privacy" && <PrivacyPolicy />}

        {currentView === "terms" && <TermsOfService />}

        {currentView === "community" && <CommunityChat />}

        {currentView === "support" && <LiveSupport />}

        {currentView === "dashboard" && user && (
          <Dashboard user={user} />
        )}
      </main>

      {/* Footer Area */}
      <Footer
        setView={setView}
        onComingSoon={setComingSoonFeature}
        onAnchorClick={handleAnchorClick}
      />

      {/* Login Overlay Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleLoginSuccess}
        onComingSoon={setComingSoonFeature}
        onToggle={() => {
          setIsLoginOpen(false);
          setIsSignUpOpen(true);
        }}
      />

      {/* Sign Up Overlay Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSuccess={handleSignUpSuccess}
        onComingSoon={setComingSoonFeature}
        onToggle={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={comingSoonFeature !== null}
        onClose={() => setComingSoonFeature(null)}
        featureName={comingSoonFeature || ""}
      />

      {/* Sticky Call-To-Action Button on Scroll */}
      {currentView === "landing" && showStickyCTA && (
        <div className="fixed bottom-6 right-24 md:right-28 z-40 animate-slide-up">
          <button
            onClick={handleStartEarning}
            className="flex items-center gap-2.5 px-6 py-4 bg-gradient-to-r from-accent-purple via-[#6d28d9] to-accent-green hover:opacity-95 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-[0_8px_32px_rgba(139,92,246,0.35)] border border-[#a78bfa]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 cursor-pointer"
          >
            <Rocket className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white animate-pulse" />
            <span>Start Earning</span>
            <span className="bg-white/20 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold">
              +$60.00 Max
            </span>
          </button>
        </div>
      )}

      {/* Floating Telegram Support Widget */}
      <a
        href="https://t.me/binnycash_official"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#24A1DE] text-white rounded-full shadow-[0_8px_24px_rgba(36,161,222,0.45)] hover:shadow-[0_12px_32px_rgba(36,161,222,0.6)] border border-[#3fc5f0]/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 group cursor-pointer"
        aria-label="Contact Telegram"
      >
        {/* Pulsing Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#24A1DE] opacity-40 animate-ping pointer-events-none" />

        {/* Telegram Paper Plane Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6.5 h-6.5 fill-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.89 3.96L2.3 10.75c-1.2.48-1.19 1.15-.22 1.45l4.52 1.41 10.46-6.6c.49-.3.95-.14.58.19L9.13 14.97v4.18c.41 0 .59-.19.82-.41l1.97-1.92 4.1 3.03c.76.42 1.3.2 1.49-.71l2.69-12.67c.28-1.12-.43-1.63-1.31-1.31z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-[#0f172a] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/5 whitespace-nowrap">
          Join Telegram
        </span>
      </a>
    </div>
  );
}
