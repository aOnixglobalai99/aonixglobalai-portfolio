import React from 'react';
import serviceone from '../../assets/servicesImages/service-1.webp';
import servicetwo from '../../assets/servicesImages/service-2.webp';
import servicethree from '../../assets/servicesImages/service-3.webp';
import servicefour from '../../assets/servicesImages/service-4.webp';
import servicefive from '../../assets/servicesImages/service-5.webp';
import servicesix from '../../assets/servicesImages/service-6.webp';
import serviceseven from '../../assets/servicesImages/service-7.png';
import serviceeight from '../../assets/servicesImages/service-8.png';
import servicenine from '../../assets/servicesImages/service-9.png';

import Image from 'next/image';
// import { Accordion } from 'flowbite-react';

const Service = () => {
  return (
    <div id="/services" className="mb-[100px]">
      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
        <div className="text-center px-5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl  sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900">
              Services Offered By AonixGlobalAI
            </h2>
          </div>
          {/* <h2 className="text-3xl font-semibold">IT Solutions & Projects</h2> */}
          <p className="text-center text-[15px] mt-5 px-2 md:px-10">
            AonixGlobalAI provides a comprehensive range of development services
            designed to meet your specific needs, from creating intuitive user
            interfaces to developing scalable web and mobile applications.
          </p>
        </div>

        <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
          {/* Services Grid */}
          <div className=" pt-[100px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Service Card 1 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceone}
                alt="UI/UX Design"
                width={45}
                height={45}
              />
              <h1 className="font-bold">UI/UX Design & Development</h1>
              <p className="text-center text-[12px]">
                Crafting user-centric designs that focus on functionality and
                aesthetics, ensuring your digital platforms offer a seamless and
                engaging experience across all devices.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicetwo}
                alt="Web Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Web Application Development</h1>
              <p className="text-center text-[12px]">
                Delivering robust and scalable web solutions tailored to meet
                your business objectives, designed to ensure high efficiency and
                optimal performance.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicethree}
                alt="Mobile Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Mobile App Development</h1>
              <p className="text-center text-[12px]">
                Creating intuitive and feature-rich mobile applications for both
                iOS and Android to enhance user engagement and meet business
                demands.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicefour}
                alt="CMS Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold">CMS Web Development</h1>
              <p className="text-center text-[12px]">
                Developing flexible and SEO-optimized content management systems
                that make managing and updating your website quick and
                hassle-free.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicefive}
                alt="API Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold">API Development & Integration</h1>
              <p className="text-center text-[12px]">
                Building and integrating APIs to simplify data interactions,
                enabling your applications to seamlessly connect with external
                services.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicesix}
                alt="Cloud Solutions"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Cloud-based Solutions</h1>
              <p className="text-center text-[12px]">
                Offering reliable and scalable cloud solutions that adapt to
                your business needs, ensuring uninterrupted operations in a
                dynamic market environment.
              </p>
            </div>

            {/* Service Card 7 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceseven}
                alt="AI Solutions"
                width={45}
                height={45}
              />
              <h1 className="font-bold">AI Solutions</h1>
              <p className="text-center text-[12px]">
                Harnessing the power of artificial intelligence to create smart,
                data-driven applications and automate processes, driving
                innovation and operational efficiency.
              </p>
            </div>

            {/* Service Card 8 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceeight}
                alt="Digital Marketing"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Digital Marketing</h1>
              <p className="text-center text-[12px]">
                Implementing result-oriented digital marketing strategies,
                including SEO, PPC, social media, and email campaigns, to boost
                your brand&apos;s online visibility and engagement.
              </p>
            </div>

            {/* Service Card 9 */}
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image src={servicenine} alt="DevOps" width={45} height={45} />
              <h1 className="font-bold">DevOps & Automation</h1>
              <p className="text-center text-[12px]">
                Streamlining your software development lifecycle through DevOps
                practices and automation tools, ensuring faster delivery and
                enhanced reliability of your applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
