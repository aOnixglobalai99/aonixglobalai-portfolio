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
        'Why choose AonixGlobalAI for aviation and aerospace solutions?',
      answer:
        'AonixGlobalAI provides innovative, secure, and scalable web and mobile apps tailored for aviation and aerospace, enhancing operational efficiency, safety, and compliance with advanced technologies like AI, IoT, and cloud computing.',
    },
    {
      question: 'What types of aviation software does AonixGlobalAI develop?',
      answer:
        'We offer custom solutions including flight management apps, air traffic systems, analytics platforms, satellite communication tools, training simulators, and mobile maintenance dashboards, all designed to optimize workflows and safety.',
    },
    {
      question:
        'Can AonixGlobalAI integrate and enhance existing aviation systems?',
      answer:
        'Yes, we integrate emerging technologies like AI and IoT into existing systems and develop modern web and mobile apps to improve functionality, connectivity, and performance for aviation and aerospace operations.',
    },
    {
      question: 'How does AonixGlobalAI ensure safety and compliance?',
      answer:
        'We adhere to global aviation standards, embedding robust security and compliance features into our apps to meet regulations from authorities like the FAA and EASA, ensuring safety and reliability.',
    },
    {
      question:
        'Which aviation and aerospace sectors does AonixGlobalAI serve?',
      answer:
        'We support commercial airlines, aerospace engineering, space exploration, defense, air traffic management, satellite operations, drone development, and more, delivering tailored solutions across the industry.',
    },
    {
      question: 'Does AonixGlobalAI provide ongoing support for aviation apps?',
      answer:
        'Yes, we offer comprehensive maintenance, updates, and technical support to keep your aviation and aerospace web and mobile apps secure, efficient, and aligned with evolving industry demands.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use in aviation solutions?',
      answer:
        'We leverage AI for predictive maintenance, IoT for connectivity, cloud computing for scalability, and satellite tech for global communication, building cutting-edge apps for aviation and aerospace.',
    },
    {
      question: 'How much do aviation solutions from AonixGlobalAI cost?',
      answer:
        'Pricing depends on project scope and complexity. Contact us for a customized quote tailored to your aviation or aerospace organization’s specific needs.',
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
