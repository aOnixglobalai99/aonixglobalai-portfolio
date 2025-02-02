'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question:
        'What makes AonixGlobalAI the best software and mobile app development company?',
      answer:
        'AonixGlobalAI is known for its innovative approach, experienced team, and client-centric solutions, ensuring high-quality results.',
    },
    {
      question: 'Do you offer app maintenance and support services?',
      answer:
        'AonixGlobalAI certainly offers application maintenance and support services. This covers periodical updates, bug fixes, performance tuning, and technical support to ensure that your application runs smoothly and stays up to date with the latest standards and requirements.',
    },
    {
      question:
        'How do you ensure the security and quality of the software you develop?',
      answer:
        'We follow best practices, conduct thorough testing, and adhere to industry standards to ensure security and quality.',
    },
    {
      question: 'How much do software development services cost?',
      answer:
        "Our pricing depends on the project's scope and complexity. Contact us for a customized quote.",
    },
    {
      question: 'How does AonixGlobalAI manage software development projects?',
      answer:
        'We use agile methodologies, regular updates, and client collaboration to ensure seamless project management.',
    },
  ];

  return (
    <div className="client-footer-div bg-[#078dd7] text-white p-6 md:p-12 w-full ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          FAQs
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-blue-700 pb-4">
              <button
                className="w-full text-left text-lg md:text-xl font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 w-full">
                  <p className="text-base md:text-lg text-blue-200">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
