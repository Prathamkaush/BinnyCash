import Image from "next/image";

interface FooterProps {
  setView: (view: string) => void;
  onComingSoon: (feature: string) => void;
  onAnchorClick: (anchorId: string) => void;
}

export default function Footer({ setView, onComingSoon, onAnchorClick }: FooterProps) {
  const handleLink = (view: string) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-bg-secondary border-t border-card-border pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <button onClick={() => handleLink("landing")} className="flex items-center gap-3 self-start bg-transparent border-none cursor-pointer">
              <div className="relative w-9 h-9 border border-accent-green rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="BinnyCash Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold font-display text-text-primary">
                BinnyCash
              </span>
            </button>
            <p className="text-xs md:text-sm text-text-secondary max-w-sm leading-relaxed">
              BinnyCash is a trusted online rewards platform helping people turn their spare time into real money by taking surveys, testing mobile applications, playing games, and completing simple tasks.
            </p>
            {/* Mock Socials */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => onComingSoon("X (Twitter) Channel")}
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary text-sm hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="X (Twitter)"
              >
                𝕏
              </button>
              <button
                onClick={() => onComingSoon("Discord Server")}
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary text-sm hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="Discord"
              >
                💬
              </button>
              <button
                onClick={() => onComingSoon("Telegram Channel")}
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary text-sm hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="Telegram"
              >
                ✈
              </button>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-text-primary font-display">Product</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary list-none">
                <li>
                  <button onClick={() => handleLink("landing")} className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer">
                    Earn Cash
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onAnchorClick("features")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all inline-block bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onAnchorClick("how-it-works")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all inline-block bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    How it Works
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-text-primary font-display">Company</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary list-none">
                <li>
                  <button onClick={() => handleLink("about")} className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onComingSoon("Privacy Policy")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onComingSoon("Terms of Service")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-text-primary font-display">Support</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-text-secondary list-none">
                <li>
                  <button
                    onClick={() => onAnchorClick("faqs")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <a href="mailto:support@binnycash.com" className="hover:text-accent-green hover:translate-x-1 transition-all">
                    Contact Email
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onComingSoon("Community Chat")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Community Chat
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} BinnyCash. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">BinnyCash — Earn More, Anytime, Anywhere. 💰🚀</p>
        </div>
      </div>
    </footer>
  );
}
