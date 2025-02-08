import React from 'react';
import AboutUsPage from '../components/AboutUs';
import Service from './Service';
// import Industry from './Industries';
import OurWork from './OurWork';
import BlogPage from './Blog';
// import ContactUsPage from './ContactUs';
import FAQs from '../components/FAQs';
import service2 from '../../assets/servicesImages/service-2.webp';
import service7 from '../../assets/servicesImages/service-7.png';
import service3 from '../../assets/servicesImages/service-3.webp';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';
import OurTeam from '@/components/OurTeam';
import Link from 'next/link';
import TechIcons from '@/components/techAnimation';
import IndustryCarousel from '@/components/industryCarousel';

const HomePage = () => {
  return (
    <div id="/" className="font-poppins w-full">
      {/* Hero Section */}
      <div className="w-full">
        <div className="homepagefirstdiv-back h-[800px] bg-center bg-no-repeat bg-cover">
          <div className="h-full flex flex-col items-start w-fit justify-center m-auto">
            <div className="px-4 md:px-6 lg:px-8">
              <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-[500px] md:w-[600px] lg:w-[700px] leading-tight mb-4">
                Innovative IT, AI & Tech Solutions for Modern Businesses
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[400px] md:w-[500px] lg:w-[600px] leading-relaxed mb-5">
                Empowering businesses with scalable IT, AI, and tech solutions
                to drive innovation, streamline operations, and ensure security.
              </p>
            </div>

            {/* <button className="bg-[#078dd7] rounded font-semibold text-[white]  hover:bg-[#077bc8] transition-[0.3s] text-[25px] px-[60px] py-[15px]">
    Contact Us
  </button> */}
          </div>
        </div>

        <div className="mt-[-100px]">
          <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 rounded-lg">
              <Image src={service2} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold">UI/UX and Web App Development</h1>
              <p className="text-sm">
                Delivering intuitive UI/UX designs and high-performance web
                applications for seamless, scalable, and secure digital
                experiences.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 rounded-lg">
              <Image src={service7} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold">AI Solutions for Enhanced Business</h1>
              <p className="text-sm">
                Utilizing advanced AI technology to develop intelligent
                applications that streamline processes, reduce costs, and
                enhance efficiency.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 rounded-lg">
              <Image src={service3} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold">Mobile App Development</h1>
              <p className="text-sm">
                Creating custom, user-friendly mobile apps for iOS and Android
                to enhance engagement, streamline operations, and drive growth.
              </p>
            </div>
          </div>
        </div>
        {/* About Us Section */}
        <AboutUsPage />
        <Service />
        {/* <Industry /> */}
        <IndustryCarousel />
        {/* <IndustryCarousel /> */}
        <OurWork />
        <OurTeam />
        <BlogPage />
        {/* Hire me section  */}
        <section className="w-full mt-12 mb-12 bg-[#192373] py-8 px-6 lg:py-20 lg:px-20">
          <div className="max-w-5xl mx-auto flex justify-between items-center max-md:flex-col">
            {/* Text Content */}
            <div className="text-white max-md:text-center">
              <h4 className="text-2xl lg:text-4xl font-semibold">
                Hire me for your next project!
              </h4>
              <p className="mt-4 text-lg lg:text-xl">
                I am available for your next project
              </p>
            </div>

            {/* Button */}
            <div className="max-md:mt-5">
              <Link
                className="px-8 md:px-11 lg:px-12 py-3 md:py-4 text-white bg-blue-600 shadow-lg hover:bg-blue-700 transition-opacity duration-300 rounded-full text-lg md:text-xl lg:text-2xl"
                href="/ContactUs"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <TechIcons />
        {/* <ContactUsPage /> */}
        <ScrollToTop />

        <FAQs />
      </div>
      {/* Other sections can be added below */}
    </div>
  );
};

export default HomePage;
