"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  user: string | null;
  onLogout: () => void;
  onOpenLogin: () => void;
  onOpenSignUp: () => void;
}

export default function Header({
  currentView,
  setView,
  user,
  onLogout,
  onOpenLogin,
  onOpenSignUp,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("binny-theme") as "dark" | "light" | null;
    const body = document.body;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "light") {
        body.classList.add("light-theme");
      } else {
        body.classList.remove("light-theme");
      }
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
      if (prefersLight) {
        body.classList.add("light-theme");
      }
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    if (theme === "dark") {
      setTheme("light");
      body.classList.add("light-theme");
      localStorage.setItem("binny-theme", "light");
    } else {
      setTheme("dark");
      body.classList.remove("light-theme");
      localStorage.setItem("binny-theme", "dark");
    }
  };

  const navigateTo = (view: string) => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-card-border backdrop-blur-md ${
          isScrolled ? "bg-bg-primary/95 shadow-lg py-3" : "bg-bg-primary/30 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Area */}
          <button onClick={() => navigateTo("landing")} className="flex items-center gap-3 bg-transparent border-none cursor-pointer">
            <div className="relative w-10 h-10 border-2 border-accent-green rounded-full overflow-hidden shadow-glow-green">
              <Image
                src="/logo.jpg"
                alt="BinnyCash Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-extrabold font-display bg-gradient-to-r from-white via-white to-accent-green light-theme:from-accent-purple light-theme:to-accent-green bg-clip-text text-transparent transition-all">
              BinnyCash
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateTo("landing")}
              className={`text-sm font-medium transition-all relative py-1 bg-transparent border-none cursor-pointer ${
                currentView === "landing"
                  ? "text-text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-green"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`text-sm font-medium transition-all relative py-1 bg-transparent border-none cursor-pointer ${
                currentView === "about"
                  ? "text-text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-green"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              About Us
            </button>
            {user && (
              <button
                onClick={() => navigateTo("dashboard")}
                className={`text-sm font-medium transition-all relative py-1 bg-transparent border-none cursor-pointer ${
                  currentView === "dashboard"
                    ? "text-text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-green"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Dashboard
              </button>
            )}
            <a href="#features" className="text-sm font-medium text-text-secondary hover:text-text-primary">
              Features
            </a>
            <a href="#faqs" className="text-sm font-medium text-text-secondary hover:text-text-primary">
              FAQs
            </a>
          </nav>

          {/* Nav Actions (Theme Switcher, Login/Logout CTAs) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateTo("dashboard")}
                  className="px-5 py-2.5 bg-bg-tertiary border border-card-border hover:border-accent-purple text-text-primary rounded-xl text-sm font-semibold hover:shadow-glow-purple transition-all duration-300"
                >
                  👤 {user}
                </button>
                <button
                  onClick={onLogout}
                  className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/30 rounded-xl text-sm font-semibold transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  className="px-5 py-2.5 text-text-primary hover:text-accent-purple text-sm font-semibold transition-all"
                >
                  Log In
                </button>
                <button
                  onClick={onOpenSignUp}
                  className="px-5 py-2.5 bg-gradient-to-r from-accent-purple to-accent-green hover:from-accent-green hover:to-accent-purple text-white rounded-xl text-sm font-bold shadow-glow-purple hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign Up Free
                </button>
              </>
            )}
          </div>

          {/* Hamburger Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary text-sm hover:border-accent-purple transition-all"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="text-text-primary text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-bg-secondary border-l border-card-border p-8 shadow-2xl flex flex-col gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="self-end text-text-primary text-xl bg-transparent border-none cursor-pointer"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6">
          <button
            onClick={() => navigateTo("landing")}
            className={`text-left text-lg font-semibold py-2 bg-transparent border-none ${
              currentView === "landing" ? "text-accent-green" : "text-text-secondary"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("about")}
            className={`text-left text-lg font-semibold py-2 bg-transparent border-none ${
              currentView === "about" ? "text-accent-green" : "text-text-secondary"
            }`}
          >
            About Us
          </button>
          {user && (
            <button
              onClick={() => navigateTo("dashboard")}
              className={`text-left text-lg font-semibold py-2 bg-transparent border-none ${
                currentView === "dashboard" ? "text-accent-green" : "text-text-secondary"
              }`}
            >
              Dashboard
            </button>
          )}
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left text-lg font-semibold text-text-secondary py-2"
          >
            Features
          </a>
          <a
            href="#faqs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left text-lg font-semibold text-text-secondary py-2"
          >
            FAQs
          </a>
        </nav>

        <div className="flex flex-col gap-4 mt-auto">
          {user ? (
            <>
              <div className="text-center text-sm font-semibold text-text-primary bg-bg-tertiary py-3 rounded-xl border border-card-border">
                👤 {user}
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl text-sm font-semibold text-center"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  onOpenLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 text-text-primary border border-card-border hover:border-accent-purple rounded-xl text-sm font-semibold"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onOpenSignUp();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-accent-purple to-accent-green text-white rounded-xl text-sm font-bold shadow-glow-purple"
              >
                Sign Up Free
              </button>
            </>
          )}
        </div>
      </div>

      {/* Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
        />
      )}
    </>
  );
}
