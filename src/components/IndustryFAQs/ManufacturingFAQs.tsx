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
        'Why choose AonixGlobalAI for manufacturing and automation solutions?',
      answer:
        'AonixGlobalAI delivers innovative, secure, and scalable web and mobile apps tailored for manufacturing and industrial automation, enhancing productivity and efficiency with advanced technologies like AI and IoT.',
    },
    {
      question: 'What manufacturing solutions does AonixGlobalAI provide?',
      answer:
        'We offer industrial IoT monitoring, AI-driven robotics, digital twins, predictive maintenance, smart supply chain apps, and custom workflow tools, all designed to streamline manufacturing processes.',
    },
    {
      question:
        'Can AonixGlobalAI integrate with existing manufacturing systems?',
      answer:
        'Yes, we seamlessly integrate our web and mobile apps with ERP, MES, and automation systems, enhancing data flow and operational coordination for your manufacturing environment.',
    },
    {
      question: 'How does AonixGlobalAI ensure security in manufacturing apps?',
      answer:
        'We implement robust security protocols and cloud-connected IoT solutions, ensuring your web and mobile apps protect sensitive industrial data while maintaining scalability and reliability.',
    },
    {
      question: 'Which manufacturing sectors does AonixGlobalAI serve?',
      answer:
        'We support automotive, pharmaceuticals, electronics, food processing, energy, textiles, petrochemicals, heavy machinery, logistics, and metallurgy with tailored smart manufacturing solutions.',
    },
    {
      question:
        'Does AonixGlobalAI offer ongoing support for manufacturing apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and support to keep your web and mobile manufacturing platforms secure, efficient, and aligned with evolving industry demands.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use for manufacturing solutions?',
      answer:
        'We leverage AI for optimization, IoT for connectivity, machine learning for predictive maintenance, and cloud computing for scalable, real-time industrial applications.',
    },
    {
      question: 'How much do manufacturing solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your manufacturing or automation needs.',
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
