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
    <div className="bg-gradient-to-b from-white to-blue-50 p-6 md:p-12 w-full">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#121a5e]">
          <span className="relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#078dd7] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2 pb-4">
            Frequently Asked Questions
          </span>
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border-l-4 border-[#078dd7] transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full text-left p-5 md:p-6 text-lg md:text-xl font-semibold flex justify-between items-center text-[#121a5e]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4">{faq.question}</span>
                <span className="text-[#078dd7] transition-transform duration-300 transform flex-shrink-0 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-6 pt-0 md:pt-0 border-t border-gray-100">
                  <p className="text-base md:text-lg text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <button className="bg-[#078dd7] rounded-md text-lg font-semibold text-white py-3 px-8 hover:bg-[#077bc8] transition-colors duration-300 shadow-md">
            Contact Us For More Information
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FAQ;
