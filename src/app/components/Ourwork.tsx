import React from 'react';
import type { StaticImageData } from 'next/image';

import Bandage1 from '../assets/images/bandage-ecommerce-1.png';
import Bandage2 from '../assets/images/bandage-ecommerce-2.png';
import Bandage3 from '../assets/images/bandage-ecommerce-3.png';
import Bandage4 from '../assets/images/bandage-ecommerce-4.png';
import Vampzz1 from '../assets/images/vampzz-cap-commerce-1.png';
import Vampzz2 from '../assets/images/vampzz-cap-commerce-2.png';
import Vampzz3 from '../assets/images/vampzz-cap-commerce-3.png';
import Vampzz4 from '../assets/images/vampzz-cap-commerce-4.png';
import { px } from 'framer-motion';

interface Project {
  title: string;
  images: (string | StaticImageData)[];
}

const Works: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Bandage',
      images: [Bandage1, Bandage2, Bandage3, Bandage4],

      // images: [
      //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyO_4mDnHPGtsnLTvAPvbyb3WT39ygQ3JnUg&s',
      //   'https://www.shutterstock.com/image-photo/team-diverse-partners-mature-latin-600nw-2346448085.jpg',
      //   'https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg',
      //   'https://www.cio.com/wp-content/uploads/2025/01/1307089-0-57261200-1737611628-shutterstock_2394640901.jpg?quality=50&strip=all&w=1024',
      // ],
    },
    {
      title: 'Vampzz',
      images: [Vampzz1, Vampzz2, Vampzz3, Vampzz4],
      // images: [
      //   'https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
      //   'https://www.indiafilings.com/learn/wp-content/uploads/2024/01/Importance-of-Business-Plans.jpg',
      //   'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg',
      //   'https://imageio.forbes.com/specials-images/imageserve/633a774a842d06ecd68286ff/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
      // ],
    },
    {
      title: 'Mile High Express',
      images: [
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1iR3izwqxhutloa99XeX8C/641d59ca0dc9de9d6229a398022a5f70/GettyImages-980654204_IT_project_management__8_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jLVQwA7p6dfdppAoF_Y2uuy5lQhR9oYwWac7C3uR5OpPoPXl2nmTcPHyAbKRt-pUdUQ&usqp=CAU',
        'https://img.freepik.com/free-photo/person-talking-colleagues-video-call-communication-using-smartphone-business-meeting-businessman-holding-mobile-phone-online-conference-with-workmates-corporate-office_482257-28475.jpg',
        'https://img.freepik.com/free-photo/people-analyzing-checking-finance-graphs-office_23-2150377188.jpg',
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
        <div className="max-w-6xl mx-auto text-center -mb-20 max-md:mb-10 pt-32">
          <h2 className="text-4xl font-bold tracking-widest text-white mb-8 bg-blue-900 inline-block p-[20px] rounded-lg">
            Our Work
          </h2>
        </div>
        <div className="w-full bg-white font-sans md:px-10">
          <div className="relative max-w-7xl mx-auto pb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 gap-10"
              >
                {/* Title Section */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"></div>
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Image Section */}
                <div className="relative pl-4 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {project.title}
                  </h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.example.com/"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                          <img
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="aspect-w-1 aspect-h-1 object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
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
