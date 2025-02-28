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
      question: 'Why choose AonixGlobalAI for blockchain and Web3 solutions?',
      answer:
        'AonixGlobalAI delivers secure, scalable, and innovative web and mobile apps for blockchain and Web3, empowering industries like healthcare with decentralized platforms built on cutting-edge technology.',
    },
    {
      question: 'What blockchain solutions does AonixGlobalAI provide?',
      answer:
        'We offer custom DApp development, smart contract engineering, NFT ecosystems, DeFi solutions, supply chain platforms, and identity management apps, all tailored for decentralized environments.',
    },
    {
      question: 'Can AonixGlobalAI integrate blockchain with existing systems?',
      answer:
        'Yes, we integrate blockchain and Web3 functionalities into your web and mobile apps, enabling seamless compatibility with multiple networks like Ethereum and Polygon for enhanced performance.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security and compliance in blockchain apps?',
      answer:
        'We use rigorous smart contract audits, advanced encryption, and adhere to AML/KYC and blockchain security standards, ensuring your apps are secure and compliant with regulations.',
    },
    {
      question:
        'Which industries benefit from AonixGlobalAI’s blockchain solutions?',
      answer:
        'We serve crypto markets, DeFi, gaming, logistics, healthcare, real estate, energy, government, IP protection, and cybersecurity with tailored blockchain and Web3 applications.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing support for blockchain apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and support to keep your blockchain-based web and mobile apps secure, scalable, and aligned with evolving decentralized technologies.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use for blockchain solutions?',
      answer:
        'We leverage blockchain networks (Ethereum, Binance Smart Chain), smart contracts, Web3 frameworks, and tokenization tools to build high-performing, decentralized platforms.',
    },
    {
      question: 'How much do blockchain solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your blockchain or Web3 project requirements.',
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
