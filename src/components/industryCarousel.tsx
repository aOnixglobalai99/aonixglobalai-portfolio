'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface IndustryCard {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const Industry: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const cardData: IndustryCard[] = [
    {
      title: 'Healthcare IT Solutions',
      description:
        'Develops EHR, telemedicine, AI diagnostics, and patient management systems to improve healthcare efficiency, compliance, and accessibility.',
      imageUrl: '/images/industry/Healthcare-IT-Solutions.jpg',
      alt: 'Healthcare IT Solutions visualization',
    },
    {
      title: 'Fintech & Banking Solutions',
      description:
        'Provides secure payment gateways, AI fraud detection, blockchain transactions, and mobile banking apps for seamless financial services.',
      imageUrl: '/images/industry/Fintech.jpg',
      alt: 'Fintech and Banking Solutions visualization',
    },
    {
      title: 'Telecom & Networking',
      description:
        'Optimizes network management, 5G deployment, VoIP, AI-driven maintenance, and billing automation for improved connectivity and telecom services.',
      imageUrl: '/images/industry/Telecom-&-Networking.webp',
      alt: 'Telecom and Networking Solutions visualization',
    },
    {
      title: 'Aviation & Aerospace Technology',
      description:
        'Develops flight scheduling, air traffic monitoring, predictive maintenance, and passenger experience solutions to enhance aviation operations.',
      imageUrl: '/images/industry/Aviation.webp',
      alt: 'Aviation and Aerospace Technology visualization',
    },
    {
      title: 'E-Commerce & Retail Tech',
      description:
        'Builds AI-powered recommendation engines, inventory management, omnichannel retail platforms, and secure payment solutions for online shopping.',
      imageUrl: '/images/industry/E-Commerce.jpg',
      alt: 'E-Commerce and Retail Technology visualization',
    },
    {
      title: 'Cybersecurity & Data Protection',
      description:
        'Offers AI-based threat detection, cloud security, identity management, and encryption to safeguard businesses from cyber threats.',
      imageUrl: '/images/industry/cyber_security.jpeg',
      alt: 'Cybersecurity and Data Protection visualization',
    },
    {
      title: 'Education & E-Learning Technology',
      description:
        'Develops AI-driven learning platforms, virtual classrooms, interactive AR/VR tools, and remote assessment solutions for digital education.',
      imageUrl: '/images/industry/Education.webp',
      alt: 'Education and E-Learning Technology visualization',
    },
    {
      title: 'Cloud Computing & SaaS Solutions',
      description:
        'Provides cloud applications, multi-cloud strategies, serverless computing, and SaaS-based business solutions for enterprises.',
      imageUrl: '/images/industry/Cloud-Computing.webp',
      alt: 'Cloud Computing and SaaS Solutions visualization',
    },
    {
      title: 'Automotive & Smart Mobility',
      description:
        'Creates AI-driven self-driving tech, fleet management, IoT-powered vehicle tracking, and predictive maintenance solutions for transportation.',
      imageUrl: '/images/industry/Automotive.jpg',
      alt: 'Automotive and Smart Mobility visualization',
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description:
        'Develops DApps, smart contracts, NFT marketplaces, cryptocurrency exchanges, and blockchain-based identity management for the Web3 ecosystem.',
      imageUrl: '/images/industry/Blockchain.webp',
      alt: 'Blockchain and Web3 Solutions visualization',
    },
    {
      title: 'AI & Machine Learning Solutions',
      description:
        'Offers AI model development, NLP, predictive analytics, and automation solutions for various industries.',
      imageUrl: '/images/industry/AI.webp',
      alt: 'AI and Machine Learning Solutions visualization',
    },
    {
      title: 'Manufacturing & Industrial Automation',
      description:
        'Delivers IoT-enabled automation, predictive maintenance, robotics integration, and real-time supply chain analytics for industries.',
      imageUrl: '/images/industry/Manufacturing.jpg',
      alt: 'Manufacturing and Industrial Automation visualization',
    },
  ];

  const handleAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      setCurrentIndex((prevIndex: number) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [isAutoPlaying, cardData.length]);

  useEffect(() => {
    const timer = setInterval(handleAutoPlay, 2000);
    return () => clearInterval(timer);
  }, [handleAutoPlay]);

  const handleSlideChange = (index: number): void => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = (): void => {
    handleSlideChange(
      currentIndex === cardData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = (): void => {
    handleSlideChange(
      currentIndex === 0 ? cardData.length - 1 : currentIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section id="industries" className=" pb-32 ">
      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
        <div className="text-center px-5">
          <div className="max-w-6xl mx-auto text-center -mb-20 max-md:mb-10 pb-4 md:pb-24">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-widest text-white mb-8 bg-blue-900 inline-block p-[20px] rounded-lg">
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

        <div className="relative w-full mt-16">
          <div
            className="overflow-hidden relative h-[420px] md:h-[350px] bg-white rounded-lg shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full"
              style={{
                width: `${cardData.length * 100}%`,
                transform: `translateX(-${
                  (currentIndex * 100) / cardData.length
                }%)`,
                transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {cardData.map((card: IndustryCard, index: number) => (
                <div
                  key={index}
                  className="relative h-full"
                  style={{ width: `${100 / cardData.length}%` }}
                >
                  <div className="flex flex-col-reverse md:flex-row h-full">
                    <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                      <div className="max-w-xl">
                        <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-6">
                          {card.title}
                        </h3>
                        <p className="text-left text-[15px] mb-4 md:mb-8">
                          {card.description}
                        </p>
                        <button
                          className="bg-blue-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-base md:text-lg transform"
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
                    <div className="w-full md:w-1/2 h-48 md:h-full relative">
                      <div className="absolute inset-0">
                        <Image
                          src={card.imageUrl}
                          alt={card.alt}
                          fill
                          className="object-cover"
                          priority={index === currentIndex}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 md:left-[-45px] top-1/3 md:top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full z-10 transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 md:h-4 md:w-4" />
          </button>
          <button
            className="absolute right-2 md:right-[-45px] top-1/3 md:top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full z-10 transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 md:h-4 md:w-4" />
          </button>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
            {cardData.map((_: IndustryCard, index: number) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-800 w-4' : 'bg-gray-300 w-2'
                }`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
