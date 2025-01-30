import React from 'react';

const Industry = () => {
  const cardData = [
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
    {
      title: 'Healthcare Software Development',
      description:
        'Venture delivers healthcare software solutions designed to enhance patient care, optimize workflows, and ensure compliance with industry standards.',
      imageUrl: 'https://www.vamenture.com/images/idustry/mobile-game.webp',
    },
    {
      title: 'Telecom Software Development',
      description:
        'Venture specializes in telecom software development, offering solutions that optimize network management, streamline operations.',
      imageUrl: 'https://www.vamenture.com/images/idustry/logistics.webp',
    },
    {
      title: 'Aviation Software Development',
      description:
        'Venture provides aviation software through custom solutions that improve operational efficiency, assist in decision-making.',
      imageUrl: 'https://www.vamenture.com/images/idustry/insurance.webp',
    },
    {
      title: 'Healthcare Software Development',
      description:
        'Venture delivers healthcare software solutions designed to enhance patient care, optimize workflows, and ensure compliance with industry standards.',
      imageUrl: 'https://www.vamenture.com/images/idustry/legal-software.webp',
    },
    {
      title: 'Telecom Software Development',
      description:
        'Venture specializes in telecom software development, offering solutions that optimize network management, streamline operations.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/finTech-software.webp',
    },
    {
      title: 'Aviation Software Development',
      description:
        'Venture provides aviation software through custom solutions that improve operational efficiency, assist in decision-making.',
      imageUrl: 'https://www.vamenture.com/images/idustry/e-commerce.webp',
    },
    {
      title: 'Healthcare Software Development',
      description:
        'Venture delivers healthcare software solutions designed to enhance patient care, optimize workflows, and ensure compliance with industry standards.',
      imageUrl: 'https://www.vamenture.com/images/idustry/e-commerce.webp',
    },
    {
      title: 'Telecom Software Development',
      description:
        'Venture specializes in telecom software development, offering solutions that optimize network management, streamline operations.',
      imageUrl: 'https://www.vamenture.com/images/idustry/retail-software.webp',
    },
    {
      title: 'Aviation Software Development',
      description:
        'Venture provides aviation software through custom solutions that improve operational efficiency, assist in decision-making.',
      imageUrl:
        'https://www.vamenture.com/images/idustry/agriculture-software.webp',
    },
    // More items as per the original data...
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto">
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
            Industry-Specific Software Solutions & Services | Vamenture
          </h1>
        </section>
      </header> */}

      {/* Main Content */}
      <div className="container px-4 py-8 relative max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-justify hyphens-auto mt-2 text-gray-600">
                {card.description}
              </p>
              {/* <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300">
                Read More
              </button> */}
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

export default Industry;
