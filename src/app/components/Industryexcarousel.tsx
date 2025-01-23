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
                className="h-full object-fill"
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
                className="h-full object-fill"
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
                src={Realstate}
                alt="headerImg"
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
