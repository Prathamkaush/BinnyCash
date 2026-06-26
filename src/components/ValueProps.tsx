export default function ValueProps() {
  const props = [
    {
      title: "Earn with Surveys",
      desc: "Share your opinions on consumer brands and products to earn cash rewards. High-paying surveys updated hourly.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "App & Game Testing",
      desc: "Get paid to install mobile apps, test game levels, and explore fresh software from your phone or tablet.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Referral Commission",
      desc: "Invite your friends and earn a lifetime 10% commission on all their earnings. Earn more together!",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Work From Anywhere",
      desc: "Complete simple tasks at home, during commutes, or in your spare time. Available worldwide on any device.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20.965V19a2 2 0 00-2-2h-.5a1.5 1.5 0 01-1.5-1.5V14m8.5-9.045V5.5A2.5 2.5 0 0113.5 3h-.5a2 2 0 01-2-2V.965" />
        </svg>
      ),
    },
    {
      title: "Fast, Secure Payouts",
      desc: "Withdraw using multiple secure payment gateways, including PayPal, Cryptocurrencies, and Digital Gift Cards.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Multiple Opportunities",
      desc: "Dozens of offerwalls and task providers aggregated in one hub. Choose the tasks that fit you best.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">WHY CHOOSE US</span>
        <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
          Earn More with BinnyCash
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
          We bring together premium reward networks to offer the highest rates and fastest payment processing online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map((prop, idx) => (
          <div
            key={idx}
            className="bg-card-bg border border-card-border rounded-2xl p-8 hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 group"
          >
            {/* Icon Block */}
            <div className="w-12 h-12 rounded-xl bg-accent-purple/5 border border-accent-purple/10 text-accent-purple group-hover:text-accent-green group-hover:bg-accent-green/5 group-hover:border-accent-green/20 flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:rotate-6">
              {prop.icon}
            </div>

            <h3 className="text-lg font-bold font-display text-text-primary mb-2">
              {prop.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {prop.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
