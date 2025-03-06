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
import Router from 'next/router';
// import AI_Trends_2025 from '@/components/newBlogs/blog1';
// import AI_in_ECommerce from '@/components/newBlogs/blog2';
// import AIRealEstatePage from '@/components/newBlogs/blog3';
// import AIHealthcarePage from '@/components/newBlogs/blog4';
// import AI_Powered_Agriculture from '@/components/newBlogs/blog5';
// import AISportsFitnessPage from '@/components/newBlogs/blog6';
// import AIEducationBlog from '@/components/newBlogs/blog7';
// import AIFinanceBanking from '@/components/newBlogs/blog8';

const HomePage = () => {
  return (
    <div id="/" className="font-poppins w-full">
      {/* Hero Section */}
      <div className="w-full">
        <div className="homepagefirstdiv-back h-[800px] bg-center bg-no-repeat bg-cover">
          <div className="h-full flex flex-col items-start w-full max-w-[1140px] mx-auto pr-4 justify-center m-auto">
            <div className="px-4 xl:px-0">
              <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-[500px] md:w-[600px] lg:w-[700px] leading-tight mb-4">
                Innovative IT, AI & Tech Solutions for Modern Businesses
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[400px] md:w-[500px] lg:w-[600px] leading-relaxed mb-5">
                Empowering businesses with scalable IT, AI, and tech solutions
                to drive innovation, streamline operations, and ensure security.
              </p>
            </div>

            <button
              className="px-8 py-4 bg-black/30 text-white rounded-lg hover:bg-black/40 transition-colors font-semibold text-center border border-white/20 backdrop-blur-md shadow-md hover:shadow-lg mx-4 xl:mx-0"
              onClick={() => Router.push('./ContactUsPage')}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-[-100px]">
          <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 xl:px-0">
            {/* Card 1 */}
            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8">
              <Image src={service2} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold text-lg">
                UI/UX and Web App Development
              </h1>
              <p className="text-sm">
                Delivering intuitive UI/UX designs and high-performance web
                applications for seamless, scalable, and secure digital
                experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8">
              <Image src={service7} alt="headerImg" width={45} height={45} />
              {/* <h1 className="font-bold text-lg">
                AI Solutions for Enhanced Business
              </h1> */}
              <h1 className="font-bold text-lg">
                AI-Powered Intelligent Business
              </h1>
              <p className="text-sm">
                Utilizing advanced AI technology to develop intelligent
                applications that streamline processes, reduce costs, and
                enhance efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8">
              <Image src={service3} alt="headerImg" width={40} height={40} />
              <h1 className="font-bold text-lg">Mobile App Development</h1>
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
        <section className="w-full bg-[#192373] py-8 px-6 lg:py-20 lg:px-20 mb-[100px]">
          <div className="max-w-[1140px] mx-auto flex justify-between items-center max-md:flex-col">
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
                href="/ContactUsPage"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto pb-[50px]">
          <div className="text-center px-5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900">
                Technologies and Platforms We Work With
              </h2>
              <p className="text-center text-[15px] mt-5 px-2 md:px-10">
                We use a wide array of technologies and platforms to deliver
                robust solutions. From modern front-end frameworks to reliable
                back-end systems, our tech stack supports diverse needs for web
                and mobile applications.
              </p>
            </div>
            {/* <h2 className="text-3xl font-semibold">IT Solutions & Projects</h2> */}
          </div>
        </div>

        <TechIcons />
        {/* <ContactUsPage /> */}
        <ScrollToTop />

        <FAQs />
      </div>
    </div>
  );
};

export default HomePage;
