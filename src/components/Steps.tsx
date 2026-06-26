export default function Steps() {
  const steps = [
    {
      step: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      title: "Register Free",
      desc: "Sign up in 10 seconds. Get immediate access to your dashboard with no setup fees or investments.",
    },
    {
      step: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Complete Tasks",
      desc: "Select from surveys, play games, test apps, or complete simple tasks. Watch your balance grow in real time.",
    },
    {
      step: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Receive Payouts",
      desc: "Withdraw cash directly via PayPal, Bitcoin, Litecoin, or gift cards. Experience ultra-fast, secure deposits.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-bg-secondary/40 border-y border-card-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">SIMPLE ONBOARDING</span>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
            How BinnyCash Works
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
            Follow these three simple steps to start turning your free time into cash rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-card-bg border border-card-border rounded-2xl p-10 text-center hover:border-accent-green hover:shadow-glow-green transition-all duration-300 group z-10"
            >
              {/* Badge Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-green text-white font-extrabold font-display flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-green transition-all">
                {step.step}
              </div>

              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-accent-purple/5 border border-accent-purple/10 text-accent-purple group-hover:text-accent-green group-hover:border-accent-green/30 group-hover:bg-accent-green/5 flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform group-hover:scale-110">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold font-display text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
