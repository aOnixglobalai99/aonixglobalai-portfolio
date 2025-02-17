import React from 'react';
import type { StaticImageData } from 'next/image';

interface Project {
  title: string;
  images: (string | StaticImageData)[];
}

const Works: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce',
      images: [
        '/images/project1/ecommerce1.png',
        '/images/project1/ecommerce2.png',
        '/images/project1/ecommerce3.png',
        '/images/project1/ecommerce4.png',
      ],
    },
    {
      title: 'RealEstate',
      images: [
        '/images/project2/realestate1.png',
        '/images/project2/realestate5.png',
        '/images/project2/realestate4.png',
        '/images/project2/realestate3.png',
      ],
    },
    {
      title: 'Vampzz',
      images: [
        '/images/project3/vampzz-cap-commerce-1.png',
        '/images/project3/vampzz-cap-commerce-2.png',
        '/images/project3/vampzz-cap-commerce-3.png',
        '/images/project3/vampzz-cap-commerce-4.png',
      ],
    },
  ];

  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 mix-blend-overlay bg-[url('/our-work-page-background-image.avif')] w-full bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-full flex flex-col items-start justify-center w-full max-w-[1140px] mx-auto px-4">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-block px-4 py-2 bg-gray-700/30 rounded-full transition-all hover:bg-gray-700/50 cursor-pointer backdrop-blur-sm">
                <span className="text-blue-200 font-medium">
                  Our Expertise in Projects
                </span>
              </div>
              <h1 className="text-white font-black text-[clamp(1.3rem,5vw,2.5rem)] max-w-[600px] leading-tight">
                Crafting Digital Excellence with Innovation
              </h1>
              <p className="text-blue-100 text-[clamp(1rem,2vw,1.25rem)] max-w-[90%] md:max-w-[500px] leading-relaxed">
                We build scalable, secure, and innovative solutions tailored for
                businesses, ensuring top-notch performance and user experience.
              </p>
              {/* <button
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => {
                  router.push('/OurWork');
                }}
              >
                View Our Projects
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-[100px]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900 mb-[80px] lg:mb-[100px]">
            Our Work
          </h2>
        </div>
        <div className="w-full bg-white font-sans md:px-8 mb-[60px]">
          <div className="relative max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-start gap-8"
              >
                <div className="sticky flex flex-col md:flex-row z-1 items-center top-[90px] self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-7 lg:h-10 absolute left-3 md:left-3 w-7 lg:w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 lg:p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-16 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="relative pl-3 pr-3 md:pl-3 w-full">
                  <h3 className="md:hidden block text-3xl text-center font-bold text-neutral-500 dark:text-neutral-500 -mt-8 pb-10">
                    {project.title}
                  </h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.example.com/"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pb-10">
                      {project.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                          style={{ width: '100%', height: '200px' }}
                        >
                          <img
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-105 p-2"
                            src={typeof image === 'string' ? image : image.src}
                          />
                        </div>
                      ))}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
