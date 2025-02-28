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
      question: 'Why choose AonixGlobalAI for healthcare IT solutions?',
      answer:
        'AonixGlobalAI delivers secure, scalable, and innovative web and mobile applications tailored for healthcare. With expertise in AI-driven analytics, cloud computing, and telemedicine, we enhance patient care, streamline workflows, and ensure compliance with standards like HIPAA and GDPR.',
    },
    {
      question: 'What types of healthcare software does AonixGlobalAI develop?',
      answer:
        'We specialize in bespoke healthcare software, including custom web and mobile apps, telemedicine platforms, and integrated systems, designed to improve operational efficiency and patient engagement across hospitals, telehealth platforms, and more.',
    },
    {
      question:
        'Does AonixGlobalAI offer integration and modernization services?',
      answer:
        'Yes, we provide seamless system integration and next-gen upgrades for existing healthcare apps and web platforms, connecting them into unified ecosystems and modernizing them with cutting-edge technologies like AI and IoT.',
    },
    {
      question: 'How does AonixGlobalAI ensure data security and compliance?',
      answer:
        'We prioritize encryption, secure APIs, and strict adherence to healthcare regulations like HIPAA and GDPR, ensuring your web and mobile solutions protect sensitive patient data while maintaining high performance.',
    },
    {
      question: 'What industries does AonixGlobalAI serve in healthcare?',
      answer:
        'We cater to a wide range of healthcare sectors, including hospitals, telehealth platforms, mental healthcare providers, pharmaceutical R&D, public health agencies, and veterinary clinics, among others.',
    },
    {
      question:
        'Can AonixGlobalAI support ongoing maintenance for healthcare apps?',
      answer:
        'Absolutely! We offer comprehensive support, including updates, performance optimization, and technical assistance, to keep your healthcare web and mobile applications running smoothly and adapting to future needs.',
    },
    {
      question:
        'What development approach does AonixGlobalAI use for healthcare solutions?',
      answer:
        'We employ agile methodologies, providing iterative updates, transparency, and close collaboration with clients to deliver flexible, high-quality healthcare software that meets your specific goals.',
    },
    {
      question: 'How much do healthcare IT solutions from AonixGlobalAI cost?',
      answer:
        'Costs depend on project scope, complexity, and specific requirements. Contact us for a personalized quote tailored to your healthcare organization’s needs.',
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
