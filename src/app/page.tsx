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
          <div className="relative animate-fade-in overflow-hidden">
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

            {/* Rotating glowing border shapes */}
            {/* Upper right purple rotating rounded rectangle */}
            <div className="absolute top-[8%] right-[-60px] md:right-[5%] w-60 h-60 border border-accent-purple/35 rounded-[50px] shadow-glow-purple opacity-30 animate-rotate-slow pointer-events-none -z-10" />

            {/* Middle left green rotating rounded rectangle */}
            <div className="absolute top-[38%] left-[-80px] md:left-[2%] w-72 h-72 border border-accent-green/20 rounded-[60px] shadow-glow-green opacity-20 animate-rotate-slow-reverse pointer-events-none -z-10" />

            {/* Lower right purple rotating rounded rectangle */}
            <div className="absolute bottom-[22%] right-[-60px] md:right-[4%] w-64 h-64 border border-accent-purple/20 rounded-[55px] shadow-glow-purple opacity-20 animate-rotate-slow pointer-events-none -z-10" />

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
      />

      {/* Sign Up Overlay Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSuccess={handleSignUpSuccess}
      />
    </div>
  );
}
