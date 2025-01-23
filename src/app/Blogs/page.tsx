import React from 'react';
import Link from 'next/link';
import blogone from '../assets/images/blogone.jpg';
import blogtwo from '../assets/images/blogtwo.jpg';
import rightarrow from '../assets/images/right-arrow.svg';
import rightarrowline from '../assets/images/right-arrow-line.svg';
import Image from 'next/image';
import Header from '../components/Header';

import Footer from '../components/Footer';

const page = () => {
  return (
    <div>
      <div className="header-back fixed w-full">
        <Header />
      </div>
      <div className="aboutus-back h-[400px] bg-center bg-no-repeat bg-cover">
        <div className="h-full flex  items-center w-[1140px] justify-center m-auto">
          <h1 className="text-[white] text-[50px]">Blogs</h1>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className=" w-[1140px] m-auto flex gap-[50px]">
          <div>
            <div className="group ">
              <div className=" relative overflow-hidden block">
                <Image
                  src={blogone}
                  alt="headerImg"
                  className="group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease] w-full"
                />
              </div>
              <div className="px-0 py-5">
                <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                  April 4, 2021
                </p>
                <h1 className="text-[#293241] text-3xl font-semibold">
                  Data Security With Multiple Business Values
                </h1>
                <p className="text-[#7a7a7a] text-[18px] my-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <Link
                  href={''}
                  className="text-[#121a5e] text-[13px] font-semibold flex gap-2.5"
                >
                  READ MORE{' '}
                  <Image src={rightarrowline} alt="headerImg" width={20} />
                </Link>
              </div>
            </div>
            <div className="group ">
              <div className=" relative overflow-hidden block">
                <Image
                  src={blogtwo}
                  alt="headerImg"
                  className="group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease] w-full"
                />
              </div>
              <div className="px-0 py-5">
                <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                  April 4, 2021
                </p>
                <h1 className="text-[#293241] text-3xl font-semibold">
                  Data Security With Multiple Business Values
                </h1>
                <p className="text-[#7a7a7a] text-[18px] my-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <Link
                  href={''}
                  className="text-[#121a5e] text-[13px] font-semibold flex gap-2.5"
                >
                  READ MORE{' '}
                  <Image src={rightarrowline} alt="headerImg" width={20} />
                </Link>
              </div>
            </div>
            <div className="group ">
              <div className=" relative overflow-hidden block">
                <Image
                  src={blogone}
                  alt="headerImg"
                  className="group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease] w-full"
                />
              </div>
              <div className="px-0 py-5">
                <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                  April 4, 2021
                </p>
                <h1 className="text-[#293241] text-3xl font-semibold">
                  Data Security With Multiple Business Values
                </h1>
                <p className="text-[#7a7a7a] text-[18px] my-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <Link
                  href={''}
                  className="text-[#121a5e] text-[13px] font-semibold flex gap-2.5"
                >
                  READ MORE{' '}
                  <Image src={rightarrowline} alt="headerImg" width={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-6/12">
            <div>
              <h2 className="text-[#272b36] text-[25px] font-semibold mb-[30px]">
                Recent post
              </h2>
              <div className="flex flex-col gap-[30px]">
                <Link href={''} className="flex items-center gap-5 ">
                  <Image
                    src={blogone}
                    alt="headerImg"
                    width={130}
                    height={45}
                  />
                  <div>
                    <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                      April 4, 2021
                    </p>
                    <h1 className="text-xl font-semibold text-[#272B36]">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                  </div>
                </Link>
                <Link href={''} className="flex items-center gap-5">
                  <Image
                    src={blogone}
                    alt="headerImg"
                    width={130}
                    height={45}
                  />
                  <div>
                    <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                      April 4, 2021
                    </p>
                    <h1 className="text-xl font-semibold text-[#272B36]">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                  </div>
                </Link>
                <Link href={''} className="flex items-center gap-5">
                  <Image
                    src={blogone}
                    alt="headerImg"
                    width={130}
                    height={45}
                  />
                  <div>
                    <p className="text-[#7a7a7a] text-[13px] mb-2.5">
                      April 4, 2021
                    </p>
                    <h1 className="text-xl font-semibold text-[#272B36]">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[#272b36] text-[25px] font-semibold mb-[30px]">
                Categories
              </h2>
              <div>
                <Link
                  href=""
                  className="flex gap-2.5 px-0 py-2.5 border-b-[#e9e9e9] border-b border-solid"
                >
                  {' '}
                  <Image src={rightarrow} alt="headerImg" width={20} />
                  Event
                </Link>
                <Link
                  href=""
                  className="flex gap-2.5 px-0 py-2.5 border-b-[#e9e9e9] border-b border-solid"
                >
                  {' '}
                  <Image src={rightarrow} alt="headerImg" width={20} />
                  Security
                </Link>
                <Link href="" className="flex gap-2.5 px-0 py-2.5 ">
                  <Image src={rightarrow} alt="headerImg" width={20} />
                  Technology{' '}
                </Link>
              </div>
            </div>
            <div className="mt-[30px] h-[298px] blog-gotopage-div bg-center bg-no-repeat bg-cover">
              <div className="text-center p-[30px] h-full">
                <h1 className="text-[white] text-[28px]">
                  Grow Your Business Today
                </h1>
                <p className="text-base text-[white] mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <Link
                  href={''}
                  className="bg-[white] px-[30px] py-2.5 text-[#121a5e]"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
