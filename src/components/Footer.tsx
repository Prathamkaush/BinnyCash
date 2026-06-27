import Image from "next/image";

// Custom Lucide-style Brand Icons
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M17.3 5.3A12.7 12.7 0 0 0 12 4a12.7 12.7 0 0 0 -5.3 1.3C4.1 6.8 2 10.3 2 14.3c0 2 1.3 3.9 3.3 4.5l1-1.8a10.6 10.6 0 0 1 -3.1 -1.5l.8-.7c1.7 1.5 4 2.5 6.7 2.7l.2-.2c-.3 0-.7-.2-1-.4a5 5 0 0 1 -.7-.8l.2-.2h.2c1.7.5 3.5.7 5.2.7h.2l.2.2a5 5 0 0 1 -.7.8 4.7 4.7 0 0 1 -1 .4l.2.2c2.7-.2 5-1.2 6.7-2.7l.8.7a10.6 10.6 0 0 1 -3.1 1.5l1 1.8c2-.6 3.3-2.5 3.3-4.5 0-4-2.1-7.5-4.7-9zm-8.3 8.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3zm6 0c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z" />
  </svg>
);

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
              <a
                href="https://x.com/binnycash_com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="X (formerly Twitter)"
              >
                <XIcon />
              </a>
              <a
                href="https://discord.gg/KrwPb6V8a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/binnycash/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/binnycash_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-tertiary border border-card-border flex items-center justify-center text-text-primary hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
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
                    onClick={() => handleLink("privacy")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLink("terms")}
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
                    onClick={() => handleLink("community")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    Community Chat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLink("support")}
                    className="hover:text-accent-green hover:translate-x-1 transition-all bg-transparent border-none cursor-pointer text-left p-0 text-text-secondary text-xs"
                  >
                    live support
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
