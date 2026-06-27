"use client";

import { useState } from "react";

const SECTIONS = [
  { id: "intro", title: "1. Introduction" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Information" },
  { id: "cookies", title: "4. Cookies & Tracking" },
  { id: "sharing", title: "5. Information Sharing" },
  { id: "security", title: "6. Data Security" },
  { id: "rights", title: "7. Your Privacy Rights" },
  { id: "changes", title: "8. Changes to Policy" },
  { id: "contact", title: "9. Contact Us" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");

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
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <span className="text-xs uppercase tracking-widest text-accent-green font-bold">LEGAL DOCUMENT</span>
        <h1 className="text-3xl md:text-5xl font-extrabold font-display text-text-primary mt-2">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto mt-3">
          Last Updated: June 27, 2026. Please read this Privacy Policy carefully before using BinnyCash.
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

          {/* Section: Intro */}
          <article id="intro" className="scroll-mt-28">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">1. Introduction</h2>
            <p className="mb-3">
              At BinnyCash (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy and are committed to protecting your personal data. This Privacy Policy details how we collect, handle, use, and store information when you visit and participate in rewards activities on BinnyCash.com.
            </p>
            <p>
              By signing up for an account, accessing our site, or participating in surveys, games, or tasks, you agree to the collection and use of information in accordance with this policy.
            </p>
          </article>

          {/* Section: Collect */}
          <article id="collect" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We collect several categories of information to verify accounts, customize rewards, prevent fraud, and handle payouts:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                <strong className="text-text-primary">Account Details:</strong> When you register, we collect details like your username, email address, password, country, and language preference.
              </li>
              <li>
                <strong className="text-text-primary">Payment Information:</strong> To issue payouts, we collect PayPal email addresses, cryptocurrency wallet addresses (e.g., Litecoin, Bitcoin), or gift card delivery details.
              </li>
              <li>
                <strong className="text-text-primary">Task & Survey Submissions:</strong> We record which tasks, offerwalls, apps, or surveys you complete, along with answers you submit to market research providers.
              </li>
              <li>
                <strong className="text-text-primary">Device & Log Data:</strong> We automatically collect information your browser sends, including your IP address, operating system, browser type, cookies, device identifier, and location.
              </li>
            </ul>
          </article>

          {/* Section: Use */}
          <article id="use" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">
              We use the collected data for the following essential business purposes:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>To provide and maintain our service, verify offer completion, and issue rewards.</li>
              <li>To process withdrawals and transfer earnings securely to your designated accounts.</li>
              <li>To prevent fraudulent behaviors such as multiple account creation, bot activity, VPN/proxy usage, or fake surveys.</li>
              <li>To offer support, reply to inquiries, and resolve balance discrepancies.</li>
              <li>To send updates, newsletter offers, security notifications, and community rewards info.</li>
            </ul>
          </article>

          {/* Section: Cookies */}
          <article id="cookies" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">4. Cookies & Tracking Technologies</h2>
            <p className="mb-3">
              BinnyCash uses cookies and tracking technologies (like local storage and web beacons) to identify sessions, remember preferences, and verify task completion from external offerwalls.
            </p>
            <p>
              You can set your browser to refuse all cookies or warn you when cookies are being sent. However, if you disable cookies, some sections of BinnyCash (especially offerwall tracking) may not function or credit rewards correctly.
            </p>
          </article>

          {/* Section: Sharing */}
          <article id="sharing" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">5. Information Sharing & Third-Party Services</h2>
            <p className="mb-3">
              We do not sell your personal data. We share your information only under these specific conditions:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                <strong className="text-text-primary">Offerwall & Survey Partners:</strong> We pass encrypted, pseudonymized identifiers to partners like AdGate, BitLabs, and CPX Research to verify completion of reward tasks.
              </li>
              <li>
                <strong className="text-text-primary">Payment Processors:</strong> We share required payment identifiers with companies handling PayPal payouts or crypto nodes to deliver your cashouts.
              </li>
              <li>
                <strong className="text-text-primary">Legal Requirements:</strong> If compelled by law enforcement, subpoena, or to protect the safety and rights of BinnyCash, our users, or others.
              </li>
            </ul>
          </article>

          {/* Section: Security */}
          <article id="security" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">6. Data Security</h2>
            <p className="mb-3">
              We employ strict industry-standard technical measures (SSL encryption, secure database access protocols, and hashing algorithms) to shield your data from unauthorized access, leakage, or loss.
            </p>
            <p>
              Please keep in mind that no data transmission over the Internet or storage method is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </article>

          {/* Section: Rights */}
          <article id="rights" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">7. Your Privacy Rights</h2>
            <p className="mb-3">
              Depending on your location (such as the EU under GDPR or California under CCPA), you hold specific privacy rights, including:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>The right to access and copy the personal information we hold about you.</li>
              <li>The right to request corrections or updates to inaccurate profile details.</li>
              <li>The right to request deletion of your account and related data (&ldquo;Right to be Forgotten&rdquo;).</li>
              <li>The right to withdraw consent at any time for promotional communications.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please email us directly at support@binnycash.com.
            </p>
          </article>

          {/* Section: Changes */}
          <article id="changes" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">8. Changes to this Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Any changes will be published directly on this page with an updated &ldquo;Last Updated&rdquo; date. We advise reviewing this document periodically to stay informed of how we guard your data.
            </p>
          </article>

          {/* Section: Contact */}
          <article id="contact" className="scroll-mt-28 border-t border-white/5 pt-8">
            <h2 className="text-lg md:text-xl font-bold font-display text-text-primary mb-3">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or clarifications regarding this Privacy Policy or data handling, please reach out to us:
            </p>
            <div className="bg-bg-tertiary border border-card-border p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text-primary text-sm sm:text-base">Support Desk</p>
                <p className="text-xs text-text-muted mt-1">Average reply time: Under 2 hours</p>
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
