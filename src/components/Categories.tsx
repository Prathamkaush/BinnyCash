interface CategoriesProps {
  onStartEarning: () => void;
}

export default function Categories({ onStartEarning }: CategoriesProps) {
  const categories = [
    {
      title: "Paid Surveys",
      desc: "Provide feedback on new services, politics, or consumer products. Brands pay cash for your honest opinion.",
      rate: "Up to $15.50 / survey",
      badge: "📝 SURVEYS",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.9 1.516-.9 1.819 0l1.242 3.823a1.5 1.5 0 001.416 1.022h4.033c.95 0 1.343 1.22 0 1.819l-3.262 2.37A1.5 1.5 0 0013.97 14.1l1.242 3.823c.3.9-.703 1.63-1.416 1.022l-3.262-2.37a1.5 1.5 0 00-1.819 0l-3.262 2.37c-.713.6-.713-.122-1.416-1.022l1.242-3.823a1.5 1.5 0 00-.542-1.61L2.83 9.588c-.703-.6-.35-1.819.542-1.819h4.033a1.5 1.5 0 001.416-1.022L11.05 2.927z" />
        </svg>
      ),
    },
    {
      title: "Play Games",
      desc: "Download and play mobile strategy, puzzle, or arcade games. Complete levels or reach game milestones to unlock rewards.",
      rate: "Up to $60.00 / game",
      badge: "🎮 PLAY TO EARN",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Quick Offers",
      desc: "Register on websites, download new applications, test premium trials, or discover cashback opportunities instantly.",
      rate: "Up to $45.00 / offer",
      badge: "⚡ QUICK OFFERS",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-bg-secondary/40 border-y border-card-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">EARNING OPTIONS</span>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
            Top Reward Categories
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
            Explore diverse task formats designed to let everyone earn according to their preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative bg-card-bg border border-card-border rounded-3xl p-8 hover:border-accent-purple hover:shadow-glow-purple hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[380px] group overflow-hidden"
            >
              {/* Border top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-purple group-hover:bg-accent-green group-hover:shadow-glow-green transition-all" />

              <div className="flex flex-col gap-4">
                {/* Badge Category */}
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[10px] font-bold group-hover:bg-accent-green/10 group-hover:border-accent-green/20 group-hover:text-accent-green transition-all">
                  {cat.badge}
                </div>

                <h3 className="text-xl font-bold font-display text-text-primary mt-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-text-muted">Earn rate</span>
                  <span className="text-base font-extrabold text-accent-green">{cat.rate}</span>
                </div>

                <button
                  onClick={onStartEarning}
                  className="w-11 h-11 rounded-full bg-bg-tertiary border border-card-border text-text-primary hover:bg-accent-green hover:border-accent-green hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 shadow-md"
                >
                  ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
