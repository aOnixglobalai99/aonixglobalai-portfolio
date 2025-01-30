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
  ];

  return (
    <div className="pt-16 md:pt-[50px]">
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
            Industry-Specific Software Solutions & Services | Vamenture
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
              <div className="w-full h-48 md:h-56 lg:h-72 overflow-hidden">
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
