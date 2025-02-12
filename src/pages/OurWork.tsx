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
    // {
    //   title: 'Inventailor',
    //   images: [
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO_4mDnHPGtsnLTvAPvbyb3WT39ygQ3JnUg&s',
    //     'https://www.shutterstock.com/image-photo/team-diverse-partners-mature-latin-600nw-2346448085.jpg',
    //     'https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg',
    //     'https://www.cio.com/wp-content/uploads/2025/01/1307089-0-57261200-1737611628-shutterstock_2394640901.jpg?quality=50&strip=all&w=1024',
    //   ],
    // },
  ];

  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900 mb-[80px] lg:mb-[100px]">
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
                {/* Title Section */}
                <div className="sticky flex flex-col md:flex-row z-1 items-center top-[90px] self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-7 lg:h-10 absolute left-3 md:left-3 w-7 lg:w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 lg:p-2"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-16 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Image Section */}
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
      </section>
    </>
  );
};

export default Works;
