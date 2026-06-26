"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import { LoginModal, SignUpModal } from "@/components/Modals";

export default function Home() {
  const [currentView, setView] = useState<string>("landing");
  const [user, setUser] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([]);

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

            <Hero onStartEarning={handleStartEarning} />
            <LiveFeed />
            <Stats />
            <Steps />
            <Categories onStartEarning={handleStartEarning} />
            <ValueProps />
            <Testimonials />
            <FaqAccordion />
          </div>
        )}

        {currentView === "about" && <AboutUs />}

        {currentView === "dashboard" && user && (
          <Dashboard user={user} />
        )}
      </main>

      {/* Footer Area */}
      <Footer setView={setView} />

      {/* Login Overlay Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleLoginSuccess}
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
        onToggle={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}
