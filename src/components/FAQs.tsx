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
        'Why should I choose AonixGlobalAI for software and mobile app development?',
      answer:
        'AonixGlobalAI stands out for its innovative solutions, skilled professionals, and customer-focused approach, delivering high-quality software tailored to client needs.',
    },
    {
      question:
        'Does AonixGlobalAI offer ongoing app maintenance and support services?',
      answer:
        'Yes, we offer comprehensive maintenance and support services, including updates, bug fixes, performance enhancements, and technical assistance to ensure your app stays functional and up to date.',
    },
    {
      question: 'How does AonixGlobalAI ensure software security and quality?',
      answer:
        'We adhere to industry best practices, conduct rigorous testing, and follow strict security protocols to maintain high-quality and secure software solutions.',
    },
    {
      question: 'How much do software development services cost?',
      answer:
        'Pricing varies based on project complexity and requirements. Get in touch with us for a customized quote based on your specific needs.',
    },
    {
      question: 'How do you manage software development projects efficiently?',
      answer:
        'We follow agile development methodologies, provide regular progress updates, and collaborate closely with clients to ensure smooth project execution.',
    },
    {
      question:
        'Does AonixGlobalAI develop software for both mobile and web platforms?',
      answer:
        'Yes, we develop software for both mobile and web platforms, ensuring seamless functionality and a consistent user experience across devices and operating systems.',
    },
    {
      question:
        'Can AonixGlobalAI help with software integration and data migration?',
      answer:
        'Absolutely! We facilitate seamless system integration and smooth data migration while maintaining data accuracy and minimizing disruptions to business operations.',
    },
    {
      question: 'What development methodologies does AonixGlobalAI use?',
      answer:
        'Our development approach is primarily based on Agile and Scrum methodologies, enabling iterative progress, flexibility, and continuous client feedback for optimized results.',
    },
  ];

  return (
    <div className="client-footer-div bg-[#078dd7] text-white p-6 md:p-12 w-full ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
