"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can my safari be completely bespoke?",
      answer:
        "Absolutely. Every Seruyshi journey is thoughtfully tailored around the way you want to travel, from destinations and accommodation to experiences.",
    },
    {
      question: "How far in advance should I book my safari?",
      answer:
        "We recommend planning as early as possible, especially for peak travel periods. This gives us more flexibility when selecting your preferred lodges, camps and experiences.",
    },
    {
      question: "Can I combine different destinations or countries?",
      answer:
        "Yes. We do create journeys that combine different regions within one country or extend across multiple African destinations, depending on your interests, timing and travel style.",
    },
    {
      question: "What is included in my safari?",
      answer:
        "Your itinerary includes accommodation, transportation, selected experiences, transfers and other arrangements depending on the journey we create together. Everything is clearly outlined before you travel.",
    },
    {
      question: "When is the best time to visit Kenya?",
      answer:
        "Kenya can be enjoyed throughout the year, with different seasons offering different experiences. We will help you choose the timing and destinations that best suit what you want to see and experience.",
    },
    {
      question: "Can you arrange special occasions?",
      answer:
        "Yes. Whether you're celebrating a honeymoon, birthday, anniversary or simply a special trip, we can thoughtfully incorporate meaningful experiences and details into your journey.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">

      <div className="faq-intro">
        <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>

        <h2>
          Everything you need to know
          <br />
          before your journey begins.
        </h2>

        <p className="faq-intro-text">
          From planning your itinerary to knowing what to expect,
          we're here to make every part of your journey feel simple.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "faq-item-open" : ""
            }`}
            key={faq.question}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;