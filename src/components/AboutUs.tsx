"use client";

import Image from "next/image";

export default function AboutUs() {
  const pillars = [
    {
      title: "Complete surveys & earn rewards",
      desc: "We partner with leading market research companies to deliver relevant, high-paying surveys tailored to your interests.",
      icon: "📋",
    },
    {
      title: "Try apps, games & exclusive offers",
      desc: "Get paid for discovering new games, testing apps, and checking out unique trials from trusted brands.",
      icon: "🎮",
    },
    {
      title: "Invite friends & earn commission",
      desc: "Earn passive income by sharing the rewards. Get 10% commission on your friends' earnings for life.",
      icon: "👥",
    },
    {
      title: "Work anytime, from anywhere",
      desc: "Complete simple micro-tasks on your phone or laptop. You set your own schedule, with no boundaries.",
      icon: "🌍",
    },
    {
      title: "Fast, secure, reliable payouts",
      desc: "Request withdrawals at any time and get paid in minutes via PayPal, Cryptocurrencies, or Gift Cards.",
      icon: "⚡",
    },
    {
      title: "Multiple earning opportunities",
      desc: "We aggregate dozens of offerwalls, survey panels, and gaming networks so there is always work available.",
      icon: "💰",
    },
  ];

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full animate-fade-in">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">OUR MISSION</span>
        <h2 className="text-3xl md:text-5.5xl font-extrabold font-display text-text-primary mt-2 leading-tight">
          About BinnyCash
        </h2>
        <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mt-4 leading-relaxed">
          Creating a simple, transparent, and rewarding micro-earning experience for everyone, globally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative w-full h-[320px] md:h-[400px] border border-card-border rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/logo.jpg"
            alt="BinnyCash Vision"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-3.5xl font-extrabold font-display text-text-primary leading-tight">
            Rewarding Everyday Activities
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Whether you are a student looking to cover coffee expenses, a freelancer wanting extra cash on the side, a professional exploring side gigs, or anyone wishing to monetize their spare time, BinnyCash makes it easy.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Our mission is simple: provide a secure, high-paying, and transparent ecosystem. We partner with the most trusted marketing research networks to offer you verified tasks that credit instantly to your balance.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <div className="text-center bg-card-bg border border-card-border p-4 rounded-2xl flex-1">
              <p className="text-xl font-bold font-display text-accent-purple">100%</p>
              <p className="text-[10px] text-text-secondary mt-1">Free to Join</p>
            </div>
            <div className="text-center bg-card-bg border border-card-border p-4 rounded-2xl flex-1">
              <p className="text-xl font-bold font-display text-accent-green">12K+</p>
              <p className="text-[10px] text-text-secondary mt-1">Happy Earners</p>
            </div>
            <div className="text-center bg-card-bg border border-card-border p-4 rounded-2xl flex-1">
              <p className="text-xl font-bold font-display text-text-primary">Instant</p>
              <p className="text-[10px] text-text-secondary mt-1">Verification</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3.5xl font-extrabold font-display text-text-primary">
            Why Choose BinnyCash?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-card-bg border border-card-border rounded-2xl p-8 hover:border-accent-green hover:shadow-glow-green transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold font-display text-text-primary mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
