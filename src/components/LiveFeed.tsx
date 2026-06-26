"use client";

import { useEffect, useState } from "react";

interface Payout {
  id: number;
  user: string;
  amount: string;
  method: string;
  time: string;
  icon: string;
}

export default function LiveFeed() {
  const initialPayouts: Payout[] = [
    { id: 1, user: "pratham***", amount: "$15.40", method: "PayPal", time: "Just now", icon: "💳" },
    { id: 2, user: "julie***", amount: "$45.00", method: "Litecoin", time: "2 mins ago", icon: "🪙" },
    { id: 3, user: "david***", amount: "$5.00", method: "Google Play", time: "3 mins ago", icon: "🎮" },
    { id: 4, user: "sarah***", amount: "$25.20", method: "Bitcoin", time: "5 mins ago", icon: "🪙" },
    { id: 5, user: "alex9***", amount: "$10.00", method: "PayPal", time: "7 mins ago", icon: "💳" },
    { id: 6, user: "eliza***", amount: "$30.00", method: "Visa Gift", time: "9 mins ago", icon: "🎁" },
  ];

  const [payouts, setPayouts] = useState<Payout[]>(initialPayouts);

  // Periodically update the payout time / simulate new cashouts
  useEffect(() => {
    const interval = setInterval(() => {
      const methods = ["PayPal", "Bitcoin", "Litecoin", "Google Play", "Visa Gift"];
      const icons = ["💳", "🪙", "🪙", "🎮", "🎁"];
      const randIdx = Math.floor(Math.random() * methods.length);
      const randAmt = (Math.random() * 40 + 5).toFixed(2);
      const usernames = ["kyle***", "emily***", "ron***", "meera***", "sam***", "linda***", "tony***"];
      const randUser = usernames[Math.floor(Math.random() * usernames.length)];
      
      const newPayout: Payout = {
        id: Date.now(),
        user: randUser,
        amount: `$${randAmt}`,
        method: methods[randIdx],
        time: "Just now",
        icon: icons[randIdx]
      };

      setPayouts((prev) => {
        // Remove older and push new
        const updated = [newPayout, ...prev.slice(0, 5)];
        return updated;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Double the list to support seamless marquee looping
  const marqueeItems = [...payouts, ...payouts];

  return (
    <div className="w-full bg-bg-secondary border-y border-card-border py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
        {/* Live Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/15 border border-accent-purple/20 text-accent-purple text-xs font-extrabold tracking-wider whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-accent-green shadow-glow-green animate-pulse" />
          LIVE CASHOUTS
        </div>

        {/* Ticker Feed */}
        <div className="flex-grow overflow-hidden relative h-6 select-none">
          <div className="flex gap-12 items-center absolute whitespace-nowrap animate-ticker">
            {marqueeItems.map((payout, index) => (
              <div
                key={`${payout.id}-${index}`}
                className="flex items-center gap-2 text-sm text-text-secondary font-medium hover:text-text-primary transition-colors"
              >
                <span className="text-base">{payout.icon}</span>
                <span>User <strong>{payout.user}</strong> withdrew</span>
                <span className="text-accent-green font-extrabold">{payout.amount}</span>
                <span>via</span>
                <span className="text-accent-purple font-semibold">{payout.method}</span>
                <span className="text-text-muted text-xs">({payout.time})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
