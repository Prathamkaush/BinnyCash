"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ChatMessage {
  id: string;
  username: string;
  badge: string;
  badgeColor: string;
  message: string;
  timestamp: string;
  isSelf?: boolean;
}

const PRESET_USERS = [
  { name: "CryptoKing99", badge: "Pro Earner", color: "text-[#10b981]" },
  { name: "SarahSurvey", badge: "Gold Earner", color: "text-[#8b5cf6]" },
  { name: "TaskMaster", badge: "Moderator", color: "text-[#3b82f6]" },
  { name: "BinnyStaff", badge: "Admin", color: "text-[#f43f5e]" },
  { name: "MaxCashOut", badge: "User", color: "text-[#e2e8f0]" },
  { name: "SurveyQueen", badge: "User", color: "text-[#e2e8f0]" },
];

const PRESET_MESSAGES = [
  "CPX Research is giving 2x points right now! 💸",
  "Just got my LTC payout in like 15 minutes. Super fast verification!",
  "What is the promo code for today guys? I missed the drop.",
  "Check the Telegram announcements. I think they posted it there.",
  "Is the survey about consumer products still active? Pays like 3500 coins.",
  "Yes, I just completed it! Make sure you don't speed run or you get screened out.",
  "Finally hit $50 this week! Cashout requested to PayPal.",
  "Nice job! I am at $30. Gaming offers are pays really well too.",
  "Admin, when is the next trivia night in Discord?",
  "Promo code dropping in 10 minutes! Make sure your account is active.",
  "Wow! Just earned $8 from testing the new strategy mobile game.",
  "BinnyCash is definitely the highest paying rewards site I have tried.",
];

