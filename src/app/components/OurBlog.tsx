'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
};

const Blog: React.FC = () => {
  const router = useRouter();

  const cardData: CardData[] = [
    {
      title: 'Healthcare Software Development',
      description:
        'Venture delivers healthcare software solutions designed to enhance patient care, optimize workflows, and ensure compliance with industry standards.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/healthcare-software-banner.webp',
    },
    {
      title: 'Telecom Software Development',
      description:
        'Venture specializes in telecom software development, offering solutions that optimize network management, streamline operations.',
      imageUrl: 'https://www.vamenture.com/images/idustry/telecom.webp',
    },
    {
      title: 'Aviation Software Development',
      description:
        'Venture provides aviation software through custom solutions that improve operational efficiency, assist in decision-making.',
      imageUrl: 'https://www.vamenture.com/images/idustry/aviation.webp',
    },
    // Additional items can be added here
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto py-12">
      {/* Header Section */}
      <header>
        {/* <section
          className="text-white py-40 text-center"
          style={{
            backgroundImage:
              'url(https://www.vamenture.com/images/hero/hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></section> */}
        <div className="max-w-6xl mx-auto text-center pt-10">
          <h2 className="text-4xl font-bold tracking-widest text-white mb-8 bg-blue-900 inline-block p-[20px] rounded-lg">
            Our Blogs
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <div className="container px-4 py-12 relative max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
              <button
                className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                onClick={() =>
                  router.push(`/blog/${encodeURIComponent(card.title)}`)
                }
              >
                Read More
              </button>
            </div>
          ))}
        </div>
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
  );
};

export default Blog;
