import React from 'react';
import Image from 'next/image';
import HealthcareTechnology from '../assets/images/HealthcareTechnology.jpg';
import EcommerceTechnology from '../assets/images/EcommerceTechnology.jpg';
import SchoolTechnology from '../assets/images/SchoolTechnology.jpg';
import Realstate from '../assets/images/Realstate.webp';

const Industryexcarousel = () => {
  return (
    <div className="carousel">
      <div className="carouselItems">
<<<<<<< HEAD
        {/* Healthcare Technology */}
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className="text-[25px] font-bold mb-5">
                Transforming Healthcare with Technology
              </h2>
              <p className="text-justify max-w-[88%]">
                Revolutionize patient care and streamline operations with
                cutting-edge healthcare technology solutions. From telemedicine
                platforms to AI-powered diagnostics, empower healthcare
                professionals to deliver better outcomes.
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              <img
                src="https://img.freepik.com/free-vector/smart-healthcare-technology-template_53876-117499.jpg?semt=ais_hybrid"
                alt="Healthcare Technology"
=======
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className=" text-[25px] font-bold mb-5">
                Vero eos et accusamus
              </h2>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus qui{' '}
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              {' '}
              <Image
                src={HealthcareTechnology}
                alt="headerImg"
>>>>>>> master
                className="h-full object-fill"
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* E-commerce Technology */}
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className="text-[25px] font-bold mb-5">
                Redefining Retail with E-commerce Innovations
              </h2>
              <p className="text-justify max-w-[88%]">
                Leverage advanced e-commerce technologies to enhance customer
                experience, optimize inventory management, and drive seamless
                online transactions. Empower your retail business with smarter,
                scalable solutions.
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              <img
                src="https://img.freepik.com/free-vector/flat-design-online-shopping-c_23-2150321059.jpg?semt=ais_hybrid"
                alt="E-commerce Technology"
=======
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className=" text-[25px] font-bold mb-5">
                Vero eos et accusamus
              </h2>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus qui{' '}
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              {' '}
              <Image
                src={EcommerceTechnology}
                alt="headerImg"
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className=" text-[25px] font-bold mb-5">
                Vero eos et accusamus
              </h2>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus qui{' '}
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              {' '}
              <Image
                src={SchoolTechnology}
                alt="headerImg"
>>>>>>> master
                className="h-full object-fill"
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* School Technology */}
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className="text-[25px] font-bold mb-5">
                Empowering Education Through Technology
              </h2>
              <p className="text-justify max-w-[88%]">
                Foster interactive and inclusive learning environments with
                innovative school technology. From virtual classrooms to
                AI-driven personalized learning, transform education for the
                digital age.
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              <img
                src="https://img.freepik.com/free-vector/online-education-student-workplace-with-computer-table-pc-monitor-armchair-home-working-place-desk_33099-2176.jpg?ga=GA1.1.901203890.1737960981&semt=ais_hybrid"
                alt="School Technology"
                className="h-full object-fill"
              />
            </div>
          </div>
        </div>

        {/* Real Estate Technology */}
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className="text-[25px] font-bold mb-5">
                Revolutionizing Real Estate with Technology
              </h2>
              <p className="text-justify max-w-[88%]">
                Streamline property management, enhance customer engagement, and
                leverage virtual tours with real estate technology solutions.
                Drive smarter decisions and seamless transactions.
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              <img
                src="https://img.freepik.com/free-vector/real-estate-banner-template_23-2148965222.jpg?ga=GA1.1.901203890.1737960981&semt=ais_hybrid"
                alt="Real Estate Technology"
=======
        <div className="carouselItem w-[1140px]">
          <div className="flex gap-5">
            <div className="w-6/12 flex flex-col justify-center">
              <h2 className=" text-[25px] font-bold mb-5">
                Vero eos et accusamus
              </h2>
              <p>
                Vero eos et accusamus et iusto odio dignissimos ducimus qui{' '}
              </p>
            </div>
            <div className="w-6/12 h-[300px]">
              {' '}
              <Image
                src={Realstate}
                alt="headerImg"
>>>>>>> master
                className="h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industryexcarousel;
