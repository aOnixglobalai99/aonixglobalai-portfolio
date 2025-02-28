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
        'Why choose AonixGlobalAI for telecom and networking solutions?',
      answer:
        'AonixGlobalAI provides innovative, secure, and scalable web and mobile apps tailored for telecom, enhancing connectivity and efficiency with advanced technologies like AI and cloud computing.',
    },
    {
      question: 'What telecom solutions does AonixGlobalAI offer?',
      answer:
        'We provide telecom consulting, custom software, 5G/IoT apps, cloud-based solutions, network security tools, and VoIP platforms, all designed to optimize telecom operations and user experiences.',
    },
    {
      question: 'Can AonixGlobalAI enhance existing telecom systems?',
      answer:
        'Yes, we integrate AI, edge computing, and cloud technologies into your web and mobile apps, improving network performance, security, and scalability for existing telecom infrastructures.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security and compliance in telecom apps?',
      answer:
        'We use enterprise-grade encryption and align with regulations like FCC, TRAI, and ITU, ensuring your telecom apps are secure, compliant, and resilient against threats.',
    },
    {
      question: 'Which telecom sectors does AonixGlobalAI serve?',
      answer:
        'We support telecom providers, broadband companies, mobile operators, cloud infrastructure, VoIP platforms, satellite communications, IoT solutions, defense networks, and more with tailored apps.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing support for telecom apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and support to keep your web and mobile telecom platforms secure, scalable, and aligned with industry advancements.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use for telecom solutions?',
      answer:
        'We leverage AI for smart functionality, cloud computing for flexibility, 5G/IoT for connectivity, and edge computing for low-latency, high-performance telecom applications.',
    },
    {
      question: 'How much do telecom solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your telecom or networking needs.',
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
