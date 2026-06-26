"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const faqs: FaqItem[] = [
    {
      question: "Is BinnyCash really free to use?",
      answer: "Yes, BinnyCash is 100% free to join and use. We will never ask you for fees or credit card numbers. You earn cash by completing offers, and we pay you out of the advertising revenues we receive from brand partners.",
    },
    {
      question: "How much money can I actually earn?",
      answer: "Your earnings depend on your location and the amount of time you invest. Active users who play games regularly, complete high-paying survey walls, and refer friends earn between $5.00 and $25.00 per day. Some power users withdraw over $100.00 weekly.",
    },
    {
      question: "What is the minimum withdrawal limit?",
      answer: "Our minimum withdrawal threshold is incredibly low — starting at just $2.00 for selected payout gateways like Litecoin, and $5.00 for PayPal and Google Play Gift Cards. This allows you to test our payout speeds almost immediately after starting.",
    },
    {
      question: "How long do payouts take to process?",
      answer: "We take pride in fast processing. Cryptocurrency payouts (Bitcoin, Litecoin) are delivered instantly or within 10 minutes. PayPal cashouts and digital gift cards are reviewed and processed within 1 to 12 hours max.",
    },
    {
      question: "Can I refer my friends to earn more?",
      answer: "Absolutely! Our referral program awards you a lifetime 10% commission on everything your invitees earn. There is no limit to the number of friends you can refer, and your friends still receive 100% of their earned task rates.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full bg-bg-secondary/40 border-y border-card-border py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">FREQUENTLY ASKED</span>
          <h2 className="text-3xl md:text-4.5xl font-extrabold font-display text-text-primary mt-2">
            Got Questions? We Have Answers
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto mt-4 leading-relaxed">
            Read through our most common questions to learn how to maximize your reward earnings.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-card-bg border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-accent-purple shadow-glow-purple" : "border-card-border"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left flex items-center justify-between p-6 bg-transparent border-none cursor-pointer focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold font-display text-text-primary">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-text-primary font-bold text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-accent-purple text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion content */}
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="p-6 pt-0 text-sm text-text-secondary border-t border-white/5 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
