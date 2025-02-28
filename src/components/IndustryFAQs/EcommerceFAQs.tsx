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
      question: 'Why choose AonixGlobalAI for e-commerce and retail solutions?',
      answer:
        'AonixGlobalAI delivers innovative, secure, and scalable web and mobile apps tailored for e-commerce and retail, enhancing efficiency, customer engagement, and growth with advanced technologies like AI and data analytics.',
    },
    {
      question: 'What e-commerce solutions does AonixGlobalAI provide?',
      answer:
        'We offer custom online storefronts, POS and inventory systems, AI-driven personalization tools, omnichannel platforms, secure payment processing, and mobile commerce apps, all designed to optimize retail operations and user experiences.',
    },
    {
      question: 'Can AonixGlobalAI integrate with existing retail systems?',
      answer:
        'Yes, we seamlessly integrate third-party services like payment gateways, logistics providers, and ERP software into your e-commerce platforms, creating a cohesive ecosystem for web and mobile applications.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security for e-commerce platforms?',
      answer:
        'We implement advanced encryption, fraud detection, and security protocols to protect customer data and transactions, ensuring trust and compliance across all web and mobile e-commerce solutions.',
    },
    {
      question: 'Which e-commerce and retail sectors does AonixGlobalAI serve?',
      answer:
        'We support digital marketplaces, fashion retailers, grocery delivery, consumer electronics, luxury brands, B2B wholesale, subscription models, and more, delivering tailored solutions for diverse retail needs.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing support for e-commerce apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and optimization to keep your web and mobile e-commerce platforms secure, efficient, and aligned with evolving market trends.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use for e-commerce solutions?',
      answer:
        'We leverage AI for personalization and analytics, cloud computing for scalability, and responsive design for mobile optimization, building cutting-edge platforms that drive retail success.',
    },
    {
      question: 'How much do e-commerce solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your e-commerce or retail business’s specific requirements.',
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
