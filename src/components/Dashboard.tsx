import { useState, useEffect } from "react";
import { 
  Rocket, 
  Wallet, 
  Coins, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  Search, 
  Lock, 
  Gamepad2, 
  FileText, 
  Check, 
  Copy, 
  FileUp, 
  Activity, 
  Bell, 
  MessageSquare, 
  Gift, 
  Trophy,
  ArrowRight,
  User,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Smartphone,
  Monitor,
  Laptop
} from "lucide-react";

interface DashboardProps {
  user: string;
  setView: (view: string) => void;
  onLogout: () => void;
}

interface OfferItem {
  id: string;
  name: string;
  partner: string;
  reward: number;
  icon: string;
  platform: "all" | "android" | "ios" | "windows" | "desktop";
  logoText: string;
  logoColor: string;
}

interface GameItem {
  id: string;
  name: string;
  reward: number;
  icon: string;
  platform: string;
  imageUrl: string;
}

interface SurveyItem {
  id: string;
  name: string;
  duration: string;
  reward: number;
  rating: number;
}

interface CompletionHistory {
  id: string;
  name: string;
  reward: number;
  status: "Completed" | "Pending" | "Reversal";
  partner: string;
  date: string;
}

const OFFERS_DATA: OfferItem[] = [
  { id: "o1", name: "Paytm: Secure UPI", partner: "AdGate", reward: 0.02, icon: "💳", platform: "android", logoText: "paytm", logoColor: "bg-[#002E6E] text-white" },
  { id: "o2", name: "WorkIndia Job Search", partner: "Wannads", reward: 0.04, icon: "💼", platform: "all", logoText: "WI Jobs", logoColor: "bg-[#1E40AF] text-white" },
  { id: "o3", name: "ABCD Aditya Birla", partner: "OfferToro", reward: 0.03, icon: "🏦", platform: "all", logoText: "abcd", logoColor: "bg-[#991B1B] text-white" },
  { id: "o4", name: "Tamil Matrimony", partner: "Lootably", reward: 0.03, icon: "💑", platform: "android", logoText: "tamil matrimony", logoColor: "bg-[#D97706] text-white" },
  { id: "o5", name: "XM App - Trading", partner: "AyeT-Studios", reward: 0.07, icon: "📈", platform: "android", logoText: "XM", logoColor: "bg-[#111827] text-white" },
  { id: "o6", name: "PixVerse: AI Video", partner: "AdGem", reward: 0.06, icon: "🎥", platform: "desktop", logoText: "PixVerse", logoColor: "bg-[#6D28D9] text-white" },
  { id: "o7", name: "Color Brick Stack", partner: "PlayToEarn", reward: 7.87, icon: "🧱", platform: "ios", logoText: "Brick Stack", logoColor: "bg-[#059669] text-white" },
  { id: "o8", name: "Bubble Burst", partner: "PlayToEarn", reward: 10.66, icon: "🎈", platform: "ios", logoText: "Bubble Burst", logoColor: "bg-[#E11D48] text-white" },
];

