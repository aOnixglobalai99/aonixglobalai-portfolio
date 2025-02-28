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
        'Why choose AonixGlobalAI for automotive and smart mobility solutions?',
      answer:
        'AonixGlobalAI delivers innovative, secure, and scalable web and mobile apps tailored for automotive and smart mobility, enhancing connectivity, efficiency, and user experiences with advanced technologies like AI and IoT.',
    },
    {
      question: 'What automotive solutions does AonixGlobalAI provide?',
      answer:
        'We offer intelligent vehicle connectivity, autonomous driving software, smart fleet management, EV tech solutions, mobility platforms, and telematics/driver assistance apps, all designed to redefine transportation.',
    },
    {
      question: 'Can AonixGlobalAI enhance existing automotive systems?',
      answer:
        'Yes, we integrate IoT, cloud, and AI technologies into existing systems, upgrading web and mobile apps with real-time diagnostics, predictive maintenance, and smart connectivity features.',
    },
    {
      question:
        'How does AonixGlobalAI ensure security and compliance in automotive apps?',
      answer:
        'We implement robust cybersecurity, encrypted data transmission, and adhere to global automotive standards, ensuring your web and mobile apps are secure and compliant with industry regulations.',
    },
    {
      question: 'Which automotive sectors does AonixGlobalAI serve?',
      answer:
        'We support automotive manufacturing, EVs, autonomous driving, ride-hailing, fleet management, smart cities, public transport, insurance, and aftermarket services with tailored digital solutions.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing support for automotive apps?',
      answer:
        'Yes, we provide continuous maintenance, updates, and support to keep your web and mobile automotive platforms secure, scalable, and aligned with evolving industry needs.',
    },
    {
      question:
        'What technologies does AonixGlobalAI use for automotive solutions?',
      answer:
        'We leverage AI for analytics and autonomy, IoT for connectivity, and cloud computing for scalability, building cutting-edge platforms that drive smart mobility innovations.',
    },
    {
      question: 'How much do automotive solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and complexity. Contact us for a customized quote tailored to your automotive or mobility business’s specific requirements.',
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
