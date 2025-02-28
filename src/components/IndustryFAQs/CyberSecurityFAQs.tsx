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
      question: 'Why choose AonixGlobalAI for cybersecurity solutions?',
      answer:
        'AonixGlobalAI provides advanced, secure, and scalable web and mobile app solutions with top-tier cybersecurity features, protecting industries like healthcare and finance from evolving threats while ensuring reliability.',
    },
    {
      question: 'What cybersecurity services does AonixGlobalAI offer?',
      answer:
        'We provide risk analysis, data encryption, endpoint protection, compliance frameworks, incident recovery, and custom security integrations, all tailored to safeguard your web and mobile applications.',
    },
    {
      question: 'Can AonixGlobalAI enhance security for existing apps?',
      answer:
        'Yes, we integrate bespoke security features like firewalls, authentication, and intrusion detection into your existing web and mobile apps, enhancing protection without compromising functionality.',
    },
    {
      question: 'How does AonixGlobalAI ensure data protection and compliance?',
      answer:
        'We use robust encryption, multi-factor authentication, and align with standards like GDPR, HIPAA, and PCI-DSS to protect data and ensure your apps meet stringent regulatory requirements.',
    },
    {
      question:
        'Which industries benefit from AonixGlobalAI’s cybersecurity solutions?',
      answer:
        'We serve banking, healthcare, government, e-commerce, telecom, automotive, education, and more, delivering tailored cybersecurity solutions across diverse sectors.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing cybersecurity support?',
      answer:
        'Yes, we provide 24/7 monitoring, maintenance, and rapid-response strategies to keep your web and mobile apps secure and resilient against threats, ensuring continuous protection.',
    },
    {
      question: 'What technologies does AonixGlobalAI use for cybersecurity?',
      answer:
        'We leverage AI for real-time threat detection, automation for proactive defense, and scalable architectures to build secure, future-ready web and mobile applications.',
    },
    {
      question: 'How much do cybersecurity solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and specific security needs. Contact us for a customized quote tailored to your organization’s cybersecurity requirements.',
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
