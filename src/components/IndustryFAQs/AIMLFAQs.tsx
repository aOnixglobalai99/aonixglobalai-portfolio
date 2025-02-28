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
        'Why choose AonixGlobalAI for AI and machine learning solutions?',
      answer:
        'AonixGlobalAI delivers secure, scalable, and innovative web and mobile apps powered by advanced AI/ML, enhancing efficiency and user experiences across industries with cutting-edge technology.',
    },
    {
      question: 'What AI/ML solutions does AonixGlobalAI provide?',
      answer:
        'We offer intelligent chatbots, predictive analytics, computer vision, natural language understanding, healthcare AI tools, and custom workflow automation, all tailored for web and mobile platforms.',
    },
    {
      question: 'Can AonixGlobalAI integrate AI into existing systems?',
      answer:
        'Yes, we seamlessly integrate AI models with your web and mobile apps via cloud services and APIs, enhancing functionality and enabling real-time data-driven capabilities.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security and compliance in AI solutions?',
      answer:
        'We implement robust security protocols and comply with standards like GDPR and HIPAA, ensuring your AI-powered apps are secure, ethical, and protect sensitive data.',
    },
    {
      question:
        'Which industries benefit from AonixGlobalAI’s AI/ML solutions?',
      answer:
        'We serve healthcare, finance, retail, manufacturing, education, transportation, cybersecurity, automotive, media, and energy with tailored AI-driven web and mobile applications.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing support for AI/ML apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and optimization to keep your AI-powered web and mobile apps secure, scalable, and aligned with evolving business needs.',
    },
    {
      question: 'What technologies does AonixGlobalAI use for AI/ML solutions?',
      answer:
        'We leverage deep learning, neural networks, cloud integration, and advanced frameworks to build high-performing, adaptable AI/ML solutions for web and mobile platforms.',
    },
    {
      question: 'How much do AI/ML solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your AI or machine learning project requirements.',
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
