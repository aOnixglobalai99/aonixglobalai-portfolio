import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/FAQs';
import serviceone from '../../assets/servicesImages/service-1.webp';
import servicetwo from '../../assets/servicesImages/service-2.webp';
import servicethree from '../../assets/servicesImages/service-3.webp';
import servicefour from '../../assets/servicesImages/service-4.webp';
import servicefive from '../../assets/servicesImages/service-5.webp';
import servicesix from '../../assets/servicesImages/service-6.webp';
import serviceseven from '../../assets/servicesImages/service-7.png';
import serviceeight from '../../assets/servicesImages/service-8.png';
import servicenine from '../../assets/servicesImages/service-9.png';

const Service = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 mix-blend-overlay bg-[url('/service-page-background-image.avif')] w-full bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-full flex flex-col items-start justify-center w-full max-w-[1140px] mx-auto px-4">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-block px-4 py-2 bg-gray-700/30 rounded-full transition-all hover:bg-gray-700/50 cursor-pointer backdrop-blur-sm">
                <span className="text-blue-200 font-medium">
                  Our Services & Solutions
                </span>
              </div>
              <h1 className="text-white font-black text-[clamp(1.3rem,5vw,2.5rem)] max-w-[600px] leading-tight">
                Elevating Businesses with Tailored Digital Solutions
              </h1>
              <p className="text-blue-100 text-[clamp(1rem,2vw,1.25rem)] max-w-[90%] md:max-w-[500px] leading-relaxed">
                We provide cutting-edge services designed to drive growth,
                efficiency, and innovation, ensuring seamless digital
                transformation for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto my-[100px]">
        <div className="text-center px-5">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900">
              Services Offered By AonixGlobalAI
            </h2>
          </div>
          <p className="text-center text-[15px] mt-5 px-2 md:px-10">
            AonixGlobalAI provides a comprehensive range of development services
            designed to meet your specific needs, from creating intuitive user
            interfaces to developing scalable web and mobile applications.
          </p>
        </div>

        <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
          <div className="pt-[100px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceone}
                alt="UI/UX Design"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">UI/UX Design & Development</h1>
              <p className="text-center text-[12px]">
                Crafting user-centric designs that focus on functionality and
                aesthetics...
              </p>
              <Link
                href="/services/ui-ux-design"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicetwo}
                alt="Web Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">Web Application Development</h1>
              <p className="text-center text-[12px]">
                Delivering robust and scalable web solutions...
              </p>
              <Link
                href="/services/web-development"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicethree}
                alt="Mobile Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">Mobile App Development</h1>
              <p className="text-center text-[12px]">
                Creating intuitive and feature-rich mobile applications...
              </p>
              <Link
                href="/services/mobile-development"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicefour}
                alt="CMS Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">CMS Web Development</h1>
              <p className="text-center text-[12px]">
                Developing flexible and SEO-optimized content management
                systems...
              </p>
              <Link
                href="/services/cms-development"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicefive}
                alt="API Development"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">
                API Development & Integration
              </h1>
              <p className="text-center text-[12px]">
                Building and integrating APIs to simplify data interactions...
              </p>
              <Link
                href="/services/api-development"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicesix}
                alt="Cloud Solutions"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">Cloud-based Solutions</h1>
              <p className="text-center text-[12px]">
                Offering reliable and scalable cloud solutions...
              </p>
              <Link
                href="/services/cloud-solutions"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceseven}
                alt="AI Solutions"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">AI Solutions</h1>
              <p className="text-center text-[12px]">
                Harnessing artificial intelligence to create smart...
              </p>
              <Link
                href="/services/ai-solutions"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceeight}
                alt="Digital Marketing"
                width={45}
                height={45}
              />
              <h1 className="font-bold text-lg">Digital Marketing</h1>
              <p className="text-center text-[12px]">
                Implementing result-oriented digital marketing strategies...
              </p>
              <Link
                href="/services/digital-marketing"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>

            <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image src={servicenine} alt="DevOps" width={45} height={45} />
              <h1 className="font-bold text-lg">DevOps & Automation</h1>
              <p className="text-center text-[12px]">
                Streamlining your software development lifecycle...
              </p>
              <Link
                href="/services/devops-automation"
                className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default Service;
