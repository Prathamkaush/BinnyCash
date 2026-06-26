"use client";

import { useState } from "react";

interface DashboardProps {
  user: string;
}

interface Task {
  id: number;
  name: string;
  category: string;
  desc: string;
  reward: number;
  icon: string;
  completed: boolean;
}

const AstroUserAvatar = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="url(#userGrad)" stroke="#10b981" strokeWidth="2" />
    <defs>
      <radialGradient id="userGrad" cx="50%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#111827" />
        <stop offset="100%" stopColor="#030712" />
      </radialGradient>
    </defs>
    
    {/* Space Bunny Ears */}
    <path d="M22 26 C18 8 24 4 27 16 C28 20 27 26 27 26" fill="#f9fafb" stroke="#374151" strokeWidth="1.5" />
    <path d="M22.5 22 C19.5 10 23 8 25 16" fill="#10b981" />
    <path d="M42 26 C46 8 40 4 37 16 C36 20 37 26 37 26" fill="#f9fafb" stroke="#374151" strokeWidth="1.5" />
    <path d="M41.5 22 C44.5 10 41 8 39 16" fill="#10b981" />
    
    {/* Suit / Body */}
    <path d="M16 54 C16 44 22 40 32 40 C42 40 48 44 48 54" fill="#1f2937" stroke="#10b981" strokeWidth="1.5" />
    <path d="M26 40 L38 40 L35 48 L29 48 Z" fill="#10b981" />
    <circle cx="32" cy="45" r="2.5" fill="#fcd34d" />

    {/* Head */}
    <circle cx="32" cy="32" r="13" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
    
    {/* Face Details */}
    <circle cx="28" cy="31" r="1.5" fill="#111827" />
    <circle cx="36" cy="31" r="1.5" fill="#111827" />
    <path d="M31 34 L33 34 L32 35.5 Z" fill="#f472b6" />
    {/* Cheeks */}
    <circle cx="26" cy="34" r="1.5" fill="#f472b6" opacity="0.4" />
    <circle cx="38" cy="34" r="1.5" fill="#f472b6" opacity="0.4" />

    {/* Space Helmet Visor - Glowing gold/green */}
    <ellipse cx="32" cy="32" rx="17" ry="14" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
    <path d="M22 26 A 13 11 0 0 1 42 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export default function Dashboard({ user }: DashboardProps) {
  const [balance, setBalance] = useState(12.5);
  const [activeTab, setActiveTab] = useState<"tasks" | "withdraw" | "refer">("tasks");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Bubble Shooter Mobile", category: "App Testing", desc: "Download and reach level 15 to earn rewards.", reward: 2.4, icon: "🎮", completed: false },
    { id: 2, name: "Tech Consumer Opinion", category: "Surveys", desc: "Share your thoughts on recent smartphone innovations.", reward: 1.1, icon: "📋", completed: false },
    { id: 3, name: "Install & Try VPN App", category: "Offers", desc: "Install the app, open it, and test its features.", reward: 3.5, icon: "🔒", completed: false },
    { id: 4, name: "Join Official Discord Server", category: "Socials", desc: "Connect your Discord and verify your account in our channel.", reward: 0.25, icon: "💬", completed: false },
    { id: 5, name: "Short Brand Feedback", category: "Surveys", desc: "Provide opinions on 5 major shopping websites.", reward: 0.5, icon: "📋", completed: false },
    { id: 6, name: "Merge Mania Puzzle", category: "App Testing", desc: "Download and play for 10 minutes.", reward: 1.8, icon: "🎮", completed: false },
  ]);

  const [loadingTaskId, setLoadingTaskId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [withdrawGateway, setWithdrawGateway] = useState<string | null>(null);
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [copied, setCopied] = useState(false);

  const completeTask = (taskId: number, reward: number) => {
    setLoadingTaskId(taskId);
    setSuccessMessage("");
    
    // Simulate loading/completion
    setTimeout(() => {
      setLoadingTaskId(null);
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, completed: true } : t))
      );
      setBalance((prev) => parseFloat((prev + reward).toFixed(2)));
      
      const taskName = tasks.find((t) => t.id === taskId)?.name;
      setSuccessMessage(`✓ Task "${taskName}" completed! Added $${reward.toFixed(2)} to your balance.`);
    }, 1500);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawError("");
    setWithdrawSuccess("");

    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setWithdrawError("Please enter a valid amount.");
      return;
    }
    if (amount < 2) {
      setWithdrawError("Minimum withdrawal is $2.00.");
      return;
    }
    if (amount > balance) {
      setWithdrawError("Insufficient balance in your wallet.");
      return;
    }
    if (!withdrawAddress) {
      setWithdrawError("Please enter your withdrawal account details.");
      return;
    }

    setBalance((prev) => parseFloat((prev - amount).toFixed(2)));
    setWithdrawSuccess(`✓ Withdrawal of $${amount.toFixed(2)} to your ${withdrawGateway} account has been requested!`);
    setWithdrawAmount("");
    setWithdrawAddress("");
    
    // Reset success message after 5 seconds
    setTimeout(() => setWithdrawSuccess(""), 6000);
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(`https://binnycash.com/register?ref=${user}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Sidebar Widget */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-card-border rounded-3xl p-6 shadow-xl">
            {/* User Profile Widget */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-5 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-green shadow-glow-green bg-[#111827] flex items-center justify-center flex-shrink-0">
                <AstroUserAvatar />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-text-primary">
                  {user}
                </h3>
                <span className="text-xs text-accent-green font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block animate-pulse" />
                  Active Earner
                </span>
              </div>
            </div>

            {/* Wallet Widget */}
            <div className="bg-bg-primary/50 border border-accent-purple/20 rounded-2xl p-5 text-center mb-6">
              <span className="text-[10px] uppercase tracking-wider text-text-secondary">Binny Wallet Balance</span>
              <div className="text-3xl font-extrabold font-display text-accent-green mt-1">
                ${balance.toFixed(2)}
              </div>
            </div>

            {/* Navigation buttons */}
            <nav className="flex flex-col gap-2.5">
              <button
                onClick={() => { setActiveTab("tasks"); setWithdrawGateway(null); }}
                className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center gap-3.5 transition-all text-left bg-transparent cursor-pointer ${
                  activeTab === "tasks"
                    ? "bg-gradient-to-r from-accent-purple to-accent-purple/80 border border-accent-purple text-white shadow-glow-purple"
                    : "text-text-secondary border border-transparent hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                📋 Available Tasks
              </button>
              <button
                onClick={() => setActiveTab("withdraw")}
                className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center gap-3.5 transition-all text-left bg-transparent cursor-pointer ${
                  activeTab === "withdraw"
                    ? "bg-gradient-to-r from-accent-purple to-accent-purple/80 border border-accent-purple text-white shadow-glow-purple"
                    : "text-text-secondary border border-transparent hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                💸 Claim Withdrawal
              </button>
              <button
                onClick={() => { setActiveTab("refer"); setWithdrawGateway(null); }}
                className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center gap-3.5 transition-all text-left bg-transparent cursor-pointer ${
                  activeTab === "refer"
                    ? "bg-gradient-to-r from-accent-purple to-accent-purple/80 border border-accent-purple text-white shadow-glow-purple"
                    : "text-text-secondary border border-transparent hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                👥 Refer & Earn
              </button>
            </nav>
          </div>
        </div>

        {/* Right Side: Tab Contents */}
        <div className="lg:col-span-8">
          {successMessage && (
            <div className="bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm p-4 rounded-2xl mb-6 font-semibold shadow-glow-green text-center">
              {successMessage}
            </div>
          )}

          {/* TAB 1: Tasks */}
          {activeTab === "tasks" && (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display text-text-primary">
                    Available Tasks
                  </h2>
                  <p className="text-sm text-text-secondary mt-1">Complete offers to earn real cash rewards instantly.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="relative bg-card-bg border border-card-border hover:border-accent-purple hover:shadow-glow-purple rounded-2xl p-6 flex flex-col justify-between gap-6 transition-all duration-300"
                  >
                    {/* Category badge */}
                    <span className="absolute top-4 right-4 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-bold text-[10px] px-2.5 py-1 rounded-full">
                      {task.category}
                    </span>

                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-xl flex items-center justify-center flex-shrink-0">
                        {task.icon}
                      </div>
                      <div className="mt-1">
                        <h4 className="text-base font-bold font-display text-text-primary leading-tight">
                          {task.name}
                        </h4>
                        <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                          {task.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-base font-extrabold text-accent-green">+${task.reward.toFixed(2)}</span>
                      {task.completed ? (
                        <span className="text-xs text-text-muted font-bold flex items-center gap-1.5">
                          ✓ Completed
                        </span>
                      ) : (
                        <button
                          onClick={() => completeTask(task.id, task.reward)}
                          disabled={loadingTaskId !== null}
                          className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-green text-white text-xs font-bold rounded-xl shadow-glow-purple disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          {loadingTaskId === task.id ? (
                            <>
                              <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Completing...
                            </>
                          ) : (
                            "Complete Task ➔"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Withdrawals */}
          {activeTab === "withdraw" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-text-primary mb-1">
                Redeem Cash Rewards
              </h2>
              <p className="text-sm text-text-secondary mb-6">Select a secure gateway below to withdraw your earnings.</p>

              {withdrawSuccess && (
                <div className="bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm p-4 rounded-xl mb-6 font-semibold text-center">
                  {withdrawSuccess}
                </div>
              )}

              {!withdrawGateway ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "PayPal", desc: "Min: $5.00 • 1-12 hrs", icon: "💳" },
                    { name: "Bitcoin", desc: "Min: $5.00 • Instant", icon: "🪙" },
                    { name: "Litecoin", desc: "Min: $2.00 • Instant", icon: "🪙" },
                    { name: "Google Play", desc: "Min: $5.00 • 1-6 hrs", icon: "🎮" },
                  ].map((gateway) => (
                    <button
                      key={gateway.name}
                      onClick={() => setWithdrawGateway(gateway.name)}
                      className="bg-card-bg border border-card-border hover:border-accent-green hover:shadow-glow-green p-6 rounded-2xl text-center flex flex-col items-center gap-3 transition-all duration-300 bg-transparent cursor-pointer"
                    >
                      <div className="text-3xl">{gateway.icon}</div>
                      <div>
                        <h4 className="text-base font-bold font-display text-text-primary">{gateway.name}</h4>
                        <p className="text-[10px] text-text-secondary mt-1">{gateway.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="bg-card-bg border border-card-border rounded-3xl p-8 max-w-lg shadow-xl relative">
                  <button
                    onClick={() => { setWithdrawGateway(null); setWithdrawError(""); }}
                    className="absolute top-4 right-4 text-xs font-semibold text-text-secondary hover:text-text-primary bg-transparent border-none cursor-pointer"
                  >
                    ← Back
                  </button>

                  <h3 className="text-xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
                    Withdrawal via <span className="text-accent-green">{withdrawGateway}</span>
                  </h3>

                  {withdrawError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg mb-4 text-center">
                      {withdrawError}
                    </div>
                  )}

                  <form onSubmit={handleWithdrawSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-primary">
                        {withdrawGateway === "PayPal" ? "PayPal Email Address" : withdrawGateway.includes("Play") ? "Email Address" : `${withdrawGateway} Wallet Address`}
                      </label>
                      <input
                        type="text"
                        placeholder={withdrawGateway === "PayPal" ? "your-paypal@example.com" : withdrawGateway.includes("Play") ? "email@example.com" : `Enter your ${withdrawGateway} wallet address`}
                        value={withdrawAddress}
                        onChange={(e) => setWithdrawAddress(e.target.value)}
                        className="bg-input-bg border border-input-border rounded-xl py-3 px-4 text-sm text-text-primary focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-text-primary">Withdrawal Amount ($ USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Enter cashout amount"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="bg-input-bg border border-input-border rounded-xl py-3 px-4 text-sm text-text-primary focus:border-accent-green focus:shadow-glow-green focus:bg-bg-primary transition-all duration-200 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-gradient-to-r from-accent-purple to-accent-green hover:from-accent-green hover:to-accent-purple text-white font-bold rounded-xl shadow-glow-purple hover:shadow-glow-green transition-all"
                    >
                      Submit Cashout Claim
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Referrals */}
          {activeTab === "refer" && (
            <div className="bg-card-bg border border-card-border rounded-3xl p-10 text-center shadow-xl flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple flex items-center justify-center text-3xl shadow-glow-purple">
                👥
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-text-primary mb-1">
                  Invite Friends, Earn Commissions
                </h2>
                <p className="text-sm text-text-secondary max-w-md mx-auto mt-2 leading-relaxed">
                  Earn a lifetime <span className="text-accent-green font-bold">10% commission</span> on all tasks and surveys completed by your referrals. Start building passive rewards!
                </p>
              </div>

              <div className="flex items-center w-full max-w-md bg-input-bg border border-input-border rounded-xl p-1.5 gap-3 mt-4">
                <span className="text-xs font-mono text-text-primary pl-3 select-all overflow-hidden text-ellipsis whitespace-nowrap flex-grow text-left">
                  https://binnycash.com/register?ref={user}
                </span>
                <button
                  onClick={copyReferralLink}
                  className="px-5 py-2.5 bg-accent-purple hover:bg-accent-green text-white text-xs font-bold rounded-lg shadow-glow-purple transition-all duration-200 cursor-pointer flex-shrink-0"
                >
                  {copied ? "Copied! ✓" : "Copy Link"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
