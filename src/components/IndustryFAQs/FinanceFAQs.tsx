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
      question: 'Why choose AonixGlobalAI for fintech and banking solutions?',
      answer:
        'AonixGlobalAI provides secure, scalable, and user-centric web and mobile apps for financial organizations. Leveraging cutting-edge technologies like AI and blockchain, we streamline processes, enhance customer interactions, and ensure compliance with standards like PCI-DSS and GDPR.',
    },
    {
      question: 'What types of financial software does AonixGlobalAI develop?',
      answer:
        'We offer custom solutions including digital payment apps, wealth management platforms, lending and credit risk tools, and modernized banking systems, all designed to optimize workflows and improve user experiences on web and mobile.',
    },
    {
      question:
        'Does AonixGlobalAI support system modernization and integration?',
      answer:
        'Yes, we upgrade legacy banking systems with modern technologies and integrate APIs, payment gateways, and financial systems into a cohesive ecosystem, enhancing performance and connectivity for web and mobile platforms.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security and regulatory compliance?',
      answer:
        'We prioritize data security with encryption and secure APIs, while adhering to PCI-DSS, GDPR, and regional financial regulations, ensuring your web and mobile apps are both safe and compliant.',
    },
    {
      question: 'Which financial industries does AonixGlobalAI serve?',
      answer:
        'We cater to commercial banks, fintech startups, wealth management firms, insurance companies, payment processors, digital lending platforms, trading platforms, and more, including blockchain and cryptocurrency ecosystems.',
    },
    {
      question: 'Can AonixGlobalAI provide ongoing support for financial apps?',
      answer:
        'Yes, we offer comprehensive maintenance and support services, including updates, performance optimization, and technical assistance, to keep your fintech web and mobile apps reliable and future-ready.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use in fintech development?',
      answer:
        'We leverage AI for fraud detection and analytics, blockchain for secure transactions, and advanced frameworks to build high-performance, scalable financial solutions tailored to your needs.',
    },
    {
      question: 'How much do fintech solutions from AonixGlobalAI cost?',
      answer:
        'Pricing varies based on project complexity, scope, and specific requirements. Reach out to us for a customized quote tailored to your financial organization’s goals.',
    },
  ];

  return (
    <div className="bg-[rgb(26,36,115)] text-white p-6 md:p-12 w-full">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          FAQs
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-blue-700 pb-4">
              <button
                className="w-full text-left text-lg md:text-xl font-semibold flex justify-between items-center text-sky-200"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 w-full">
                  <p className="text-base md:text-lg text-gray-100">
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
