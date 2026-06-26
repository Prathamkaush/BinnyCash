"use client";

import { useState } from "react";
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
          <div className="animate-fade-in">
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
