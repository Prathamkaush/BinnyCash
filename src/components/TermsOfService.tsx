"use client";

import { useState } from "react";

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "eligibility", title: "2. Eligibility & Accounts" },
  { id: "fraud", title: "3. Strictly Prohibited (Fraud Policy)" },
  { id: "earnings", title: "4. Earnings & Cashouts" },
  { id: "termination", title: "5. Account Termination" },
  { id: "intellectual", title: "6. Intellectual Property" },
  { id: "disclaimers", title: "7. Warranty Disclaimers" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "governing", title: "9. Governing Law" },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full animate-fade-in relative">
      {/* Background Glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">LEGAL AGREEMENT</span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-display text-text-primary mt-2">
          Terms of Service
        </h1>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto mt-3">
          Last Updated: June 27, 2026. Please read this Terms of Service agreement carefully before accessing BinnyCash.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-4 h-fit sticky top-28 hidden lg:block bg-card-bg border border-card-border p-6 rounded-2xl">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">Table of Contents</h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {SECTIONS.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeSection === sec.id
                      ? "bg-accent-purple/10 border border-accent-purple/30 text-accent-purple"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {sec.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Container */}
        <div className="lg:col-span-8 bg-card-bg border border-card-border p-6 md:p-10 rounded-3xl flex flex-col gap-8 leading-relaxed max-w-none text-sm md:text-base text-text-secondary">
          {/* Mobile TOC */}
          <div className="lg:hidden bg-bg-tertiary/50 border border-card-border p-4 rounded-xl mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Sections</h3>
            <div className="flex flex-wrap gap-2">
              {SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`py-1.5 px-3 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                    activeSection === sec.id
                      ? "border-accent-purple bg-accent-purple/10 text-accent-purple"
                      : "border-card-border text-text-secondary bg-bg-tertiary"
                  }`}
                >
                  {sec.title.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Acceptance */}
          <article id="acceptance" className="scroll-mt-28">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">1. Acceptance of Terms</h2>
            <p className="mb-3">
              By using or creating an account on BinnyCash (&ldquo;Service,&rdquo; &ldquo;Website&rdquo;), you agree to comply with and be bound by these Terms of Service, along with our Privacy Policy. If you do not accept these terms in full, you must immediately cease using this website.
            </p>
            <p>
              These terms form a legally binding agreement between you and BinnyCash. We reserve the right to change or update these terms at our discretion, and your continued usage marks acceptance of any revisions.
            </p>
          </article>

          {/* Section: Eligibility */}
          <article id="eligibility" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">2. Eligibility & Account Responsibilities</h2>
            <p className="mb-3">
              To register and use our platform, you must meet the following criteria:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 mb-3">
              <li>You must be at least 13 years of age. If you are under 18, you must have parental or legal guardian consent to use this platform.</li>
              <li>You may register only <strong className="text-text-primary">one (1) account</strong> per person, household, or IP address. Creating duplicate accounts to exploit sign-up rewards is strictly forbidden.</li>
              <li>You must provide accurate, honest, and complete registration information. You are solely responsible for keeping your credentials secure.</li>
            </ul>
            <p>
              Any attempt to share accounts or access another user&apos;s account will lead to immediate lock and potential balance forfeiture.
            </p>
          </article>

          {/* Section: Fraud */}
          <article id="fraud" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">3. Strictly Prohibited (Fraud Policy)</h2>
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-4 text-xs md:text-sm">
              <strong className="font-bold block mb-1">⚠️ Warning: Zero Tolerance Policy</strong>
              We deploy automated verification scripts and security checks to preserve advertiser integrity. If you engage in any of the actions listed below, your account will be immediately banned and all earnings permanently nullified.
            </div>
            <p className="mb-3">
              The following behaviors are strictly forbidden on BinnyCash:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                <strong className="text-text-primary">VPN, Proxy, or VPS Usage:</strong> Accessing the platform via an IP routing service or virtual server. You must connect only through residential internet connections.
              </li>
              <li>
                <strong className="text-text-primary">Bots & Automations:</strong> Using custom scripts, auto-clickers, emulators (like BlueStacks), or software tools to complete tasks automatically.
              </li>
              <li>
                <strong className="text-text-primary">Fake Demographics:</strong> Submitting false demographics to bypass survey screeners or giving illogical/gibberish answers during survey trials.
              </li>
              <li>
                <strong className="text-text-primary">Chargebacks & Refusal:</strong> Attempting to reverse lead completions after advertiser verification.
              </li>
            </ul>
          </article>

          {/* Section: Earnings */}
          <article id="earnings" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">4. Earnings & Cashouts</h2>
            <p className="mb-3">
              Users complete tasks on external Offerwalls and survey pools in exchange for BinnyCash Coins.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                <strong className="text-text-primary">Coin Values:</strong> The exchange rate is set at 1,000 Coins = $1.00 USD. Rates are subject to adjustments based on currency conversions.
              </li>
              <li>
                <strong className="text-text-primary">Crediting & Reversals:</strong> Tasks are credited when the third-party advertiser reports completion. Advertisers reserve the right to reverse rewards if fraud or early app uninstalls are detected.
              </li>
              <li>
                <strong className="text-text-primary">Withdrawals:</strong> Payout requests are verified by our audit team. We process payments via PayPal, LTC, BTC, or Gift Cards. Verification checks usually take under 2 hours, but may require up to 24 hours under review.
              </li>
              <li>
                <strong className="text-text-primary">Minimum Threshold:</strong> Users must reach the minimum checkout balance (e.g., $1.00 or $5.00 depending on the selected payout system) to submit a cashout.
              </li>
            </ul>
          </article>

          {/* Section: Termination */}
          <article id="termination" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">5. Account Termination</h2>
            <p className="mb-3">
              We reserve the right to suspend or terminate your account, ban your IP address, and reject payout requests at any time, without prior warning, if you violate any terms written in this agreement.
            </p>
            <p>
              Inactive accounts (defined as accounts with no log-in actions for 180 consecutive days) may be deactivated, and any unused balances will expire. If you believe your account was deactivated in error, you may file an appeal by contacting support.
            </p>
          </article>

          {/* Section: Intellectual */}
          <article id="intellectual" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">6. Intellectual Property Rights</h2>
            <p>
              All materials, layout, features, code, graphic banners, and logos on BinnyCash are the exclusive property of BinnyCash or its content licensors. You may not reuse, replicate, redistribute, or reverse-engineer any component of our website without explicit written consent.
            </p>
          </article>

          {/* Section: Disclaimers */}
          <article id="disclaimers" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">7. Disclaimer of Warranties</h2>
            <p className="mb-3">
              Our website and rewards platform are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. BinnyCash makes no representation or warranty of any kind, express or implied, as to the accuracy, completeness, uptime, or availability of our systems.
            </p>
            <p>
              We cannot guarantee that tasks will always credit immediately, or that third-party survey networks will match your qualifications.
            </p>
          </article>

          {/* Section: Liability */}
          <article id="liability" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">8. Limitation of Liability</h2>
            <p>
              To the absolute maximum extent permitted under applicable law, BinnyCash, its founders, and affiliates will not be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from your use of, or inability to use, our service, including points loss, currency fluctuations, or third-party offer malfunctions.
            </p>
          </article>

          {/* Section: Governing */}
          <article id="governing" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">9. Governing Law</h2>
            <p className="mb-4">
              These Terms of Service and any issues arising from your use of the website shall be governed by and interpreted in accordance with applicable regional laws. Any legal claims must be initiated within the appropriate jurisdiction.
            </p>
            <div className="bg-bg-tertiary border border-card-border p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text-primary text-sm sm:text-base">Support Desk</p>
                <p className="text-xs text-text-muted mt-1">For legal and compliance questions</p>
              </div>
              <a
                href="mailto:support@binnycash.com"
                className="px-5 py-2.5 bg-accent-purple hover:bg-[#7c3aed] text-white text-xs font-bold rounded-xl shadow-glow-purple transition-all"
              >
                support@binnycash.com
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
