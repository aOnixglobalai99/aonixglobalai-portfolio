import React from 'react';
// import './components.css';
import Image from 'next/image';
// import logo from '../assets/images/logo.png';
import tick from '../assets/images/tick-icon.svg';
import whitetick from '../assets/images/whitetick.svg';
import rightarrowline from '../assets/images/right-arrow-line.svg';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Industryexcarousel from '../components/Industryexcarousel';
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
import Link from 'next/link';
const page = () => {
  return (
    <div className="" id="top">
      <div className="header-back fixed w-full">
        <Header />
      </div>
      <div className="pt-[90px]">
        <div className="homepagefirstdiv-back h-[800px] bg-center bg-no-repeat bg-cover">
          <div className="h-full flex flex-col items-start w-[1140px] justify-center m-auto">
            <h2 className="text-[white]  font-black w-[488px] text-left text-[35px]">
              Innovative IT, AI & Tech Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-[white] w-[45%] mb-5">
              Empowering businesses with scalable IT, AI, and tech solutions to
              drive innovation, streamline operations, and ensure security.
            </p>

            {/* <button className="bg-[#078dd7] rounded font-semibold text-[white]  hover:bg-[#077bc8] transition-[0.3s] text-[25px] px-[60px] py-[15px]">
            Contact Us
          </button> */}
          </div>
        </div>

        <div className="mt-[-100px]">
          <div className=" w-[1140px] m-auto flex gap-5">
            <div className="backgrounddd bg-white text-center w-[33%] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image src={servicetwo} alt="headerImg" width={45} height={45} />
              <h1 className="font-bold">UI/UX and Web App Development</h1>
              <p className="text-[12px]">
                Delivering intuitive UI/UX designs and high-performance web
                applications for seamless, scalable, and secure digital
                experiences. Our expert team ensures user-centric solutions that
                drive engagement, boost performance, and align with your
                business goals.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center w-[33%] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={serviceseven}
                alt="headerImg"
                width={45}
                height={45}
              />
              <h1 className="font-bold">AI Solutions for Enhanced Business</h1>
              <p className="text-[12px]">
                Utilizing advanced AI technology to develop intelligent
                applications that streamline processes, reduce costs, enhance
                efficiency, and drive business growth by delivering smarter,
                faster, and more automated solutions.
              </p>
            </div>

            <div className="backgrounddd bg-white text-center w-[33%] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
              <Image
                src={servicethree}
                alt="headerImg"
                width={45}
                height={45}
              />
              <h1 className="font-bold">Mobile App Development</h1>
              <p className="text-[12px]">
                Creating custom, user-friendly mobile apps for iOS and Android
                to enhance engagement, streamline operations, and drive growth
                with innovative features, seamless performance, and solutions
                tailored to your business goals.
              </p>
            </div>
          </div>
        </div>

        <div id="about_us" className="pt-[100px]">
          <div className=" w-[1140px] m-auto flex gap-5">
            <div className="about-us-div h-[500px] w-6/12 bg-center bg-no-repeat bg-cover relative">
              <div className="absolute"></div>
            </div>
            <div className="w-6/12 flex flex-col gap-5">
              <div>
                <h1 className="text-[#121a5e] font-semibold text-xl">
                  About Us
                </h1>
                <h2 className="text-[30px] font-bold leading-[40px] mt-5">
                  Let Us Be Your Preferred IT and AI Solutions Partner
                </h2>
                <p className="text-xs mt-[15px] pl-0 pr-[150px] py-0 text-[#747474] text-[15px] leading-5">
                  At AonixGlobalAI, we are more than an IT company—we are your
                  trusted partners in digital transformation. Combining
                  cutting-edge AI and technology solutions, we drive innovation
                  and excellence to achieve your business goals.
                </p>
              </div>
              <div className="ml-[50px] pl-10 pr-[70px] py-0 border-l-[3px] border-l-[#121a5e] border-solid">
                <h1 className="text-[#121a5e] font-semibold text-[15px]">
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
                    <Image src={tick} alt="headerImg" width={15} height={10} />
                    We harness AI, ML, and cloud computing to build future-ready
                    apps.
                  </li>
                  <li className="text-[12px] flex gap-2">
                    <Image src={tick} alt="headerImg" width={15} height={10} />
                    We tailor solutions to deliver exceptional results, aligned
                    with client&apos;s vision.
                  </li>
                  <li className="text-[12px] flex gap-2">
                    <Image src={tick} alt="headerImg" width={15} height={10} />
                    Our expert team brings vast knowledge to every project.
                  </li>
                  <li className="text-[12px] flex gap-2">
                    <Image src={tick} alt="headerImg" width={15} height={10} />
                    We maintain top quality and performance from design to
                    deployment.
                  </li>
                  <li className="text-[12px] flex gap-2">
                    <Image src={tick} alt="headerImg" width={15} height={10} />
                    From concept to post-launch, we ensure your success with
                    comprehensive support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="our_services" className="pt-[100px]">
          <div className=" w-[1140px] m-auto ">
            <div className="flex flex-col items-center gap-2.5 px-[360px] py-0">
              <h1 className="text-[#121a5e] font-semibold text-xl">
                Services Offered By AonixGlobalAI
              </h1>
              {/* <h2 className="text-3xl font-semibold">IT Solutions & Projects</h2> */}
              <p className="text-center text-xs">
                AonixGlobalAI provides a comprehensive range of development
                services designed to meet your specific needs, from creating
                intuitive user interfaces to developing scalable web and mobile
                applications.
              </p>
            </div>
            <div className="m-auto grid grid-cols-[auto_auto_auto] gap-5 mt-8">
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={serviceone}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">UI/UX Design & Development</h1>
                <p className="text-[12px]">
                  Crafting user-centric designs that focus on functionality and
                  aesthetics, ensuring your digital platforms offer a seamless
                  and engaging experience across all devices.
                </p>
              </div>
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicetwo}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">Web Application Development</h1>
                <p className="text-[12px]">
                  Delivering robust and scalable web solutions tailored to meet
                  your business objectives, designed to ensure high efficiency
                  and optimal performance.
                </p>
              </div>
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicethree}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">Mobile App Development</h1>
                <p className="text-[12px]">
                  Creating intuitive and feature-rich mobile applications for
                  both iOS and Android to enhance user engagement and meet
                  business demands.
                </p>
              </div>
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicefour}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">CMS Web Development</h1>
                <p className="text-[12px]">
                  Developing flexible and SEO-optimized content management
                  systems that make managing and updating your website quick and
                  hassle-free.
                </p>
              </div>
              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicefive}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">API Development & Integration</h1>
                <p className="text-[12px]">
                  Building and integrating APIs to simplify data interactions,
                  enabling your applications to seamlessly connect with external
                  services.
                </p>
              </div>

              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicesix}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">Cloud-based Solutions</h1>
                <p className="text-[12px]">
                  Offering reliable and scalable cloud solutions that adapt to
                  your business needs, ensuring uninterrupted operations in a
                  dynamic market environment.
                </p>
              </div>

              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={serviceseven}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">AI Solutions</h1>
                <p className="text-[12px]">
                  Harnessing the power of artificial intelligence to create
                  smart, data-driven applications and automate processes,
                  driving innovation and operational efficiency.
                </p>
              </div>

              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={serviceeight}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">Digital Marketing</h1>
                <p className="text-[12px]">
                  Implementing result-oriented digital marketing strategies,
                  including SEO, PPC, social media, and email campaigns, to
                  boost your brand&apos;s online visibility and engagement.
                </p>
              </div>

              <div className="backgrounddd bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
                <Image
                  src={servicenine}
                  alt="headerImg"
                  width={45}
                  height={45}
                />
                <h1 className="font-bold">DevOps & Automation</h1>
                <p className="text-[12px]">
                  Streamlining your software development lifecycle through
                  DevOps practices and automation tools, ensuring faster
                  delivery and enhanced reliability of your applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <div className=" w-[1140px] m-auto ">
            <div className="flex flex-col items-center gap-2.5 px-[220px] py-0">
              <h1 className="text-[#121a5e] font-semibold text-[30px]">
                Our Industry Expertise
              </h1>
              {/* <h2 className="text-3xl font-semibold">IT Solutions & Projects</h2> */}
              <p className="text-center text-[15px] mt-5">
                With broad experience across a number of sectors, we offer
                specialized solutions to meet the unique needs of each industry.
                The following are only a few of the domains where we can provide
                beneficial outcomes for any business:
              </p>
            </div>
            <div className="mt-[50px]">
              <Industryexcarousel />
            </div>
          </div>
        </div>

        <div className="flex mt-[100px]">
          <div className="client-team-img-left h-[500px] w-6/12 bg-center bg-no-repeat bg-cover relative"></div>
          <div className="client-message-div h-[500px] w-6/12 bg-center bg-no-repeat bg-cover relative bg-[#078dd7] flex   flex-col items-center justify-start text-[25px] text-[white] font-bold pt-[50px]">
            <h2 className="">What Client Say About Us</h2>
            <div className="flex items-center justify-center text-center text-[15px] font-normal mt-[40px]">
              <Carousel />
            </div>
          </div>
        </div>

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
        {/* Hire me section  */}
        <section className="w-screen mt-3 bg-[#192373] flex justify-between py-8 px-8 lg:py-20 lg:px-20 max-sm:flex-col">
          <div className="text-white">
            <h4 className="text-2xl lg:text-4xl font-semibold">
              Hire me for your next project!
            </h4>
            <p className="mt-4 lg:text-xl">
              I am available for your next project
            </p>
          </div>

          <div className="flex justify-center max-sm:w-full">
            <button className="px-11 lg:px-12 p-3 lg:p-4 text-white bg-[#41dfe7] rounded-full lg:text-2xl ">
              Contact Me
            </button>
          </div>
        </section>

        <section id="contact_us" className="pt-[100px]">
          <div className=" w-[1140px] m-auto flex shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] bg-white">
            <div className="submit-form-div-left bg-center bg-no-repeat bg-cover relative w-6/12 p-10">
              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[40px] text-[white] font-bold leading-[45px]">
                  Perfect Solutions For Your Business
                </h2>
                <p className="text-base text-[white] text-justify">
                  At AonixGlobalAI, we deliver innovative and scalable IT
                  solutions tailored to your business needs. Leveraging
                  cutting-edge technologies and exceptional customer support, we
                  drive efficiency, growth, and success in today&apos;s
                  competitive landscape.
                </p>
                <p className="text-xl text-[white] font-bold mt-5">
                  Our Commitments to Excellence:
                </p>
                <ul className="gap-2.5 flex flex-col">
                  <li className="text-[16px] text-[white] flex gap-1">
                    <Image
                      src={whitetick}
                      alt="headerImg"
                      width={15}
                      height={10}
                    />
                    Custom IT solutions aligned with your business goals
                  </li>
                  <li className="text-[16px] text-[white] flex gap-1">
                    <Image
                      src={whitetick}
                      alt="headerImg"
                      width={15}
                      height={10}
                    />{' '}
                    Seamless integration for long-term scalability
                  </li>
                  <li className="text-[16px] text-[white] flex gap-1">
                    <Image
                      src={whitetick}
                      alt="headerImg"
                      width={15}
                      height={10}
                    />{' '}
                    Advanced security and compliance measures
                  </li>
                  <li className="text-[16px] text-[white] flex gap-1">
                    <Image
                      src={whitetick}
                      alt="headerImg"
                      width={15}
                      height={10}
                    />{' '}
                    AI-driven solutions to stay ahead in the tech race
                  </li>
                </ul>
                <p className="text-xl text-[white] font-bold mt-5">
                  Explore how our expertise can transform your business
                  operations:
                </p>
                <div className="flex gap-5 mt-[10px]">
                  <Link
                    href=""
                    className="text-[15px] h-10 flex items-center bg-[white] font-semibold px-5 py-0 text-[#121a5e]"
                  >
                    GET A QUOTE
                  </Link>
                  <Link
                    href=""
                    className="text-[15px] h-10 flex items-center text-white font-semibold px-5 py-0"
                  >
                    Read more{' '}
                    <Image src={rightarrowline} alt="headerImg" width={20} />
                  </Link>
                </div>
              </div>
            </div>
            <form className="w-6/12 bg-[white] z-[1] p-10">
              <div className="flex gap-5  mb-[15px]">
                <div className="w-full">
                  <label className="text-[#121a5e] text-[15px]">Name</label>
                  <input className="border h-10 w-full text-[13px] font-normal text-[black] mt-2.5 p-[10px] border-solid border-[#ededed]" />
                </div>
                <div className="w-full">
                  <label className="text-[#121a5e] text-[15px]">Email</label>
                  <input className="border h-10 w-full text-[13px] font-normal text-[black] mt-2.5 p-[10px] border-solid border-[#ededed]" />
                </div>
              </div>
              <div className="flex gap-5  mb-[15px]">
                <div className="w-full">
                  <label className="text-[#121a5e] text-[15px]">Select</label>
                  <select className="border h-10 w-full text-[13px] font-normal text-[black] mt-2.5 p-[10px] border-solid border-[#ededed]">
                    <option>IT Manager</option>
                    <option>Apps</option>
                    <option>IT Manager</option>
                    <option>IT Manager</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="text-[#121a5e] text-[15px]">
                    Telephone
                  </label>
                  <input className="border h-10 w-full text-[13px] font-normal text-[black] mt-2.5 p-[10px] border-solid border-[#ededed]" />
                </div>
              </div>
              <div className=" mb-[15px]">
                <label className="text-[#121a5e] text-[15px]">
                  Additional Details
                </label>
                <textarea className="border min-h-[200px] resize-none w-full text-[13px] font-normal text-[black] mt-2.5 p-[10px] border-solid border-[#ededed]" />
              </div>
              <button className="text-[15px] h-10 flex items-center text-[white] font-semibold px-5 py-0 bg-[#121a5e]">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        <div id="our_blog" className="pt-[100px]">
          <div className=" w-[1140px] m-auto flex flex-col">
            <div className="flex flex-col items-center gap-2.5 px-[360px] py-0">
              <h1 className="text-[#121a5e] font-semibold text-xl">Oue Blog</h1>
              <h2 className="text-3xl font-semibold">Latest News & Articles</h2>
              <p className="text-center text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className=" w-[1140px] m-auto grid grid-cols-[auto_auto_auto] gap-5 mt-[50px]">
              <div className="bg-white flex flex-col gap-5 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px] group">
                <div className="newsone-img-back w-full bg-center bg-no-repeat bg-cover h-[236px] group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease]"></div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#7a7a7a] text-xs">April 4, 2021</p>
                  <h1 className="text-[#272b36] font-medium">
                    Digital Conference Of IT Tech Events in 2020
                  </h1>
                  <p className="text-[14px] text-[#7a7a7a]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Link href="/Blogs" className=" flex gap-2.5 text-xs mt-2.5">
                    Read more{' '}
                    <Image src={rightarrowline} alt="headerImg" width={15} />
                  </Link>
                </div>
              </div>

              <div className="bg-white flex flex-col gap-5 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px] group">
                <div className="newsone-img-back w-full bg-center bg-no-repeat bg-cover h-[236px] group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease]"></div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#7a7a7a] text-xs">April 4, 2021</p>
                  <h1 className="text-[#272b36] font-medium">
                    Digital Conference Of IT Tech Events in 2020
                  </h1>
                  <p className="text-[14px] text-[#7a7a7a]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Link href="/Blogs" className=" flex gap-2.5 text-xs mt-2.5">
                    Read more{' '}
                    <Image src={rightarrowline} alt="headerImg" width={15} />
                  </Link>
                </div>
              </div>

              <div className="bg-white flex flex-col gap-5 rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px] group">
                <div className="newsone-img-back w-full bg-center bg-no-repeat bg-cover h-[236px] group-hover:rotate-2 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[0.4s] ease-[ease]"></div>

                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#7a7a7a] text-xs">April 4, 2021</p>
                  <h1 className="text-[#272b36] font-medium">
                    Digital Conference Of IT Tech Events in 2020
                  </h1>
                  <p className="text-[14px] text-[#7a7a7a]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Link href="/Blogs" className=" flex gap-2.5 text-xs mt-2.5">
                    Read more{' '}
                    <Image src={rightarrowline} alt="headerImg" width={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ScrollToTop />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
