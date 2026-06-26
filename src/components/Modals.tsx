"use client";

import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (username: string) => void;
}

export function LoginModal({ isOpen, onClose, onSuccess }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      // Extract username from email
      const username = email.split("@")[0] || "EarnEarner";
      onSuccess(username);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative w-full max-w-md bg-bg-secondary border border-card-border rounded-2xl p-8 shadow-glow-purple max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:text-white hover:rotate-90 transition-all duration-300"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold font-display text-text-primary">Welcome Back</h3>
          <p className="text-sm text-text-secondary mt-1">Log in to check your tasks and withdrawals</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-primary">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">✉</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-xl py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-primary">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-xl py-3 pl-10 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-text-muted hover:text-text-primary text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-accent-purple to-accent-green hover:from-accent-green hover:to-accent-purple text-white py-3 rounded-xl font-semibold text-sm shadow-glow-purple hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-text-secondary">
          Don't have an account?{" "}
          <button className="text-accent-green font-semibold hover:underline bg-transparent border-none cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export function SignUpModal({ isOpen, onClose, onSuccess }: ModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!terms) {
      setError("Please agree to the Terms of Service.");
      return;
    }

    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(username);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative w-full max-w-md bg-bg-secondary border border-card-border rounded-2xl p-8 shadow-glow-purple max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:text-white hover:rotate-90 transition-all duration-300"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold font-display text-text-primary">Create Free Account</h3>
          <p className="text-sm text-text-secondary mt-1">Start earning real cash in less than 60 seconds</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-primary">Username</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">👤</span>
              <input
                type="text"
                placeholder="earner123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-xl py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-primary">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">✉</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-xl py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-primary">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-text-muted">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-input-bg border border-input-border rounded-xl py-3 pl-10 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-text-muted hover:text-text-primary text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2.5 mt-1">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mt-1 accent-accent-green rounded"
            />
            <label htmlFor="terms" className="text-xs text-text-secondary leading-snug">
              I agree to the{" "}
              <a href="#" className="text-accent-green hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent-green hover:underline">
                Privacy Policy
              </a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-accent-purple to-accent-green hover:from-accent-green hover:to-accent-purple text-white py-3 rounded-xl font-semibold text-sm shadow-glow-purple hover:shadow-glow-green transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Creating Account...
              </>
            ) : (
              "Sign Up Free"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-text-secondary">
          Already have an account?{" "}
          <button className="text-accent-green font-semibold hover:underline bg-transparent border-none cursor-pointer">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
