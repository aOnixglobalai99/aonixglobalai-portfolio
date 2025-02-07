import React from 'react';
import Image from 'next/image';
import tick from '../../assets/images/tick-icon.svg';

const AboutUsPage = () => {
  return (
    <div id="about_us" className="pt-[100px] px-4 mb-[50px] md:mb-[100px]">
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
              trusted partners in digital transformation. Combining cutting-edge
              AI and technology solutions, we drive innovation and excellence to
              achieve your business goals.
            </p>
          </div>
          <div className="md:ml-[50px] pl-5 md:pl-10 pr-0 md:pr-[70px] py-0 border-l-[3px] border-l-[#121a5e] border-solid">
            <h1 className="text-[#121a5e] font-semibold text-sm md:text-[15px]">
              Our experts deliver scalable, secure, and future-ready solutions
              tailored to your needs, from infrastructure optimization to
              intelligent systems and custom applications, ensuring success in
              today&apos;s digital landscape.
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
                We tailor solutions to deliver exceptional results, aligned with
                client&apos;s vision.
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
  );
};

export default AboutUsPage;
