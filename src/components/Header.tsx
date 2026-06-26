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

const LANGUAGES = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "hi", name: "Hindi", flag: "https://flagcdn.com/w40/in.png" },
  { code: "bn", name: "Bengali", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "es", name: "Spanish", flag: "https://flagcdn.com/w40/es.png" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "de", name: "German", flag: "https://flagcdn.com/w40/de.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "pt", name: "Portuguese", flag: "https://flagcdn.com/w40/pt.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "zh", name: "Chinese (Simplified)", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "ja", name: "Japanese", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "it", name: "Italian", flag: "https://flagcdn.com/w40/it.png" },
  { code: "pl", name: "Polish", flag: "https://flagcdn.com/w40/pl.png" },
  { code: "tr", name: "Turkish", flag: "https://flagcdn.com/w40/tr.png" },
  { code: "sv", name: "Swedish", flag: "https://flagcdn.com/w40/se.png" },
  { code: "da", name: "Danish", flag: "https://flagcdn.com/w40/dk.png" },
  { code: "nl", name: "Dutch", flag: "https://flagcdn.com/w40/nl.png" },
  { code: "ko", name: "Korean", flag: "https://flagcdn.com/w40/kr.png" },
  { code: "th", name: "Thai", flag: "https://flagcdn.com/w40/th.png" },
  { code: "id", name: "Indonesian", flag: "https://flagcdn.com/w40/id.png" },
  { code: "vi", name: "Vietnamese", flag: "https://flagcdn.com/w40/vn.png" },
];

export default function Header({
  currentView,
  setView,
  user,
  onLogout,
  onOpenLogin,
  onOpenSignUp,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [toast, setToast] = useState<string | null>(null);

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

  // Lock to dark theme and initialize language on mount
  useEffect(() => {
    const body = document.body;
    body.classList.remove("light-theme");
    localStorage.setItem("binny-theme", "dark");

    const storedLang = localStorage.getItem("binny-lang");
    if (storedLang) {
      setCurrentLanguage(storedLang);
    }
  }, []);

  // Close modal on escape key
  useEffect(() => {
    if (!isLanguageOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLanguageOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLanguageOpen]);

  // Handle toast self-dismissal
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code);
    localStorage.setItem("binny-lang", code);

    const selected = LANGUAGES.find((lang) => lang.code === code);
    if (selected) {
      setToast(`Language switched to ${selected.name}`);
    }

    setTimeout(() => {
      setIsLanguageOpen(false);
    }, 300);
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

          {/* Nav Actions (Language Selector, Login/Logout CTAs) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsLanguageOpen(true)}
              aria-label="Choose Language"
              className="w-10 h-10 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
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
              onClick={() => setIsLanguageOpen(true)}
              aria-label="Choose Language"
              className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary text-sm hover:border-accent-purple transition-all cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
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

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-tertiary border border-accent-green rounded-xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-fade-in">
          <span className="text-accent-green text-lg font-bold">✓</span>
          <span className="text-sm font-semibold text-text-primary">{toast}</span>
        </div>
      )}

      {/* Language Selection Modal */}
      {isLanguageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in transition-all duration-300">
          <div 
            onClick={() => setIsLanguageOpen(false)} 
            className="absolute inset-0"
          />
          <div className="relative w-full max-w-3xl bg-bg-secondary border border-card-border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden animate-scale-in max-h-[85vh] flex flex-col">
            
            {/* Background glowing effects to match BinnyCash premium aesthetics */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary">
                  Choose your language
                </h3>
                <p className="text-xs md:text-sm text-text-secondary mt-1 font-sans">
                  Popular languages
                </p>
              </div>
              <button
                onClick={() => setIsLanguageOpen(false)}
                className="w-10 h-10 rounded-xl bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:border-accent-purple hover:text-accent-purple transition-all cursor-pointer font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Language Grid */}
            <div className="overflow-y-auto pr-2 relative z-10 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 scrollbar-thin">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left w-full cursor-pointer bg-bg-tertiary/20 ${
                      isSelected
                        ? "border-accent-green bg-accent-green/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                        : "border-card-border hover:border-accent-purple/50 hover:bg-bg-tertiary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={lang.flag}
                        alt={`${lang.name} flag`}
                        className="w-6 h-4.5 object-cover rounded shadow-sm border border-white/10"
                        loading="lazy"
                      />
                      <span className={`text-sm font-semibold transition-colors ${
                        isSelected ? "text-white" : "text-text-secondary"
                      }`}>
                        {lang.name}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-accent-green/20 border border-accent-green flex items-center justify-center text-accent-green text-[10px] font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
