import React from 'react';

const Industry = () => {
  const cardData = [
    {
      title: 'Healthcare IT Solutions',
      description:
        'Develops EHR, telemedicine, AI diagnostics, and patient management systems to improve healthcare efficiency, compliance, and accessibility.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/healthcare-software-banner.webp',
    },
    {
      title: 'Fintech & Banking Solutions',
      description:
        'Provides secure payment gateways, AI fraud detection, blockchain transactions, and mobile banking apps for seamless financial services.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/finTech-software.webp',
    },
    {
      title: 'Telecom & Networking',
      description:
        'Optimizes network management, 5G deployment, VoIP, AI-driven maintenance, and billing automation for improved connectivity and telecom services.',
      imageUrl: 'https://www.vamenture.com/images/idustry/telecom.webp',
    },
    {
      title: 'Aviation & Aerospace Technology',
      description:
        'Develops flight scheduling, air traffic monitoring, predictive maintenance, and passenger experience solutions to enhance aviation operations.',
      imageUrl: 'https://www.vamenture.com/images/idustry/aviation.webp',
    },
    {
      title: 'E-Commerce & Retail Tech',
      description:
        'Builds AI-powered recommendation engines, inventory management, omnichannel retail platforms, and secure payment solutions for online shopping.',
      imageUrl: 'https://www.vamenture.com/images/idustry/e-commerce.webp',
    },
    {
      title: 'Cybersecurity & Data Protection',
      description:
        'Offers AI-based threat detection, cloud security, identity management, and encryption to safeguard businesses from cyber threats.',
      imageUrl:
        'https://files.oaiusercontent.com/file-5CrvSeYuee8N8AqNBVyCqw?se=2025-01-30T18%3A20%3A46Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd32ab321-f15d-42a2-8fe8-214a7b21bed4.webp&sig=85xiFUT7w8mVehmlX%2BFjBbfICjtmz/YZtDTqQKxbr8s%3D',
    },
    {
      title: 'Education & E-Learning Technology',
      description:
        'Develops AI-driven learning platforms, virtual classrooms, interactive AR/VR tools, and remote assessment solutions for digital education.',
      imageUrl: 'https://www.vamenture.com/images/idustry/legal-software.webp',
    },
    {
      title: 'Cloud Computing & SaaS Solutions',
      description:
        'Provides cloud applications, multi-cloud strategies, serverless computing, and SaaS-based business solutions for enterprises.',
      imageUrl: 'https://www.vamenture.com/images/idustry/mobile-game.webp',
    },
    {
      title: 'Automotive & Smart Mobility',
      description:
        'Creates AI-driven self-driving tech, fleet management, IoT-powered vehicle tracking, and predictive maintenance solutions for transportation.',
      imageUrl: 'https://www.vamenture.com/images/idustry/logistics.webp',
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description:
        'Develops DApps, smart contracts, NFT marketplaces, cryptocurrency exchanges, and blockchain-based identity management for the Web3 ecosystem.',
      imageUrl: 'https://www.vamenture.com/images/idustry/retail-software.webp',
    },
    {
      title: 'AI & Machine Learning Solutions',
      description:
        'Offers AI model development, NLP, predictive analytics, and automation solutions for various industries.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/agriculture-software.webp',
    },
    {
      title: 'Manufacturing & Industrial Automation',
      description:
        'Delivers IoT-enabled automation, predictive maintenance, robotics integration, and real-time supply chain analytics for industries.',
      imageUrl: 'https://www.vamenture.com/images/idustry/insurance.webp',
    },
  ];

  return (
    <div className="pt-16 md:pt-[100px]">
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
              className="bg-white text-center  flex flex-col items-center gap-5 border-neutral-100 rounded-lg border-solid border-[0px_0px_0px_0px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-56  md:h-56 lg:h-72 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800">
                  {card.title}
                </h3>
                <p className="text-[14px] mt-3 text-gray-600">
                  {card.description}
                </p>
                {/* <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300">
                  Read More
                </button> */}
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
