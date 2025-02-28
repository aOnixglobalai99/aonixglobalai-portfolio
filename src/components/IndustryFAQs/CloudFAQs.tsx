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
      question: 'Why choose AonixGlobalAI for cloud computing solutions?',
      answer:
        'AonixGlobalAI delivers secure, scalable, and innovative cloud-based web and mobile apps, empowering businesses with cutting-edge tools to enhance efficiency, flexibility, and growth across industries.',
    },
    {
      question: 'What cloud services does AonixGlobalAI provide?',
      answer:
        'We offer custom cloud app development, SaaS platform engineering, infrastructure optimization, cloud security, DevOps automation, and seamless mobile/web app integration with cloud ecosystems.',
    },
    {
      question: 'Can AonixGlobalAI optimize existing cloud systems?',
      answer:
        'Yes, we refine cloud environments to boost performance, reduce costs, and enhance security, while integrating your web and mobile apps with multi-cloud or hybrid setups like AWS, Azure, and Google Cloud.',
    },
    {
      question: 'How does AonixGlobalAI ensure cloud security and compliance?',
      answer:
        'We implement advanced encryption, access controls, and adhere to regulations like GDPR and ISO 27001, ensuring your cloud-based apps are secure and compliant with industry standards.',
    },
    {
      question:
        'Which industries benefit from AonixGlobalAI’s cloud solutions?',
      answer:
        'We serve tech startups, healthcare, finance, e-commerce, education, manufacturing, media, government, telecom, and more, delivering tailored cloud platforms for diverse business needs.',
    },
    {
      question: 'Does AonixGlobalAI offer ongoing cloud support?',
      answer:
        'Yes, we provide continuous maintenance, updates, and optimization to ensure your cloud-based web and mobile apps remain reliable, scalable, and aligned with your evolving requirements.',
    },
    {
      question: 'What technologies does AonixGlobalAI use for cloud solutions?',
      answer:
        'We leverage cloud platforms (AWS, Azure, Google Cloud), DevOps tools for automation, and APIs for integrations, building high-performance, scalable applications tailored to your business.',
    },
    {
      question: 'How much do cloud solutions from AonixGlobalAI cost?',
      answer:
        'Costs vary based on project scope and specific needs. Contact us for a customized quote tailored to your cloud computing or SaaS requirements.',
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
