import { translations } from "@/utils/translations";

interface StepsProps {
  language?: string;
}

export default function Steps({ language = "en" }: StepsProps) {
  const t = translations[language] || translations["en"];

  const steps = [
    {
      step: "01",
      image: "/register.png",
      title: t.step1_title,
      desc: t.step1_desc,
    },
    {
      step: "02",
      image: "/task.png",
      title: t.step2_title,
      desc: t.step2_desc,
    },
    {
      step: "03",
      image: "/payout.png",
      title: t.step3_title,
      desc: t.step3_desc,
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-bg-secondary/40 border-y border-card-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">{t.steps_badge}</span>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
            {t.steps_title}
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
            {t.steps_subtitle}
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

              {/* Graphic Illustration Container */}
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform group-hover:scale-110">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(139,92,246,0.18)] group-hover:drop-shadow-[0_12px_24px_rgba(16,185,129,0.28)]"
                />
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
