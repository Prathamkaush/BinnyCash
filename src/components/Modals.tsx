"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (username: string) => void;
  onToggle?: () => void;
}

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export function LoginModal({ isOpen, onClose, onSuccess, onToggle }: ModalProps) {
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
      const username = email.split("@")[0] || "EarnEarner";
      onSuccess(username);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md animate-fade-in p-4">
      {/* Click outside to close wrapper */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-[420px] bg-[#0c0915] border border-card-border rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-h-[95vh] overflow-y-auto z-10">

        {/* Wireframe Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors cursor-pointer text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold font-display text-text-primary">Welcome to BinnyCash</h3>
          <p className="text-sm text-text-muted mt-2">Complete offers, earn coins, and redeem real rewards</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-primary">Email</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4.5 h-4.5 text-text-muted" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#130f24] border border-[#2b214a] rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:shadow-glow-purple focus:bg-bg-primary transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-text-primary">Password</label>

            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-4.5 h-4.5 text-text-muted" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#130f24] border border-[#2b214a] rounded-xl py-3.5 pl-11 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:shadow-glow-purple focus:bg-bg-primary transition-all duration-200 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-text-muted hover:text-text-primary cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>

            </div>
            <button
              type="button"
              className="text-xs font-semibold mt-2 text-accent-purple hover:text-[#a78bfa] transition-colors"
              onClick={() => { }}
            >
              Forgot your password?
            </button>
          </div>

          {/* Submit Sign In */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-accent-purple hover:bg-[#7c3aed] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-glow-purple"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider OR */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2b214a]"></div>
          </div>
          <span className="relative px-3 bg-[#0c0915] text-[11px] font-bold text-text-muted uppercase tracking-wider">or</span>
        </div>

        {/* Google SSO Button */}
        <button
          type="button"
          className="w-full bg-white hover:bg-neutral-100 text-black py-3.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              onSuccess("GoogleUser");
              onClose();
            }, 1000);
          }}
        >
          <GoogleIcon className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>

        {/* Modal Toggling Footer */}
        <div className="text-center mt-8 text-xs text-text-secondary">
          Don't have an account?{" "}
          <button
            onClick={onToggle}
            className="text-accent-purple font-semibold hover:text-[#a78bfa] hover:underline bg-transparent border-none cursor-pointer transition-colors"
          >
            Register now
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-text-muted text-center leading-relaxed mt-6 border-t border-[#2b214a]/30 pt-4">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-accent-purple hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="text-accent-purple hover:underline">Privacy Policy</a> and agree to follow all platform rules.
        </p>
      </div>
    </div>
  );
}

export function SignUpModal({ isOpen, onClose, onSuccess, onToggle }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [showReferralInput, setShowReferralInput] = useState(false);

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
      const username = email.split("@")[0] || "EarnEarner";
      onSuccess(username);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md animate-fade-in p-4">
      {/* Click outside to close wrapper */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-[420px] bg-[#0c0915] border border-card-border rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-h-[95vh] overflow-y-auto z-10">

        {/* Wireframe Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors cursor-pointer text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold font-display text-text-primary">Create your account</h3>
          <p className="text-sm text-text-muted mt-2">Complete simple tasks and earn real rewards</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-primary">Email</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4.5 h-4.5 text-text-muted" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#130f24] border border-[#2b214a] rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:shadow-glow-purple focus:bg-bg-primary transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-primary">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-4.5 h-4.5 text-text-muted" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#130f24] border border-[#2b214a] rounded-xl py-3.5 pl-11 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:shadow-glow-purple focus:bg-bg-primary transition-all duration-200 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-text-muted hover:text-text-primary cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>

          {/* Referral Link & Conditional Input */}
          <div className="flex flex-col gap-2 text-center mt-1">
            {!showReferralInput ? (
              <button
                type="button"
                onClick={() => setShowReferralInput(true)}
                className="text-xs font-semibold text-[#8b5cf6] hover:text-[#a78bfa] transition-colors inline-block mx-auto cursor-pointer"
              >
                I have a referral code
              </button>
            ) : (
              <div className="flex flex-col gap-1.5 text-left animate-scale-in">
                <label className="text-xs font-semibold text-text-primary">Referral Code</label>
                <input
                  type="text"
                  placeholder="Enter referral code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="w-full bg-[#130f24] border border-[#2b214a] rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:bg-bg-primary transition-all outline-none"
                />
              </div>
            )}
          </div>

          {/* Submit Sign Up */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-1 bg-accent-purple hover:bg-[#7c3aed] text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-glow-purple"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Divider OR */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2b214a]"></div>
          </div>
          <span className="relative px-3 bg-[#0c0915] text-[11px] font-bold text-text-muted uppercase tracking-wider">or</span>
        </div>

        {/* Google SSO Button */}
        <button
          type="button"
          className="w-full bg-white hover:bg-neutral-100 text-black py-3.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              onSuccess("GoogleUser");
              onClose();
            }, 1000);
          }}
        >
          <GoogleIcon className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>

        {/* Modal Toggling Footer */}
        <div className="text-center mt-8 text-xs text-text-secondary">
          Already have an account?{" "}
          <button
            onClick={onToggle}
            className="text-accent-purple font-semibold hover:text-[#a78bfa] hover:underline bg-transparent border-none cursor-pointer transition-colors"
          >
            Login now
          </button>
        </div>

        {/* Disclaimer */}
        <div className="text-[10px] text-text-muted text-center leading-relaxed mt-6 border-t border-[#2b214a]/30 pt-4 flex flex-col gap-2">
          <p>
            By creating an account, you agree to our{" "}
            <a href="#" className="text-accent-purple hover:underline">Terms of Service</a> and{" "}
            <a href="#" className="text-accent-purple hover:underline">Privacy Policy</a>.
          </p>
          <p className="text-[9px] text-red-400/90 font-medium">
            Creating multiple accounts, using VPNs, emulators, or misusing offers is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
