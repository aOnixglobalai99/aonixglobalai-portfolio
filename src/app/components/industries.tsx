import React from 'react';
import Image from 'next/image';
import Healthcare from '../assets/images/Healthcare-IT-Solutions.jpg';
import Fintech from '../assets/images/Fintech.jpg';
import Telecom from '../assets/images/Telecom-&-Networking.webp';
import Aviation from '../assets/images/Aviation.webp';
import Ecommerce from '../assets/images/E-Commerce.jpg';
import Cybersec from '../assets/images/cyber_security.jpeg';
import Education from '../assets/images/Education.webp';
import Cloud from '../assets/images/Cloud-Computing.webp';
import Automotive from '../assets/images/Automotive.jpg';
import Blockchain from '../assets/images/Blockchain.webp';
import AI from '../assets/images/AI.webp';
import Manufacturing from '../assets/images/Manufacturing.jpg';

const Industry = () => {
  const cardData = [
    {
      title: 'Healthcare IT Solutions',
      description:
        'Develops EHR, telemedicine, AI diagnostics, and patient management systems to improve healthcare efficiency, compliance, and accessibility.',
      imageUrl: Healthcare,
    },
    {
      title: 'Fintech & Banking Solutions',
      description:
        'Provides secure payment gateways, AI fraud detection, blockchain transactions, and mobile banking apps for seamless financial services.',
      imageUrl: Fintech,
    },
    {
      title: 'Telecom & Networking',
      description:
        'Optimizes network management, 5G deployment, VoIP, AI-driven maintenance, and billing automation for improved connectivity and telecom services.',
      imageUrl: Telecom,
    },
    {
      title: 'Aviation & Aerospace Technology',
      description:
        'Develops flight scheduling, air traffic monitoring, predictive maintenance, and passenger experience solutions to enhance aviation operations.',
      imageUrl: Aviation,
    },
    {
      title: 'E-Commerce & Retail Tech',
      description:
        'Builds AI-powered recommendation engines, inventory management, omnichannel retail platforms, and secure payment solutions for online shopping.',
      imageUrl: Ecommerce,
    },
    {
      title: 'Cybersecurity & Data Protection',
      description:
        'Offers AI-based threat detection, cloud security, identity management, and encryption to safeguard businesses from cyber threats.',
      imageUrl: Cybersec,
    },
    {
      title: 'Education & E-Learning Technology',
      description:
        'Develops AI-driven learning platforms, virtual classrooms, interactive AR/VR tools, and remote assessment solutions for digital education.',
      imageUrl: Education,
    },
    {
      title: 'Cloud Computing & SaaS Solutions',
      description:
        'Provides cloud applications, multi-cloud strategies, serverless computing, and SaaS-based business solutions for enterprises.',
      imageUrl: Cloud,
    },
    {
      title: 'Automotive & Smart Mobility',
      description:
        'Creates AI-driven self-driving tech, fleet management, IoT-powered vehicle tracking, and predictive maintenance solutions for transportation.',
      imageUrl: Automotive,
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description:
        'Develops DApps, smart contracts, NFT marketplaces, cryptocurrency exchanges, and blockchain-based identity management for the Web3 ecosystem.',
      imageUrl: Blockchain,
    },
    {
      title: 'AI & Machine Learning Solutions',
      description:
        'Offers AI model development, NLP, predictive analytics, and automation solutions for various industries.',
      imageUrl: AI,
    },
    {
      title: 'Manufacturing & Industrial Automation',
      description:
        'Delivers IoT-enabled automation, predictive maintenance, robotics integration, and real-time supply chain analytics for industries.',
      imageUrl: Manufacturing,
    },
  ];

  return (
    <div className="pt-8 md:pt-[100px]">
      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
        {/* Header Section */}
        {/* <header>
        <section
          className="text-white py-40 text-center"
          style={{
            backgroundImage:
              'url(https://www.vamenture.com/images/hero/hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Industry-Specific Software Solutions & Services | AonixGlobalAI
          </h1>
        </section>
      </header> */}
        {/* Industry Cards Grid */}
        <div className="mt-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 rounded-lg border-solid border-[0px_0px_0px_0px] overflow-hidden"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-[30px] py-[33px]">
                <h3 className="font-bold text-base md:text-lg">{card.title}</h3>
                <p className="text-justify hyphens-auto text-[12px] mt-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Footer Section */}
        {/* <footer>
        <section
          className="text-white py-20 text-center"
          style={{
            backgroundImage:
              'url(https://www.vamenture.com/images/hero/hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-xl">Let's Connect</p>
          <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300">
            Contact Us
          </button>
        </section>
      </footer> */}
      </div>
    </div>
  );
};

export default Industry;
