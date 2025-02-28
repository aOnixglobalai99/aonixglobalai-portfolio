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
        'Why choose AonixGlobalAI for education and e-learning solutions?',
      answer:
        'AonixGlobalAI crafts innovative, secure, and scalable web and mobile apps for education, enhancing learning experiences and streamlining processes with advanced technologies like AI and real-time analytics.',
    },
    {
      question: 'What e-learning solutions does AonixGlobalAI provide?',
      answer:
        'We offer custom e-learning platforms, learning management systems (LMS), virtual classrooms, AI-enhanced adaptive learning, gamified solutions, and mobile learning apps, all tailored to boost engagement and education outcomes.',
    },
    {
      question: 'Can AonixGlobalAI integrate with existing educational tools?',
      answer:
        'Yes, we seamlessly integrate our platforms with tools like Zoom, Google Classroom, and AI tutoring systems, creating a unified ecosystem that enhances functionality for web and mobile applications.',
    },
    {
      question: 'How does AonixGlobalAI ensure security and accessibility?',
      answer:
        'We use robust encryption and comply with WCAG standards to ensure secure, inclusive platforms that protect data and provide equal access for all learners on web and mobile.',
    },
    {
      question: 'Which education sectors does AonixGlobalAI serve?',
      answer:
        'We support schools, universities, EdTech startups, corporate training, K-12, MOOCs, vocational programs, tutoring services, and more, delivering tailored solutions for diverse educational needs.',
    },
    {
      question:
        'Does AonixGlobalAI offer ongoing support for e-learning platforms?',
      answer:
        'Yes, we provide continuous maintenance, updates, and support to keep your web and mobile e-learning platforms secure, scalable, and aligned with evolving educational demands.',
    },
    {
      question: 'What technologies does AonixGlobalAI use for e-learning?',
      answer:
        'We leverage AI for personalized learning, gamification for engagement, and cross-platform design for accessibility, building cutting-edge tools that transform education delivery.',
    },
    {
      question: 'How much do e-learning solutions from AonixGlobalAI cost?',
      answer:
        'Costs depend on project scope and complexity. Contact us for a customized quote tailored to your educational institution or organization’s specific requirements.',
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