export default function CommunityChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with some mock messages
  useEffect(() => {
    const initialMessages: ChatMessage[] = [];
    const now = new Date();
    
    for (let i = 0; i < 6; i++) {
      const u = PRESET_USERS[i % PRESET_USERS.length];
      const msgTime = new Date(now.getTime() - (6 - i) * 60000);
      initialMessages.push({
        id: `init-${i}`,
        username: u.name,
        badge: u.badge,
        badgeColor: u.color,
        message: PRESET_MESSAGES[i % PRESET_MESSAGES.length],
        timestamp: msgTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }
    setMessages(initialMessages);
  }, []);

  // Scroll to bottom whenever messages list updates
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulate new users typing and posting messages periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = PRESET_USERS[Math.floor(Math.random() * PRESET_USERS.length)];
      const randomMsg = PRESET_MESSAGES[Math.floor(Math.random() * PRESET_MESSAGES.length)];
      const now = new Date();
      
      const newMsg: ChatMessage = {
        id: `sim-${Date.now()}`,
        username: randomUser.name,
        badge: randomUser.badge,
        badgeColor: randomUser.color,
        message: randomMsg,
        timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev.slice(-30), newMsg]);
    }, 9000); // add a new chat message every 9 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const now = new Date();
    const selfMsg: ChatMessage = {
      id: `self-${Date.now()}`,
      username: "You (Earner)",
      badge: "Member",
      badgeColor: "text-accent-green",
      message: inputText,
      timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true,
    };

    setMessages((prev) => [...prev, selfMsg]);
    setInputText("");

    // Simulate Admin/Staff response after 1.5 seconds if they ask about support or promo
    const textLower = inputText.toLowerCase();
    if (textLower.includes("promo") || textLower.includes("code") || textLower.includes("help") || textLower.includes("support")) {
      setTimeout(() => {
        const staffMsg: ChatMessage = {
          id: `reply-${Date.now()}`,
          username: "BinnyStaff",
          badge: "Admin",
          badgeColor: "text-[#f43f5e]",
          message: "If you need immediate assistance or promo codes, join our Discord and Telegram channels! Alternatively, you can use the Live Support tool in the footer. 🚀",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, staffMsg]);
      }, 1500);
    }
  };

  const leaderboard = [
    { rank: 1, name: "CryptoKing99", points: "152,400", reward: "$15.00 Bonus" },
    { rank: 2, name: "SarahSurvey", points: "118,250", reward: "$10.00 Bonus" },
    { rank: 3, name: "SurveyQueen", points: "98,100", reward: "$5.00 Bonus" },
    { rank: 4, name: "GamerProX", points: "82,300", reward: "$2.50 Bonus" },
    { rank: 5, name: "LtcMiner", points: "76,500", reward: "$1.00 Bonus" },
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full animate-fade-in relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-accent-green font-bold">COMMUNITY HUB</span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-display text-text-primary mt-2">
          Global Chat & Socials
        </h1>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto mt-3">
          Chat with online earn-masters, share tips, unlock exclusive promo codes, and climb the weekly leaderboard!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Leaderboard & Social Links (Left Col) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Official Social Links */}
          <div className="bg-card-bg border border-card-border p-6 rounded-3xl flex flex-col gap-4">
            <h3 className="text-base font-bold font-display text-text-primary">Official Channels</h3>
            <p className="text-xs text-text-secondary">Join our community platforms to grab active promo codes, read guides, and join events.</p>
            
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/binnycash_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-bg-tertiary border border-card-border hover:border-[#24A1DE] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#24A1DE]/10 flex items-center justify-center text-[#24A1DE] group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.89 3.96L2.3 10.75c-1.2.48-1.19 1.15-.22 1.45l4.52 1.41 10.46-6.6c.49-.3.95-.14.58.19L9.13 14.97v4.18c.41 0 .59-.19.82-.41l1.97-1.92 4.1 3.03c.76.42 1.3.2 1.49-.71l2.69-12.67c.28-1.12-.43-1.63-1.31-1.31z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-primary group-hover:text-[#24A1DE] transition-colors">Telegram Channel</p>
                  <p className="text-[10px] text-text-muted">12K+ members, daily codes</p>
                </div>
              </a>

              <a
                href="https://discord.gg/KrwPb6V8a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-bg-tertiary border border-card-border hover:border-[#5865F2] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.3 5.3A12.7 12.7 0 0 0 12 4a12.7 12.7 0 0 0 -5.3 1.3C4.1 6.8 2 10.3 2 14.3c0 2 1.3 3.9 3.3 4.5l1-1.8a10.6 10.6 0 0 1 -3.1 -1.5l.8-.7c1.7 1.5 4 2.5 6.7 2.7l.2-.2c-.3 0-.7-.2-1-.4a5 5 0 0 1 -.7-.8l.2-.2h.2c1.7.5 3.5.7 5.2.7h.2l.2.2a5 5 0 0 1 -.7.8 4.7 4.7 0 0 1 -1 .4l.2.2c2.7-.2 5-1.2 6.7-2.7l.8.7a10.6 10.6 0 0 1 -3.1 1.5l1 1.8c2-.6 3.3-2.5 3.3-4.5 0-4-2.1-7.5-4.7-9zm-8.3 8.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3zm6 0c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-primary group-hover:text-[#5865F2] transition-colors">Discord Guild</p>
                  <p className="text-[10px] text-text-muted">Chat, trivia & events</p>
                </div>
              </a>

              <a
                href="https://x.com/binnycash_com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-bg-tertiary border border-card-border hover:border-text-primary transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-primary group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-primary group-hover:text-white transition-colors">Twitter (X)</p>
                  <p className="text-[10px] text-text-muted">Follow updates & giveaways</p>
                </div>
              </a>
            </div>
          </div>

          {/* Weekly Chat Leaderboard */}
          <div className="bg-card-bg border border-card-border p-6 rounded-3xl flex flex-col gap-4">
            <h3 className="text-base font-bold font-display text-text-primary flex items-center gap-2">
              <span>🏆</span> Weekly Leaderboard
            </h3>
            <p className="text-xs text-text-secondary">Earn points to unlock cash prizes at the end of every week!</p>
            
            <div className="flex flex-col gap-2">
              {leaderboard.map((item) => (
                <div key={item.rank} className="flex items-center justify-between p-2.5 rounded-xl bg-bg-tertiary/40 border border-card-border/50 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                      item.rank === 1 ? "bg-amber-500/20 border border-amber-500 text-amber-500" :
                      item.rank === 2 ? "bg-slate-400/20 border border-slate-400 text-slate-300" :
                      item.rank === 3 ? "bg-amber-700/20 border border-amber-800 text-amber-600" :
                      "bg-white/5 text-text-secondary"
                    }`}>
                      {item.rank}
                    </span>
                    <span className="font-semibold text-text-primary">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-text-secondary">{item.points} pts</p>
                    <p className="text-[9px] text-accent-green font-semibold">{item.reward}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Chat Box (Right Col) */}
        <div className="lg:col-span-8 flex flex-col bg-card-bg border border-card-border rounded-3xl overflow-hidden h-[580px] md:h-[620px] shadow-2xl">
          {/* Chat Header */}
          <div className="p-4 md:p-5 bg-bg-secondary border-b border-card-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
              <div>
                <p className="text-sm font-bold text-text-primary">Global Chatroom</p>
                <p className="text-[10px] text-text-secondary">4,812 Earners online</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-white/5 border border-card-border text-[10px] text-text-secondary rounded-lg font-bold">
              English Room 💬
            </div>
          </div>

          {/* Messages Area */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.isSelf ? "self-end items-end" : "self-start items-start"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-bold ${msg.badgeColor}`}>
                    {msg.username}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-semibold border ${
                    msg.badge === "Admin" ? "bg-red-500/10 border-red-500/20 text-red-400" :
                    msg.badge === "Moderator" ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
                    msg.badge === "Pro Earner" ? "bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]" :
                    msg.badge === "Gold Earner" ? "bg-purple-500/10 border-purple-500/20 text-purple-400" :
                    "bg-white/5 border-white/10 text-text-muted"
                  }`}>
                    {msg.badge}
                  </span>
                  <span className="text-[9px] text-text-muted">{msg.timestamp}</span>
                </div>
                <div className={`p-3 rounded-2xl text-xs md:text-sm border leading-relaxed ${
                  msg.isSelf
                    ? "bg-accent-purple/20 border-accent-purple/30 text-white rounded-tr-none text-right"
                    : "bg-bg-tertiary border-card-border text-text-secondary rounded-tl-none"
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 bg-bg-secondary border-t border-card-border flex gap-3 items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message... (Try asking about 'promo code' or 'help')"
              className="flex-1 px-4 py-3 bg-bg-primary border border-input-border text-text-primary rounded-xl text-xs md:text-sm outline-none focus:border-accent-purple transition-all placeholder:text-text-muted"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-accent-purple hover:bg-[#7c3aed] text-white text-xs md:text-sm font-bold rounded-xl shadow-glow-purple transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Send</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
