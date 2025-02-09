'use client'; // If using Next.js 13+ with App Router

import { useRouter } from 'next/navigation';
import React from 'react';

const Industry = () => {
  const router = useRouter();
  const cardData = [
    {
      title: 'Healthcare IT Solutions',
      description:
        'Develops EHR, telemedicine, AI diagnostics, and patient management systems to improve healthcare efficiency, compliance, and accessibility.',
      imageUrl: '/images/industry/Healthcare-IT-Solutions.jpg',
    },
    {
      title: 'Fintech & Banking Solutions',
      description:
        'Provides secure payment gateways, AI fraud detection, blockchain transactions, and mobile banking apps for seamless and efficient financial services.',
      imageUrl: '/images/industry/Fintech.jpg',
    },
    {
      title: 'Telecom & Networking',
      description:
        'Optimizes network management, 5G deployment, VoIP, AI-driven maintenance, and billing automation for improved connectivity and telecom services.',
      imageUrl: '/images/industry/Telecom-&-Networking.webp',
    },
    {
      title: 'Aviation & Aerospace Technology',
      description:
        'Develops flight scheduling, air traffic monitoring, predictive maintenance, and passenger experience solutions to enhance aviation operations.',
      imageUrl: '/images/industry/Aviation.webp',
    },
    {
      title: 'E-Commerce & Retail Tech',
      description:
        'Builds AI-powered recommendation engines, inventory management, omnichannel retail platforms, and secure payment solutions for seamless online shopping experiences.',
      imageUrl: '/images/industry/E-Commerce.jpg',
    },
    {
      title: 'Cybersecurity & Data Protection',
      description:
        'Offers AI-based threat detection, cloud security, identity management, and encryption to safeguard businesses from evolving cyber threats and attacks.',
      imageUrl: '/images/industry/cyber_security.jpeg',
    },
    {
      title: 'Education & E-Learning Technology',
      description:
        'Develops AI-driven learning platforms, virtual classrooms, interactive AR/VR tools, and remote assessment solutions for effective digital education and training.',
      imageUrl: '/images/industry/Education.webp',
    },
    {
      title: 'Cloud Computing & SaaS Solutions',
      description:
        'Provides cloud applications, multi-cloud strategies, serverless computing, and SaaS-based business solutions for enterprises, startups, and organizations.',
      imageUrl: '/images/industry/Cloud-Computing.webp',
    },
    {
      title: 'Automotive & Smart Mobility',
      description:
        'Creates AI-driven self-driving tech, fleet management, IoT-powered vehicle tracking, and predictive maintenance solutions for transportation.',
      imageUrl: '/images/industry/Automotive.jpg',
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description:
        'Develops DApps, smart contracts, NFT marketplaces, cryptocurrency exchanges, and blockchain-based identity management for the Web3 ecosystem.',
      imageUrl: '/images/industry/Blockchain.webp',
    },
    {
      title: 'AI & Machine Learning Solutions',
      description:
        'Offers AI model development, NLP, predictive analytics, and automation solutions for various industries, businesses, organizations, and enterprises.',
      imageUrl: '/images/industry/AI.webp',
    },
    {
      title: 'Smart Manufacturing Solutions',
      description:
        'Delivers IoT-enabled automation, predictive maintenance, robotics integration, and real-time supply chain analytics for industries, factories, and enterprises.',
      imageUrl: '/images/industry/Manufacturing.jpg',
    },
  ];

  return (
    <div id="industries" className="">
      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto mb-[100px]">
        <div className="text-center px-5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl  sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900">
              Our Industry Expertise
            </h2>
          </div>
          <p className="text-center text-[15px] mt-5 px-2 md:px-10">
            With broad experience across a number of sectors, we offer
            specialized solutions to meet the unique needs of each industry. The
            following are only a few of the domains where we can provide
            beneficial outcomes for any business:
          </p>
        </div>
        <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
          {/* Industry Cards Grid */}
          <div className="pt-8 md:pt-[100px]  flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="backgrounddd bg-white text-center shadow-md flex flex-col items-start justify-between gap-5 border rounded-lg overflow-hidden"
              >
                <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-4 relative">
                  <h3 className="font-bold text-lg absolute top-0">
                    {card.title}
                  </h3>
                  <p className="text-left text-sm pt-10">{card.description}</p>
                </div>
                <div className="mb-4">
                  <button
                    className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 ml-7"
                    onClick={() =>
                      router.push(
                        `/industries/${card.title.replace(/\s+/g, '-')}`
                      )
                    }
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