const GAMES_DATA: GameItem[] = [
  { id: "g1", name: "Arrows GOI (iOS)", reward: 1.20, icon: "🏹", platform: "ios", imageUrl: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g2", name: "Blast Friends", reward: 0.88, icon: "💥", platform: "all", imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g3", name: "Pop Block Puzzle", reward: 6.10, icon: "🧩", platform: "all", imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g4", name: "Clumsy Arrow", reward: 10.83, icon: "🎯", platform: "all", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g5", name: "Farm Block Escape", reward: 0.89, icon: "🚜", platform: "all", imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g6", name: "Swipe It: Board Master", reward: 11.91, icon: "🎲", platform: "all", imageUrl: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g7", name: "Block Pop Party", reward: 5.88, icon: "🥳", platform: "all", imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=80&h=80&q=80" },
  { id: "g8", name: "Pop Block Puzzle Max", reward: 6.85, icon: "👾", platform: "all", imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=80&h=80&q=80" },
];

const SURVEYS_DATA: SurveyItem[] = [
  { id: "s1", name: "Bitlabs Survey", duration: "15 mins", reward: 0.42, rating: 4.5 },
  { id: "s2", name: "CPX Research", duration: "20 mins", reward: 0.29, rating: 4.5 },
  { id: "s3", name: "Wannads Survey", duration: "10 mins", reward: 0.38, rating: 4.5 },
  { id: "s4", name: "Pollfish Survey", duration: "20 mins", reward: 0.40, rating: 4.5 },
  { id: "s5", name: "Your Surveys", duration: "15 mins", reward: 0.38, rating: 4.5 },
  { id: "s6", name: "Adscend Media", duration: "8 mins", reward: 0.36, rating: 4.5 },
];

const PAYOUT_GIFT_CARDS = [
  { id: "gc1", name: "PhonePe", icon: "🟣", color: "from-purple-600 to-indigo-600" },
  { id: "gc2", name: "Asia Seven", icon: "🍜", color: "from-red-600 to-yellow-600" },
  { id: "gc3", name: "FUNCITY", icon: "🎢", color: "from-pink-500 to-rose-500" },
  { id: "gc4", name: "Lite Bite Foods", icon: "🍔", color: "from-amber-500 to-orange-600" },
  { id: "gc5", name: "MiniKlub", icon: "🧸", color: "from-teal-500 to-cyan-500" },
  { id: "gc6", name: "Street Foods", icon: "🍟", color: "from-orange-500 to-red-500" },
  { id: "gc7", name: "Toscano", icon: "🍷", color: "from-yellow-600 to-red-800" },
  { id: "gc8", name: "Trends Woman", icon: "👗", color: "from-fuchsia-600 to-pink-700" }
];

export default function Dashboard({ user, setView, onLogout }: DashboardProps) {
  // Main Balance States (synchronized, USD = Coins / 100)
  const [balance, setBalance] = useState(23.45); // USD Balance
  const [pendingBalance, setPendingBalance] = useState(8.50);
  const [totalEarned, setTotalEarned] = useState(523.45);
  const [referralsCount, setReferralsCount] = useState(1);

  // Tab routing
  const [activeTab, setActiveTab] = useState<"earn" | "cashout" | "profile">("earn");
  const [deviceFilter, setDeviceFilter] = useState<"all" | "android" | "ios" | "windows" | "desktop">("all");
  
  // Search state for gift cards
  const [giftCardSearch, setGiftCardSearch] = useState("");
  
  // KYC verification state
  const [kycVerified, setKycVerified] = useState(false);
  const [kycModalOpen, setKycModalOpen] = useState(false);
  const [kycDocumentType, setKycDocumentType] = useState("National ID");
  const [uploadingKyc, setUploadingKyc] = useState(false);

  // Interactive Task simulation states
  const [activeSimulation, setActiveSimulation] = useState<{ type: "offer" | "game" | "survey"; item: any } | null>(null);
  const [simulatingStep, setSimulatingStep] = useState<"intro" | "loader" | "success">("intro");
  
  // Withdrawal Form States
  const [selectedGateway, setSelectedGateway] = useState<"upi" | "phonepe" | "bank" | "paytm" | null>(null);
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [withdrawalError, setWithdrawalError] = useState("");

  // Toast Notification
  const [toast, setToast] = useState<string | null>(null);

  // Earning / History Logs
  const [history, setHistory] = useState<CompletionHistory[]>([
    { id: "h1", name: "Bubble Shooter Game Milestone", reward: 2.40, status: "Completed", partner: "PlayToEarn", date: "2026-07-13" },
    { id: "h2", name: "Tech Opinion Market Survey", reward: 1.10, status: "Completed", partner: "CPX Research", date: "2026-07-13" },
    { id: "h3", name: "Register & Install Mobile VPN", reward: 3.50, status: "Completed", partner: "AdGate", date: "2026-07-12" }
  ]);

  // Profile specific sub-filters
  const [profileHistoryTab, setProfileHistoryTab] = useState<"Offers" | "Surveys" | "Rewards">("Offers");

  // Show Toast Helper
  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  // Switch to Section helper
  const handleScrollToSection = (sectionId: string) => {
    setActiveTab("earn");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Simulates starting an offer
  const startSimulation = (type: "offer" | "game" | "survey", item: any) => {
    setActiveSimulation({ type, item });
    setSimulatingStep("intro");
  };

  const executeSimulation = () => {
    setSimulatingStep("loader");
    setTimeout(() => {
      // Reward logic
      const rewardVal = activeSimulation?.item.reward || 0.10;
      setBalance((prev) => parseFloat((prev + rewardVal).toFixed(2)));
      setTotalEarned((prev) => parseFloat((prev + rewardVal).toFixed(2)));
      
      // Log to history
      const newLog: CompletionHistory = {
        id: `h-${Date.now()}`,
        name: activeSimulation?.item.name || "Survey Completion",
        reward: rewardVal,
        status: "Completed",
        partner: activeSimulation?.type === "survey" ? "Market Research" : activeSimulation?.item.partner || "Offer Wall",
        date: new Date().toISOString().split("T")[0]
      };
      setHistory((prev) => [newLog, ...prev]);

      setSimulatingStep("success");
      triggerToast(`Successfully completed! Earned $${rewardVal.toFixed(2)}.`);
    }, 3000);
  };

  // Submit KYC Document
  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadingKyc(true);
    setTimeout(() => {
      setUploadingKyc(false);
      setKycVerified(true);
      setKycModalOpen(false);
      triggerToast("KYC Documents successfully uploaded and approved!");
    }, 2000);
  };

  // Submit Withdrawal Form
  const handleWithdrawalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawalError("");
    const amount = parseFloat(withdrawalAmount);
    
    if (isNaN(amount) || amount <= 0) {
      setWithdrawalError("Please enter a valid amount.");
      return;
    }
    if (amount < 1.00) {
      setWithdrawalError("Minimum withdrawal is $1.00.");
      return;
    }
    if (amount > balance) {
      setWithdrawalError("Insufficient balance in your wallet.");
      return;
    }
    if (!withdrawalAddress) {
      setWithdrawalError("Please enter details.");
      return;
    }

    // Process Withdrawal
    setBalance((prev) => parseFloat((prev - amount).toFixed(2)));
    
    // Add to history as withdrawal
    const withdrawLog: CompletionHistory = {
      id: `w-${Date.now()}`,
      name: `Withdrawal via ${selectedGateway?.toUpperCase()}`,
      reward: -amount,
      status: "Completed",
      partner: "Redemption Gate",
      date: new Date().toISOString().split("T")[0]
    };
    setHistory((prev) => [withdrawLog, ...prev]);

    triggerToast(`Withdrawal of $${amount.toFixed(2)} successfully requested!`);
    setWithdrawalAmount("");
    setWithdrawalAddress("");
    setSelectedGateway(null);
  };

  return (
    <div className="min-h-screen bg-[#07050d] text-text-primary flex flex-col font-sans">
      {/* 1. Custom Logged-in Header */}
      <header className="sticky top-0 z-50 bg-[#0d0918]/90 backdrop-blur-md border-b border-[#241a3a] py-3.5 px-4 sm:px-6 shadow-md transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo brand on left */}
          <button onClick={() => setView("landing")} className="flex items-center gap-2 bg-transparent border-none cursor-pointer">
            <div className="relative w-8.5 h-8.5 border border-accent-green rounded-full overflow-hidden flex-shrink-0">
              <img src="/logo.jpg" alt="BinnyCash Logo" className="object-cover w-full h-full" />
            </div>
            <span className="text-lg font-black font-display bg-gradient-to-r from-white to-accent-green bg-clip-text text-transparent">
              BinnyCash
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => setActiveTab("earn")}
              className={`text-xs lg:text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors bg-transparent border-none py-1.5 ${
                activeTab === "earn" ? "text-accent-green border-b-2 border-accent-green" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>Earn</span>
            </button>
            <button
              onClick={() => handleScrollToSection("offers-section")}
              className="text-xs lg:text-sm font-bold text-text-secondary hover:text-text-primary flex items-center gap-2 cursor-pointer bg-transparent border-none py-1.5"
            >
              <Trophy className="w-4 h-4" />
              <span>Offers</span>
            </button>
            <button
              onClick={() => handleScrollToSection("games-section")}
              className="text-xs lg:text-sm font-bold text-text-secondary hover:text-text-primary flex items-center gap-2 cursor-pointer bg-transparent border-none py-1.5"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Games</span>
            </button>
            <button
              onClick={() => { setActiveTab("profile"); setProfileHistoryTab("Rewards"); }}
              className="text-xs lg:text-sm font-bold text-text-secondary hover:text-text-primary flex items-center gap-2 cursor-pointer bg-transparent border-none py-1.5"
            >
              <Gift className="w-4 h-4" />
              <span>Rewards</span>
            </button>
            <button
              onClick={() => setActiveTab("cashout")}
              className={`text-xs lg:text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors bg-transparent border-none py-1.5 ${
                activeTab === "cashout" ? "text-accent-purple border-b-2 border-accent-purple" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span>Withdraw</span>
            </button>
          </nav>

          {/* Right Actions Block */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Refer and Earn CTA */}
            <button 
              onClick={() => { setActiveTab("profile"); setProfileHistoryTab("Rewards"); }}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90 text-white text-xs font-bold rounded-xl shadow-glow-purple cursor-pointer transition-all"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Refer & Earn</span>
            </button>

            {/* Notification Bell */}
            <button className="relative w-8 h-8 flex items-center justify-center bg-[#18112d] hover:bg-[#251b44] rounded-lg border border-[#2d224b] text-text-secondary hover:text-white transition-colors cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-black text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#0d0918]">
                3
              </span>
            </button>

            {/* Live Chat Icon */}
            <button 
              onClick={() => setView("community")}
              className="relative w-8 h-8 flex items-center justify-center bg-[#18112d] hover:bg-[#251b44] rounded-lg border border-[#2d224b] text-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-accent-green" />
            </button>

            {/* Dynamic User Profile Indicator */}
            <button 
              onClick={() => setActiveTab("profile")}
              className="flex items-center gap-2.5 pl-2 pr-3 py-1 bg-[#18112d] hover:bg-[#21173d] border border-[#2d224b] hover:border-accent-purple/50 rounded-xl cursor-pointer text-left transition-all"
            >
              {/* Profile Avatar Box */}
              <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full bg-gradient-to-tr from-accent-purple to-accent-green font-bold text-white text-xs sm:text-sm flex items-center justify-center shadow-glow-purple flex-shrink-0">
                {user.charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:block">
                <span className="block text-xs font-bold text-text-primary leading-none mb-0.5 max-w-[80px] truncate">{user}</span>
                {/* Level Tag & XP bar */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black text-accent-green leading-none">Lvl 7</span>
                  <div className="w-10 bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-accent-green h-full w-[70%]" />
                  </div>
                </div>
              </div>
            </button>

            {/* Logout button */}
            <button 
              onClick={onLogout}
              className="px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-[10px] sm:text-xs font-bold cursor-pointer transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* 2. Live Completions Scrolling Ticker */}
      <div className="w-full bg-[#0a0712] border-b border-[#1b142d] py-2 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 text-xs text-text-secondary whitespace-nowrap">
          <span className="text-accent-green font-extrabold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-ping" />
            Live Completions:
          </span>
          <div className="flex gap-10 animate-ticker w-full overflow-hidden">
            <span className="flex items-center gap-2">👤 Polo <span className="text-accent-green font-bold">$0.41</span> <span className="text-white/10">|</span> <span className="opacity-80">Bitlabs Surveys</span></span>
            <span className="flex items-center gap-2">👤 Looty <span className="text-accent-green font-bold">$0.32</span> <span className="text-white/10">|</span> <span className="opacity-80">Survey-194097</span></span>
            <span className="flex items-center gap-2">👤 SAI01 <span className="text-accent-green font-bold">$0.41</span> <span className="text-white/10">|</span> <span className="opacity-80">Bitlabs Surveys</span></span>
            <span className="flex items-center gap-2">👤 dineswarcabl <span className="text-accent-green font-bold">$0.006</span> <span className="text-white/10">|</span> <span className="opacity-80">cpx_survey</span></span>
            <span className="flex items-center gap-2">👤 Kingsmaker <span className="text-accent-green font-bold">$0.41</span> <span className="text-white/10">|</span> <span className="opacity-80">Bitlabs Surveys</span></span>
            <span className="flex items-center gap-2">👤 Eisa123 <span className="text-accent-green font-bold">$0.61</span> <span className="text-white/10">|</span> <span className="opacity-80">Bitlabs Surveys</span></span>
            <span className="flex items-center gap-2">👤 ndmlove143 <span className="text-accent-green font-bold">$0.31</span> <span className="text-white/10">|</span> <span className="opacity-80">Primesurvey</span></span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        
        {/* Toast Toast Container */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#120e21] border border-accent-green rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-fade-in">
            <span className="text-accent-green text-lg font-bold">✓</span>
            <span className="text-sm font-semibold text-text-primary">{toast}</span>
          </div>
        )}

        {/* SCREEN 1: EARN VIEW */}
        {activeTab === "earn" && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Greeting Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#120a28] via-[#1d123d] to-[#120a28] border border-[#2f1f54] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
              <div className="space-y-4 text-center md:text-left z-10">
                <h2 className="text-2xl sm:text-3.5xl font-black font-display text-text-primary leading-tight">
                  Welcome back, {user}! 👋
                </h2>
                <p className="text-sm sm:text-base text-text-secondary max-w-md">
                  Complete offers, earn coins, and withdraw real cash rewards instantly. Maximize your earnings with daily multipliers!
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={() => handleScrollToSection("offers-section")}
                    className="px-6 py-3 bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90 text-white font-bold rounded-xl text-sm shadow-glow-purple cursor-pointer transition-all transform hover:-translate-y-0.5"
                  >
                    Explore Offers
                  </button>
                  <button 
                    onClick={() => triggerToast("How it works: Earn coins by doing tasks, then withdraw at Cashout tab!")}
                    className="px-6 py-3 bg-[#1c1435] hover:bg-[#2a1e50] border border-[#3e2b77] text-text-primary font-bold rounded-xl text-sm cursor-pointer transition-all"
                  >
                    How it works
                  </button>
                </div>
              </div>

              {/* Character Wallet Graphic representation */}
              <div className="relative z-10 w-44 h-44 flex items-center justify-center flex-shrink-0 animate-float-slow">
                <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-2xl pointer-events-none" />
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#1b1532] to-[#2e2354] border border-[#483780] shadow-2xl flex items-center justify-center relative">
                  {/* Coins floating inside */}
                  <Coins className="w-16 h-16 text-accent-green animate-pulse" />
                  <div className="absolute -top-3 -right-2 bg-accent-green text-white text-[10px] font-black px-2 py-0.5 rounded-full border border-[#0d0918]">
                    +$100
                  </div>
                  <div className="absolute -bottom-2 -left-3 bg-accent-purple text-white text-[10px] font-black px-2 py-0.5 rounded-full border border-[#0d0918]">
                    21+ New
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1: Available Balance */}
              <div className="bg-[#120e21] border border-[#271b47] hover:border-accent-purple/50 rounded-2xl p-5 flex flex-col justify-between gap-5 transition-all shadow-md group">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Available Balance</span>
                    <span className="text-2.5xl font-black font-display text-text-primary mt-1.5 block">
                      ${balance.toFixed(2)} <span className="text-xs text-text-secondary font-semibold">USD</span>
                    </span>
                    <span className="text-xs text-accent-green font-bold block mt-1">Min. withdrawal: $1.00</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab("cashout")}
                  className="w-full py-2 bg-[#1b1532] hover:bg-accent-purple group-hover:bg-accent-purple group-hover:text-white border border-[#2d214d] text-text-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Withdraw</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card 2: Coins Balance */}
              <div className="bg-[#120e21] border border-[#271b47] hover:border-accent-green/50 rounded-2xl p-5 flex flex-col justify-between gap-5 transition-all shadow-md group">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Coins Balance</span>
                    <span className="text-2.5xl font-black font-display text-accent-green mt-1.5 block flex items-center gap-1.5">
                      {(balance * 100).toLocaleString()} <span className="text-xs text-text-secondary font-semibold">Coins</span>
                    </span>
                    <span className="text-xs text-text-secondary font-semibold block mt-1">100 Coins = $1.00</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green">
                    <Coins className="w-5 h-5" />
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab("profile")}
                  className="w-full py-2 bg-[#1b1532] hover:bg-accent-green group-hover:bg-accent-green group-hover:text-white border border-[#2d214d] text-text-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>View History</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card 3: Pending Balance */}
              <div className="bg-[#120e21] border border-[#271b47] hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between gap-5 transition-all shadow-md group">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Pending Balance</span>
                    <span className="text-2.5xl font-black font-display text-amber-500 mt-1.5 block">
                      ${pendingBalance.toFixed(2)} <span className="text-xs text-text-secondary font-semibold">USD</span>
                    </span>
                    <span className="text-xs text-text-secondary font-semibold block mt-1">In 3 Offers Pending</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
                <button 
                  onClick={() => triggerToast("Your pending offers are: AdGate Offer ($3.50), Wannads ($1.00), CPX ($4.00)")}
                  className="w-full py-2 bg-[#1b1532] hover:bg-amber-500 group-hover:bg-amber-500 group-hover:text-white border border-[#2d214d] text-text-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card 4: Total Earned */}
              <div className="bg-[#120e21] border border-[#271b47] hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between gap-5 transition-all shadow-md group">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Total Earned</span>
                    <span className="text-2.5xl font-black font-display text-cyan-400 mt-1.5 block">
                      ${totalEarned.toFixed(2)} <span className="text-xs text-text-secondary font-semibold">USD</span>
                    </span>
                    <span className="text-xs text-text-secondary font-semibold block mt-1">All time platform earnings</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab("profile")}
                  className="w-full py-2 bg-[#1b1532] hover:bg-cyan-500 group-hover:bg-cyan-500 group-hover:text-white border border-[#2d214d] text-text-primary text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>View Stats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Section 1: Offers (with Platform Tag Filters) */}
            <div id="offers-section" className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-accent-purple text-lg">🔥</span>
                  <h3 className="text-xl font-extrabold font-display text-text-primary">Offers</h3>
                </div>
                {/* Platform tag list filters */}
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setDeviceFilter("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      deviceFilter === "all" ? "bg-accent-purple text-white shadow-glow-purple" : "bg-[#120e21] border border-[#271b47] text-text-secondary hover:text-white"
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setDeviceFilter("android")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      deviceFilter === "android" ? "bg-accent-purple text-white shadow-glow-purple" : "bg-[#120e21] border border-[#271b47] text-text-secondary hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android</span>
                  </button>
                  <button 
                    onClick={() => setDeviceFilter("ios")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      deviceFilter === "ios" ? "bg-accent-purple text-white shadow-glow-purple" : "bg-[#120e21] border border-[#271b47] text-text-secondary hover:text-white"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>iOS</span>
                  </button>
                  <button 
                    onClick={() => setDeviceFilter("desktop")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      deviceFilter === "desktop" ? "bg-accent-purple text-white shadow-glow-purple" : "bg-[#120e21] border border-[#271b47] text-text-secondary hover:text-white"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                </div>
              </div>

              {/* Offers Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {OFFERS_DATA.filter(off => deviceFilter === "all" || off.platform === "all" || off.platform === deviceFilter).map((off) => (
                  <div 
                    key={off.id}
                    onClick={() => startSimulation("offer", off)}
                    className="group bg-[#120e21] border border-[#231742] hover:border-accent-purple/50 hover:shadow-glow-purple rounded-2xl p-4 flex flex-col justify-between gap-4 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <div className="space-y-3">
                      {/* Logo representations mock */}
                      <div className={`w-full h-20 rounded-xl ${off.logoColor} flex items-center justify-center font-black text-lg overflow-hidden tracking-wider shadow-inner select-none relative group-hover:scale-98 transition-all`}>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{off.logoText}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-primary leading-snug group-hover:text-accent-purple transition-colors truncate">{off.name}</h4>
                        <span className="text-[10px] text-text-secondary">{off.partner} Offerwall</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-xs">
                      <span className="font-extrabold text-accent-green">${off.reward.toFixed(2)}</span>
                      <span className="text-[9px] font-bold text-text-secondary bg-[#1a1332] px-2 py-0.5 rounded-md border border-[#2d2153] capitalize">
                        {off.platform === "all" ? "multi" : off.platform}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Games */}
            <div id="games-section" className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-accent-purple text-lg">🎮</span>
                  <h3 className="text-xl font-extrabold font-display text-text-primary">Games</h3>
                </div>
                <button onClick={() => triggerToast("Browse all game rewards on offerwalls!")} className="text-xs font-bold text-accent-purple hover:underline cursor-pointer bg-transparent border-none">View All</button>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {GAMES_DATA.map((game) => (
                  <div 
                    key={game.id}
                    onClick={() => startSimulation("game", game)}
                    className="group bg-[#120e21] border border-[#231742] hover:border-accent-purple/50 hover:shadow-glow-purple rounded-2xl p-4 flex flex-col justify-between gap-4 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <div className="space-y-3">
                      {/* Image representation mock */}
                      <div className="w-full h-24 rounded-xl overflow-hidden relative shadow-md">
                        <img src={game.imageUrl} alt={game.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute bottom-2 left-2 bg-[#09070f]/80 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/5">
                          Play-to-Earn
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-primary leading-snug group-hover:text-accent-purple transition-colors truncate">{game.name}</h4>
                        <span className="text-[10px] text-text-secondary">Milestone payout</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-black">
                      <span className="text-accent-green">${game.reward.toFixed(2)}</span>
                      <span className="text-[10px] text-accent-purple flex items-center gap-1 font-semibold">
                        <span>🎮</span> Play
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Surveys */}
            <div id="surveys-section" className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-accent-purple text-lg">📋</span>
                  <h3 className="text-xl font-extrabold font-display text-text-primary">Surveys</h3>
                </div>
                <button onClick={() => triggerToast("Complete research surveys dynamically!")} className="text-xs font-bold text-accent-purple hover:underline cursor-pointer bg-transparent border-none">View All</button>
              </div>

              {/* Surveys Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {SURVEYS_DATA.map((srv) => (
                  <div 
                    key={srv.id}
                    onClick={() => startSimulation("survey", srv)}
                    className="group bg-[#120e21] border border-[#231742] hover:border-accent-purple/50 hover:shadow-glow-purple rounded-2xl p-4 flex flex-col justify-between gap-4 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple group-hover:scale-105 transition-transform">
                        <FileText className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-text-primary leading-tight group-hover:text-accent-purple transition-colors truncate w-full max-w-[100px]">{srv.name}</h4>
                        <span className="text-[9px] text-text-secondary block mt-1">{srv.duration}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <div className="text-accent-green text-sm font-black">${srv.reward.toFixed(2)}</div>
                      <div className="text-[9px] text-yellow-500 font-bold flex items-center justify-center gap-0.5">
                        ⭐ {srv.rating.toFixed(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Highlights Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/5 text-center">
              <div className="p-4 rounded-2xl bg-[#120e21]/40 border border-[#1b1433] flex flex-col items-center gap-1.5">
                <span className="text-accent-green text-xl font-bold">⚡</span>
                <h4 className="text-xs font-bold text-text-primary">Fast Payouts</h4>
                <p className="text-[10px] text-text-secondary">Instant withdrawal payouts</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#120e21]/40 border border-[#1b1433] flex flex-col items-center gap-1.5">
                <span className="text-accent-purple text-xl font-bold">🔒</span>
                <h4 className="text-xs font-bold text-text-primary">Secure & Safe</h4>
                <p className="text-[10px] text-text-secondary">Your details are protected</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#120e21]/40 border border-[#1b1433] flex flex-col items-center gap-1.5">
                <span className="text-cyan-400 text-xl font-bold">📞</span>
                <h4 className="text-xs font-bold text-text-primary">24/7 Support</h4>
                <p className="text-[10px] text-text-secondary">We are here to help anytime</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#120e21]/40 border border-[#1b1433] flex flex-col items-center gap-1.5">
                <span className="text-pink-500 text-xl font-bold">👥</span>
                <h4 className="text-xs font-bold text-text-primary">100K+ Users</h4>
                <p className="text-[10px] text-text-secondary">Trusted by global earners</p>
              </div>
            </div>

          </div>
        )}

        {/* SCREEN 2: CASHOUT VIEW */}
        {activeTab === "cashout" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-text-primary">
                Cashout
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-xl">
                Withdraw your BinnyCash earnings quickly via cash, crypto, or local digital gift cards. Processing is fast and secure.
              </p>
            </div>

            {/* Three Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Card 1: Available balance */}
              <div className="bg-[#120e21] border border-[#271b47] rounded-2xl p-5 flex items-center justify-between shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Available balance</span>
                  <div className="text-2.5xl font-black font-display text-text-primary">${balance.toFixed(2)}</div>
                  <span className="text-[10px] text-text-secondary block">Minimum withdrawal: $1.00</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <Wallet className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Pending process */}
              <div className="bg-[#120e21] border border-[#271b47] rounded-2xl p-5 flex items-center justify-between shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Pending process</span>
                  <div className="text-2.5xl font-black font-display text-amber-500">${pendingBalance.toFixed(2)}</div>
                  <span className="text-[10px] text-text-secondary block">Awaiting task confirmation</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              {/* Card 3: Verify now */}
              <div className="bg-[#120e21] border border-[#271b47] rounded-2xl p-5 flex items-center justify-between shadow-md">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Verify now</span>
                  <div className="flex items-center gap-1.5">
                    {kycVerified ? (
                      <span className="text-accent-green font-bold text-sm flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-accent-green" /> Verified
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold text-sm">KYC required</span>
                    )}
                  </div>
                  <span className="text-[10px] text-text-secondary block">Identity verification status</span>
                </div>
                {!kycVerified ? (
                  <button 
                    onClick={() => setKycModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90 text-white text-xs font-bold rounded-xl shadow-glow-purple cursor-pointer transition-all"
                  >
                    Submit Document
                  </button>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                )}
              </div>
            </div>

            {/* Sub Tabs: Cash & Crypto & My Withdrawals */}
            <div className="space-y-6">
              <div className="flex gap-6 border-b border-[#241a3a]">
                <button
                  className="px-4 py-2 text-sm font-bold border-b-2 border-accent-purple text-text-primary bg-transparent cursor-pointer"
                >
                  Cash & Crypto
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className="px-4 py-2 text-sm font-bold text-text-secondary hover:text-text-primary bg-transparent cursor-pointer border-b-2 border-transparent transition-colors"
                >
                  My Withdrawals
                </button>
              </div>

              {/* Cash & Crypto Methods list representation */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Method 1: UPI */}
                  <div 
                    onClick={() => setSelectedGateway(selectedGateway === "upi" ? null : "upi")}
                    className={`p-5 rounded-2xl bg-[#120e21] border hover:border-accent-purple transition-all duration-300 text-center flex flex-col items-center gap-2.5 cursor-pointer relative overflow-hidden ${
                      selectedGateway === "upi" ? "border-accent-purple shadow-glow-purple" : "border-[#271b47]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-green-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
                      UPI
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-text-primary">UPI</h4>
                      <span className="text-[9px] text-accent-green block mt-0.5 font-semibold">Instant payout</span>
                    </div>
                  </div>

                  {/* Method 2: PhonePe */}
                  <div 
                    onClick={() => setSelectedGateway(selectedGateway === "phonepe" ? null : "phonepe")}
                    className={`p-5 rounded-2xl bg-[#120e21] border hover:border-accent-purple transition-all duration-300 text-center flex flex-col items-center gap-2.5 cursor-pointer relative overflow-hidden ${
                      selectedGateway === "phonepe" ? "border-accent-purple shadow-glow-purple" : "border-[#271b47]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-md">
                      P
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-text-primary">PhonePe</h4>
                      <span className="text-[9px] text-accent-green block mt-0.5 font-semibold">Instant payout</span>
                    </div>
                  </div>

                  {/* Method 3: Bank */}
                  <div 
                    onClick={() => setSelectedGateway(selectedGateway === "bank" ? null : "bank")}
                    className={`p-5 rounded-2xl bg-[#120e21] border hover:border-accent-purple transition-all duration-300 text-center flex flex-col items-center gap-2.5 cursor-pointer relative overflow-hidden ${
                      selectedGateway === "bank" ? "border-accent-purple shadow-glow-purple" : "border-[#271b47]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center font-bold text-white text-lg shadow-md">
                      🏦
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-text-primary">Bank Transfer</h4>
                      <span className="text-[9px] text-amber-500 block mt-0.5 font-semibold">In 24 hours</span>
                    </div>
                  </div>

                  {/* Method 4: Paytm */}
                  <div 
                    onClick={() => setSelectedGateway(selectedGateway === "paytm" ? null : "paytm")}
                    className={`p-5 rounded-2xl bg-[#120e21] border hover:border-accent-purple transition-all duration-300 text-center flex flex-col items-center gap-2.5 cursor-pointer relative overflow-hidden ${
                      selectedGateway === "paytm" ? "border-accent-purple shadow-glow-purple" : "border-[#271b47]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-black text-white text-[10px] shadow-md">
                      paytm
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-text-primary">Paytm</h4>
                      <span className="text-[9px] text-accent-green block mt-0.5 font-semibold">Instant payout</span>
                    </div>
                  </div>
                </div>

                {/* Gateway Inputs Expansion Form Panel */}
                {selectedGateway && (
                  <form onSubmit={handleWithdrawalSubmit} className="p-6 bg-[#150f29]/80 border border-[#3e2c6f] rounded-2xl space-y-4 animate-scale-in max-w-md">
                    <div className="flex justify-between items-center border-b border-[#2d2151] pb-3">
                      <h4 className="text-sm font-bold text-text-primary capitalize flex items-center gap-1.5">
                        <span>Withdraw via</span>
                        <span className="text-accent-green font-extrabold uppercase">{selectedGateway}</span>
                      </h4>
                      <button 
                        type="button" 
                        onClick={() => setSelectedGateway(null)}
                        className="text-text-secondary hover:text-white cursor-pointer bg-transparent border-none text-sm"
                      >
                        ✕
                      </button>
                    </div>

                    {withdrawalError && (
                      <div className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                        ⚠️ {withdrawalError}
                      </div>
                    )}

                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1.5">
                          {selectedGateway === "bank" ? "Bank Account details (IBAN / Account Number)" : `${selectedGateway.toUpperCase()} Address / ID`}
                        </label>
                        <input
                          type="text"
                          required
                          value={withdrawalAddress}
                          onChange={(e) => setWithdrawalAddress(e.target.value)}
                          placeholder={selectedGateway === "bank" ? "Routing & Account details" : `e.g. yourname@${selectedGateway}`}
                          className="w-full px-4 py-2.5 bg-[#09070f]/80 border border-[#302257] focus:border-accent-purple text-text-primary rounded-xl text-xs outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1.5">Withdrawal Amount (USD)</label>
                        <input
                          type="number"
                          step="0.01"
                          required
                          value={withdrawalAmount}
                          onChange={(e) => setWithdrawalAmount(e.target.value)}
                          placeholder="Min $1.00 USD"
                          className="w-full px-4 py-2.5 bg-[#09070f]/80 border border-[#302257] focus:border-accent-purple text-text-primary rounded-xl text-xs outline-none transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90 text-white font-bold rounded-xl text-xs shadow-glow-purple cursor-pointer transition-all"
                      >
                        Confirm Cashout Payout
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Gift Cards Section */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-lg font-bold text-text-primary">Gift cards</h3>
                
                {/* Filters/Search area */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-grow sm:flex-grow-0">
                    <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="Search gift cards..."
                      value={giftCardSearch}
                      onChange={(e) => setGiftCardSearch(e.target.value)}
                      className="w-full sm:w-60 pl-9.5 pr-4 py-2 bg-[#120e21] border border-[#271b47] focus:border-accent-purple text-text-primary rounded-xl text-xs outline-none transition-all"
                    />
                  </div>
                  <button className="px-4 py-2 bg-[#120e21] border border-[#271b47] rounded-xl text-xs font-bold text-text-secondary flex items-center gap-1.5 cursor-pointer">
                    <span>All</span>
                    <span className="text-[10px]">▼</span>
                  </button>
                </div>
              </div>

              {/* Gift Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {PAYOUT_GIFT_CARDS.filter(gc => gc.name.toLowerCase().includes(giftCardSearch.toLowerCase())).map((gc) => (
                  <div 
                    key={gc.id}
                    onClick={() => {
                      if (balance < 5) {
                        triggerToast("Minimum balance for Gift Card is $5.00!");
                        return;
                      }
                      setSelectedGateway(gc.name.toLowerCase() as any);
                      setWithdrawalAmount("5.00");
                      triggerToast(`Selected ${gc.name} Gift Card redemption.`);
                    }}
                    className="group bg-[#120e21] border border-[#271b47] hover:border-accent-purple/50 rounded-2xl p-4 flex flex-col justify-between items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${gc.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform`}>
                      {gc.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary leading-tight group-hover:text-accent-purple transition-colors">{gc.name}</h4>
                      <span className="text-[9px] text-text-muted mt-1 block">Min. $5.00</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SCREEN 3: PROFILE VIEW */}
        {activeTab === "profile" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2.5xl sm:text-3.5xl font-black font-display text-text-primary">
                My Profile
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Manage your account levels, identity details, and view your complete platform transaction logs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Profile Panel Card */}
              <div className="lg:col-span-4 bg-[#120e21] border border-[#271b47] rounded-3xl p-6 shadow-md flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => triggerToast("Settings panel: Password & credentials update")}
                    className="px-3 py-1.5 bg-[#1b1532] hover:bg-[#271f49] border border-[#2d2153] text-[10px] font-black text-accent-purple rounded-xl cursor-pointer transition-colors"
                  >
                    ⚙️ Settings
                  </button>
                </div>

                {/* Profile info block */}
                <div className="flex items-center gap-4 border-b border-[#241a3a] pb-5">
                  {/* Large avatar */}
                  <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-accent-purple to-indigo-600 font-extrabold text-white text-2xl flex items-center justify-center shadow-glow-purple flex-shrink-0">
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-text-primary">{user}</h3>
                    <span className="text-[10px] text-text-secondary mt-1 block flex items-center gap-1.5">
                      🇮🇳 India <span className="text-white/20">|</span> ID: 1152
                    </span>
                    <span className="text-[9px] text-text-muted mt-0.5 block">Joined: June 26, 2026</span>
                  </div>
                </div>

                {/* Account levels verification progress */}
                <div className="space-y-3 border-b border-[#241a3a] pb-5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-text-secondary font-semibold">Account level</span>
                    <span className="text-accent-green font-bold flex items-center gap-1">
                      🛡️ Bronze
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-accent-purple to-accent-green h-full rounded-full transition-all duration-500" 
                        style={{ width: `${(balance / 50) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-text-secondary">
                      <span>Bronze (${balance.toFixed(2)})</span>
                      <span>Silver ($50.00)</span>
                    </div>
                  </div>
                  
                  <span className="text-[10px] text-text-secondary block italic">
                    Earn ${Math.max(0, 50 - balance).toFixed(2)} more to reach Silver level.
                  </span>
                </div>

                {/* Document Status */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Document Status</span>
                  
                  <div className="p-4 rounded-2xl bg-[#09070f]/60 border border-[#241a3a] flex items-center justify-between">
                    <div>
                      {kycVerified ? (
                        <>
                          <h4 className="text-xs font-bold text-accent-green flex items-center gap-1">Verified</h4>
                          <p className="text-[9px] text-text-secondary mt-0.5">KYC Check Complete</p>
                        </>
                      ) : (
                        <>
                          <h4 className="text-xs font-bold text-red-400">Unverified</h4>
                          <p className="text-[9px] text-text-secondary mt-0.5">Click to verify credentials</p>
                        </>
                      )}
                    </div>
                    
                    {!kycVerified ? (
                      <button 
                        onClick={() => setKycModalOpen(true)}
                        className="text-[10px] font-black text-accent-purple hover:underline bg-transparent border-none cursor-pointer"
                      >
                        Click to verify
                      </button>
                    ) : (
                      <span className="text-accent-green">✓</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Profile Stats & History Table */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Stats overview row grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#120e21] border border-[#271b47] p-4.5 rounded-2xl text-center shadow-md">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Total earnings</span>
                    <span className="text-xl font-black text-text-primary mt-1.5 block">${totalEarned.toFixed(2)}</span>
                  </div>

                  <div className="bg-[#120e21] border border-[#271b47] p-4.5 rounded-2xl text-center shadow-md">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Completed offers</span>
                    <span className="text-xl font-black text-text-primary mt-1.5 block">{history.length}</span>
                  </div>

                  <div className="bg-[#120e21] border border-[#271b47] p-4.5 rounded-2xl text-center shadow-md">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Users referred</span>
                    <span className="text-xl font-black text-text-primary mt-1.5 block flex items-center justify-center gap-1">
                      {referralsCount}
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(`https://binnycash.com/register?ref=${user}`);
                          setReferralsCount(prev => prev + 1);
                          triggerToast("Referral Link copied! Generated +1 mock referral.");
                        }}
                        className="p-1 hover:bg-[#1b1532] text-accent-purple rounded-md cursor-pointer text-xs"
                        title="Copy Referral Link"
                      >
                        🔗
                      </button>
                    </span>
                  </div>

                  <div className="bg-[#120e21] border border-[#271b47] p-4.5 rounded-2xl text-center shadow-md">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">Earnings 30 days</span>
                    <span className="text-xl font-black text-text-primary mt-1.5 block">${balance.toFixed(2)}</span>
                  </div>
                </div>

                {/* Sub Tab Logs (Earning vs Reversal) */}
                <div className="space-y-4">
                  <div className="flex gap-6 border-b border-[#241a3a] text-sm">
                    <button className="px-3 py-1.5 font-bold border-b-2 border-accent-purple text-text-primary bg-transparent cursor-pointer">Earning</button>
                    <button onClick={() => triggerToast("No reversals logs exist on your profile!")} className="px-3 py-1.5 font-bold text-text-secondary hover:text-text-primary bg-transparent border-b-2 border-transparent transition-colors cursor-pointer">Reversal</button>
                  </div>

                  {/* Filter buttons Offers, Surveys, Rewards */}
                  <div className="flex gap-2.5">
                    <button 
                      onClick={() => setProfileHistoryTab("Offers")}
                      className={`px-3 py-1 bg-[#120e21] border text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                        profileHistoryTab === "Offers" ? "border-accent-purple text-accent-purple bg-[#1a1435]" : "border-[#271b47] text-text-secondary"
                      }`}
                    >
                      Offers & Games
                    </button>
                    <button 
                      onClick={() => setProfileHistoryTab("Surveys")}
                      className={`px-3 py-1 bg-[#120e21] border text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                        profileHistoryTab === "Surveys" ? "border-accent-purple text-accent-purple bg-[#1a1435]" : "border-[#271b47] text-text-secondary"
                      }`}
                    >
                      Surveys
                    </button>
                    <button 
                      onClick={() => setProfileHistoryTab("Rewards")}
                      className={`px-3 py-1 bg-[#120e21] border text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                        profileHistoryTab === "Rewards" ? "border-accent-purple text-accent-purple bg-[#1a1435]" : "border-[#271b47] text-text-secondary"
                      }`}
                    >
                      Rewards
                    </button>
                  </div>

                  {/* Log Table content */}
                  <div className="bg-[#120e21]/40 border border-[#271b47] rounded-2xl overflow-hidden shadow-inner">
                    <div className="overflow-x-auto w-full">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#120e21]/95 text-text-secondary border-b border-[#241a3a] font-bold">
                            <th className="p-4">Offer Name</th>
                            <th className="p-4">Reward</th>
                            <th className="p-4">Reward Status</th>
                            <th className="p-4">Offer Partner</th>
                            <th className="p-4">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1433] leading-relaxed">
                          {history
                            .filter(log => {
                              if (profileHistoryTab === "Offers") return log.partner !== "Market Research" && log.partner !== "Redemption Gate";
                              if (profileHistoryTab === "Surveys") return log.partner === "Market Research" || log.partner === "CPX Research";
                              return log.partner === "Redemption Gate"; // Rewards / Withdrawals
                            })
                            .map((log) => (
                              <tr key={log.id} className="hover:bg-[#18122b]/40 transition-colors">
                                <td className="p-4 font-bold text-text-primary">{log.name}</td>
                                <td className={`p-4 font-extrabold ${log.reward > 0 ? "text-accent-green" : "text-red-400"}`}>
                                  {log.reward > 0 ? `+$${log.reward.toFixed(2)}` : `-$${Math.abs(log.reward).toFixed(2)}`}
                                </td>
                                <td className="p-4">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                                    log.reward > 0 ? "bg-accent-green/10 text-accent-green border border-accent-green/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                                  }`}>
                                    {log.reward > 0 ? "Credited" : "Paid"}
                                  </span>
                                </td>
                                <td className="p-4 text-text-secondary">{log.partner}</td>
                                <td className="p-4 text-text-muted">{log.date}</td>
                              </tr>
                          ))}
                          {history.filter(log => {
                            if (profileHistoryTab === "Offers") return log.partner !== "Market Research" && log.partner !== "Redemption Gate";
                            if (profileHistoryTab === "Surveys") return log.partner === "Market Research" || log.partner === "CPX Research";
                            return log.partner === "Redemption Gate";
                          }).length === 0 && (
                            <tr>
                              <td colSpan={5} className="p-8 text-center text-text-secondary">
                                No logs found in this category. Complete tasks to add transactions here!
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* KYC Upload Simulation Modal */}
      {kycModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0c0915] border border-[#2a1e4c] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-scale-in">
            <button 
              onClick={() => setKycModalOpen(false)}
              className="absolute top-5 right-5 text-text-secondary hover:text-white transition-colors cursor-pointer text-base bg-transparent border-none"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <h3 className="text-xl font-extrabold font-display text-text-primary">Verify Identity (KYC)</h3>
              <p className="text-xs text-text-secondary mt-1">Upload files to unlock higher withdrawal limits</p>
            </div>

            <form onSubmit={handleKycSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-text-secondary uppercase mb-1.5">Document Type</label>
                <select 
                  value={kycDocumentType} 
                  onChange={(e) => setKycDocumentType(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#09070f] border border-[#2d214f] text-text-primary rounded-xl text-xs outline-none cursor-pointer"
                >
                  <option>National ID / Aadhaar Card</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                </select>
              </div>

              {/* Drag & Drop Simulation */}
              <div className="border-2 border-dashed border-[#2d214f] hover:border-accent-purple/50 rounded-2xl p-6 text-center transition-all bg-[#09070f]/50 cursor-pointer">
                <FileUp className="w-8 h-8 text-accent-purple mx-auto mb-2 animate-bounce-slow" />
                <span className="text-xs text-text-primary block font-bold">Select File or Drag Here</span>
                <span className="text-[10px] text-text-secondary block mt-1">Supports PNG, JPG, PDF (Max 5MB)</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setKycModalOpen(false)}
                  className="flex-1 py-2.5 bg-[#1b1532] border border-[#2d2153] hover:bg-[#241d44] text-text-primary font-bold rounded-xl text-xs cursor-pointer transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadingKyc}
                  className="flex-1 py-2.5 bg-gradient-to-r from-accent-purple to-indigo-600 hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-glow-purple cursor-pointer transition-all"
                >
                  {uploadingKyc ? "Uploading..." : "Upload & Approve"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Task Simulator Modal */}
      {activeSimulation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0c0915] border border-[#2a1e4c] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-scale-in text-center">
            
            <button 
              onClick={() => setActiveSimulation(null)}
              className="absolute top-5 right-5 text-text-secondary hover:text-white transition-colors cursor-pointer text-base bg-transparent border-none"
            >
              ✕
            </button>

            {simulatingStep === "intro" && (
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mx-auto text-2.5xl">
                  {activeSimulation.type === "offer" ? "🔥" : activeSimulation.type === "game" ? "🎮" : "📋"}
                </div>
                <div>
                  <h3 className="text-lg font-black text-text-primary">{activeSimulation.item.name}</h3>
                  <p className="text-xs text-text-secondary mt-1">Completing this task awards rewards to your balance.</p>
                </div>

                <div className="p-4 bg-[#09070f]/70 border border-[#241a3a] rounded-2xl text-left space-y-2">
                  <h4 className="text-[10px] font-bold text-text-secondary uppercase">Instructions:</h4>
                  <ul className="text-xs text-text-primary space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Launch the task by clicking the button below.</li>
                    <li>Spend at least 3 seconds browsing details on the mock frame.</li>
                    <li>Claim and receive your reward automatically!</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveSimulation(null)}
                    className="flex-1 py-2.5 bg-[#1b1532] border border-[#2d2153] hover:bg-[#241d44] text-text-primary font-bold rounded-xl text-xs cursor-pointer transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={executeSimulation}
                    className="flex-1 py-2.5 bg-gradient-to-r from-accent-purple to-accent-green hover:opacity-90 text-white font-bold rounded-xl text-xs shadow-glow-purple cursor-pointer transition-all"
                  >
                    Start Task (+${activeSimulation.item.reward.toFixed(2)})
                  </button>
                </div>
              </div>
            )}

            {simulatingStep === "loader" && (
              <div className="py-8 space-y-4">
                <div className="w-12 h-12 border-4 border-accent-purple border-t-transparent rounded-full animate-spin mx-auto" />
                <div>
                  <h3 className="text-base font-bold text-text-primary">Simulating task completion...</h3>
                  <p className="text-xs text-text-secondary mt-1">Our server is validating your mock credentials...</p>
                </div>
              </div>
            )}

            {simulatingStep === "success" && (
              <div className="space-y-5 py-4">
                <div className="w-12 h-12 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green mx-auto text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-black text-text-primary">Reward Claimed!</h3>
                  <p className="text-xs text-text-secondary mt-1">
                    Added <span className="text-accent-green font-bold">+${activeSimulation.item.reward.toFixed(2)}</span> USD to your Available Balance.
                  </p>
                </div>
                <button
                  onClick={() => setActiveSimulation(null)}
                  className="w-full py-2.5 bg-[#1b1532] hover:bg-[#241d44] text-text-primary font-bold rounded-xl text-xs cursor-pointer transition-all"
                >
                  Awesome, Thanks!
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
