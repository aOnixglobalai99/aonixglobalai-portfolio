import React from 'react';
// import './components.css';
import Image from 'next/image';
// import logo from '../assets/images/logo.png';
import tick from '../assets/images/tick-icon.svg';
import whitetick from '../assets/images/whitetick.svg';
import rightarrowline from '../assets/images/right-arrow-line.svg';
import Header from '../components/Header';
// import Carousel from '../components/Carousel';
// import Industryexcarousel from '../components/Industryexcarousel';
import Footer from '../components/Footer';
import serviceone from '../assets/images/service-1.webp';
import servicetwo from '../assets/images/service-2.webp';
import servicethree from '../assets/images/service-3.webp';
import servicefour from '../assets/images/service-4.webp';
import servicefive from '../assets/images/service-5.webp';
import servicesix from '../assets/images/service-6.webp';
import serviceseven from '../assets/images/service-7.png';
import serviceeight from '../assets/images/service-8.png';
import servicenine from '../assets/images/service-9.png';
import ScrollToTop from '../components/ScrollToTop';
import Industry from '../components/industries';
import OurTeam from '../components/OurTeam';
import Works from '../components/Ourwork';
import OurBlog from '../components/OurBlog';
import Link from 'next/link';
import FAQ from '../components/FAQs';

const page = () => {
  return (
    <div className="w-full" id="top">
      <Header />
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
              <Image src={servicetwo} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold">UI/UX and Web App Development</h1>
              <p className="text-sm">
                Delivering intuitive UI/UX designs and high-performance web
                applications for seamless, scalable, and secure digital
                experiences.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 rounded-lg">
              <Image
                src={serviceseven}
                alt="headerImg"
                width={45}
                height={45}
              />
              <h1 className="font-bold">AI Solutions for Enhanced Business</h1>
              <p className="text-sm">
                Utilizing advanced AI technology to develop intelligent
                applications that streamline processes, reduce costs, and
                enhance efficiency.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 rounded-lg">
              <Image
                src={servicethree}
                alt="headerImg"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Mobile App Development</h1>
              <p className="text-sm">
                Creating custom, user-friendly mobile apps for iOS and Android
                to enhance engagement, streamline operations, and drive growth.
              </p>
            </div>
          </div>
        </div>

        <div id="about_us" className="pt-[100px] px-4">
          <div className="max-w-[1140px] w-full m-auto flex flex-col md:flex-row gap-5">
            <div className="about-us-div h-[300px] md:h-[500px] w-full md:w-6/12 bg-center bg-no-repeat bg-cover relative">
              <div className="absolute"></div>
            </div>
            <div className="w-full md:w-6/12 flex flex-col gap-5">
              <div>
                <h1 className="text-[#121a5e] font-semibold text-xl md:text-2xl">
                  About Us
                </h1>
                <h2 className="text-lg md:text-[30px] font-bold leading-[35px] md:leading-[40px] mt-3 md:mt-5">
                  Let Us Be Your Preferred IT and AI Solutions Partner
                </h2>
                <p className="text-xs md:text-[15px] mt-[10px] md:mt-[15px] text-[#747474] leading-5 md:pr-[100px]">
                  At AonixGlobalAI, we are more than an IT company—we are your
                  trusted partners in digital transformation. Combining
                  cutting-edge AI and technology solutions, we drive innovation
                  and excellence to achieve your business goals.
                </p>
              </div>
              <div className="md:ml-[50px] pl-5 md:pl-10 pr-0 md:pr-[70px] py-0 border-l-[3px] border-l-[#121a5e] border-solid">
                <h1 className="text-[#121a5e] font-semibold text-sm md:text-[15px]">
                  Our experts deliver scalable, secure, and future-ready
                  solutions tailored to your needs, from infrastructure
                  optimization to intelligent systems and custom applications,
                  ensuring success in today&apos;s digital landscape.
                </h1>
                {/* <p className="text-xs mt-[15px] pl-0 pr-[120px] py-0">
                Your team delivers secure, scalable, and future-proof solutions,
                specializing in infrastructure optimization, intelligent
                systems, and custom applications, all designed to drive success
                in the digital age.
              </p> */}
              </div>
              <div>
                {/* <button className="bg-[#078dd7] rounded font-semibold text-[white]  hover:bg-[#077bc8] transition-[0.3s] text-[10px] p-2">
                GET STARTED
              </button> */}
                <ul className="gap-2.5 flex flex-col">
                  <li className="text-[12px] flex gap-1">
                    <Image src={tick} alt="tick-icon" width={15} height={10} />
                    We harness AI, ML, and cloud computing to build future-ready
                    apps.
                  </li>
                  <li className="text-[12px] flex gap-1">
                    <Image src={tick} alt="tick-icon" width={15} height={10} />
                    We tailor solutions to deliver exceptional results, aligned
                    with client&apos;s vision.
                  </li>
                  <li className="text-[12px] flex gap-1">
                    <Image src={tick} alt="tick-icon" width={15} height={10} />
                    Our expert team brings vast knowledge to every project.
                  </li>
                  <li className="text-[12px] flex gap-1">
                    <Image src={tick} alt="tick-icon" width={15} height={10} />
                    We maintain top quality and performance from design to
                    deployment.
                  </li>
                  <li className="text-[12px] flex gap-1">
                    <Image src={tick} alt="tick-icon" width={15} height={10} />
                    From concept to post-launch, we ensure your success with
                    comprehensive support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="our_services" className="pt-[100px]">
          <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-center pt-10">
              <h2 className="text-2xl  sm:text-4xl font-bold tracking-widest text-white mb-8 bg-blue-900 inline-block p-[20px] rounded-lg">
                Services Offered By AonixGlobalAI
              </h2>
            </div>
            {/* <div className="flex flex-col items-center gap-2.5 px-4 md:px-20 lg:px-[360px]">
              <h1 className="text-[#121a5e] font-semibold text-xl">
                Services Offered By AonixGlobalAI
              </h1>
              <p className="text-justify hyphens-auto text-[12px]">
                AonixGlobalAI provides a comprehensive range of development
                services designed to meet your specific needs, from creating
                intuitive user interfaces to developing scalable web and mobile
                applications.
              </p>
            </div> */}

            {/* Services Grid */}
            <div className="md:pt-[100px] pt-8 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Service Card 1 */}
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={serviceone}
                  alt="UI/UX Design"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">UI/UX Design & Development</h1>
                <p className="text-justify hyphens-auto text-[12px]">
                  Crafting user-centric designs that focus on functionality and
                  aesthetics, ensuring your digital platforms offer a seamless
                  and engaging experience across all devices.
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
                <p className="text-justify hyphens-auto text-[12px]">
                  Delivering robust and scalable web solutions tailored to meet
                  your business objectives, designed to ensure high efficiency
                  and optimal performance.
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
                <p className="text-justify hyphens-auto text-[12px]">
                  Creating intuitive and feature-rich mobile applications for
                  both iOS and Android to enhance user engagement and meet
                  business demands.
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
                <p className="text-justify hyphens-auto text-[12px]">
                  Developing flexible and SEO-optimized content management
                  systems that make managing and updating your website quick and
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
                <p className="text-justify hyphens-auto text-[12px]">
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
                <p className="text-justify hyphens-auto text-[12px]">
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
                <p className="text-justify hyphens-auto text-[12px]">
                  Harnessing the power of artificial intelligence to create
                  smart, data-driven applications and automate processes,
                  driving innovation and operational efficiency.
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
                <p className="text-justify hyphens-auto text-[12px]">
                  Implementing result-oriented digital marketing strategies,
                  including SEO, PPC, social media, and email campaigns, to
                  boost your brand&apos;s online visibility and engagement.
                </p>
              </div>

              {/* Service Card 9 */}
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image src={servicenine} alt="DevOps" width={45} height={45} />
                <h1 className="font-bold">DevOps & Automation</h1>
                <p className="text-justify hyphens-auto text-[12px]">
                  Streamlining your software development lifecycle through
                  DevOps practices and automation tools, ensuring faster
                  delivery and enhanced reliability of your applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="industries" className="pt-12 md:pt-[100px]">
          <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
            <div className="max-w-6xl mx-auto text-center pt-10">
              <h2 className="text-2xl  sm:text-4xl font-bold tracking-widest text-white mb-8 bg-blue-900 inline-block p-[20px] rounded-lg">
                Our Industry Expertise
              </h2>
            </div>
            <div className="">
              <Industry />
            </div>
          </div>
        </div>
        <div id="our_work">
          <Works />
        </div>

        {/* <div className="flex flex-col md:flex-row mt-[50px] md:mt-[100px] w-full">
          <div className="client-team-img-left h-[300px] md:h-[500px] w-full md:w-6/12 bg-center bg-no-repeat bg-cover relative"></div>

          <div className="client-message-div h-auto md:h-[500px] w-full md:w-6/12 bg-[#078dd7] flex flex-col items-center justify-start text-white font-bold py-10 px-5 md:py-[50px]">
            <h2 className="text-[20px] md:text-[25px] text-center">
              What Clients Say About Us
            </h2>

            <div className="flex items-center justify-center text-center text-[14px] md:text-[15px] font-normal mt-5 md:mt-[40px] w-full">
              <Carousel />
            </div>
          </div>
        </div> */}

        {/* <div className="mt-[100px] mb-[100px]">
          <div className=" w-[1140px] m-auto flex flex-col">
            <div className="flex flex-col items-center gap-2.5 px-[360px] py-0">
              <h1 className="text-[#121a5e] font-semibold text-xl">
                Case Studies
              </h1>
              <h2 className="text-3xl font-semibold">
                IT Solutions & Projects
              </h2>
              <p className="text-center text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className=" w-[1140px] m-auto grid grid-cols-[auto_auto_auto] gap-5 mt-[50px]">
              <div className="bg-white  shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col border-neutral-100 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <div className="casestudyfirst-img-back w-full bg-center bg-no-repeat bg-cover h-[236px]"></div>
                <div>
                  <div className="flex gap-5 bg-[#078dd7] text-[white] p-[15px]">
                    <Image src={logo} alt="headerImg" width={45} height={45} />
                    <div>
                      <h1>IT Practices In Cloud</h1>
                      <p className=" text-xs">Cloud Computing</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 px-[15px] py-5">
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <Link href="#" className=" flex gap-2.5 text-xs">
                      <Image src={rightarrowline} alt="headerImg" width={15} />{' '}
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col  border-neutral-100 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <div className="casestudyfirst-img-back w-full bg-center bg-no-repeat bg-cover h-[236px]"></div>
                <div>
                  <div className="flex gap-5 bg-[#078dd7] text-[white] p-[15px]">
                    <Image src={logo} alt="headerImg" width={45} height={45} />
                    <div>
                      <h1>IT Practices In Cloud</h1>
                      <p className=" text-xs">Cloud Computing</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 px-[15px] py-5">
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <Link href="#" className=" flex gap-2.5 text-xs">
                      <Image src={rightarrowline} alt="headerImg" width={15} />{' '}
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col border-neutral-100 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <div className="casestudyfirst-img-back w-full bg-center bg-no-repeat bg-cover h-[236px]"></div>
                <div>
                  <div className="flex gap-5 bg-[#078dd7] text-[white] p-[15px]">
                    <Image src={logo} alt="headerImg" width={45} height={45} />
                    <div>
                      <h1>IT Practices In Cloud</h1>
                      <p className=" text-xs">Cloud Computing</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 px-[15px] py-5">
                    <p className="text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <Link href="#" className=" flex gap-2.5 text-xs">
                      <Image src={rightarrowline} alt="headerImg" width={15} />{' '}
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <section className="engineer-team-back relative">
          <div className=" bg-black opacity-70 h-full w-full flex items-center gap-5 absolute flex-col px-[181px] py-[100px]">
            <h1 className="text-[40px] text-[white] font-bold text-center w-9/12">
              Don&apos;t Hesitate To Contact Us For Better Information And
              Services
            </h1>
            <p className="text-[22px] text-[white] font-medium text-center p-0 w-9/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </section> */}

        <section>
          <OurTeam />
        </section>

        {/* Hire me section  */}
        <section className="w-full mt-3 bg-[#192373] py-8 px-6 lg:py-20 lg:px-20">
          <div className="max-w-6xl mx-auto flex justify-between items-center max-md:flex-col">
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
                href="#contact_us"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section id="contact_us" className="pt-[100px] px-4 md:px-6 lg:px-0">
          <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] bg-white">
            {/* Left Section */}
            <div className="submit-form-div-left bg-center bg-no-repeat bg-cover relative w-full lg:w-6/12 p-6 md:p-10">
              <div className="flex flex-col gap-4 md:gap-[15px]">
                <h2 className="text-3xl md:text-[40px] text-white font-bold leading-[45px]">
                  Perfect Solutions For Your Business
                </h2>
                <p className="text-sm md:text-base text-white text-justify">
                  At AonixGlobalAI, we deliver innovative and scalable IT
                  solutions tailored to your business needs.
                </p>
                <p className="text-lg md:text-xl text-white font-bold mt-3 md:mt-5">
                  Our Commitments to Excellence:
                </p>
                <ul className="gap-2 flex flex-col">
                  {[
                    'Custom IT solutions aligned with your business goals',
                    'Seamless integration for long-term scalability',
                    'Advanced security and compliance measures',
                    'AI-driven solutions to stay ahead in the tech race',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-[16px] text-white flex gap-2 items-center"
                    >
                      <Image
                        src={whitetick}
                        alt="tick"
                        width={15}
                        height={10}
                      />{' '}
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg md:text-xl text-white font-bold mt-3 md:mt-5">
                  Explore how our expertise can transform your business
                  operations:
                </p>
                <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4">
                  <Link
                    href=""
                    className="text-sm md:text-[15px] h-10 flex items-center justify-center bg-white font-semibold px-5 text-[#121a5e] w-full md:w-auto"
                  >
                    GET A QUOTE
                  </Link>
                  <Link
                    href=""
                    className="text-sm md:text-[15px] h-10 flex items-center justify-center text-white font-semibold px-5 w-full md:w-auto"
                  >
                    Read more{' '}
                    <Image src={rightarrowline} alt="arrow" width={20} />
                  </Link>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <form className="w-full lg:w-6/12 bg-white z-[1] p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-[15px]">
                <div>
                  <label className="text-[#121a5e] text-[15px]">Name</label>
                  <input className="border h-10 w-full text-[13px] mt-2.5 p-2 border-[#ededed]" />
                </div>
                <div>
                  <label className="text-[#121a5e] text-[15px]">Email</label>
                  <input className="border h-10 w-full text-[13px] mt-2.5 p-2 border-[#ededed]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-[15px]">
                <div>
                  <label className="text-[#121a5e] text-[15px]">Select</label>
                  <select className="border h-10 w-full text-[13px] mt-2.5 p-2 border-[#ededed]">
                    <option>Website</option>
                    <option>Mobile Application</option>
                    <option>AI</option>
                    <option>Customer Service Chat Bot</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#121a5e] text-[15px]">
                    Telephone
                  </label>
                  <input className="border h-10 w-full text-[13px] mt-2.5 p-2 border-[#ededed]" />
                </div>
              </div>
              <div className="mb-[15px]">
                <label className="text-[#121a5e] text-[15px]">
                  Additional Details
                </label>
                <textarea className="border min-h-[200px] resize-none w-full text-[13px] mt-2.5 p-2 border-[#ededed]" />
              </div>
              <button className="text-[15px] h-10 flex items-center justify-center text-white font-semibold px-5 bg-[#121a5e] w-full md:w-auto">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        <section>
          <OurBlog />
        </section>

        <div id="faq" className="pt-[100px]">
          <FAQ />
        </div>
        <div>
          <ScrollToTop />
        </div>
        {/* <div>
          <FAQ />
        </div> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
