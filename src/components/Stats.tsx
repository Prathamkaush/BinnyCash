export default function Stats() {
  const statsData = [
    { value: "$182,490+", label: "Cash Rewards Paid", subtitle: "Guaranteed and verified" },
    { value: "12,500+", label: "Active Earners", subtitle: "Working worldwide daily" },
    { value: "98.7%", label: "Instant Payout Rate", subtitle: "Within minutes of claim" },
    { value: "145K+", label: "Tasks Completed", subtitle: "Surveys, games, and installs" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className="bg-card-bg border border-card-border rounded-2xl p-8 text-center hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 group"
          >
            <div className="text-3xl md:text-4xl font-extrabold font-display bg-gradient-to-r from-white via-white to-accent-purple light-theme:from-text-primary light-theme:to-accent-purple bg-clip-text text-transparent group-hover:to-accent-green group-hover:from-white transition-all duration-300">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-text-primary mt-3 mb-1 tracking-wide">
              {stat.label}
            </div>
            <div className="text-xs text-text-secondary">
              {stat.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
