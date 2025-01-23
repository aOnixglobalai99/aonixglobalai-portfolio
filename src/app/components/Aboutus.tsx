import React from 'react';
import Image from 'next/image';

import logo from '../assets/images/logo.png';
import Link from 'next/link';
import tick from '../assets/images/tick-icon.svg';
import whitetick from '../assets/images/whitetick.svg';
const AboutUs = () => {
  return (
    <div className="">
      <div className="aboutus-back h-[400px] bg-center bg-no-repeat bg-cover">
        <div className="h-full flex  items-center w-[1140px] justify-center m-auto">
          <h1 className="text-[white] text-[50px]">About Us</h1>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className=" w-[1140px] m-auto flex gap-5">
          <div className="about-us-div h-[500px] w-6/12 bg-center bg-no-repeat bg-cover relative">
            <div className="absolute"></div>
          </div>
          <div className="w-6/12 flex flex-col gap-5">
            <div>
              <h1 className="text-[#121a5e] font-semibold text-xl">About Us</h1>
              <h2 className="text-[35px] font-bold leading-[42px] mt-5">
                Let Us Be Your Partners Preferred IT Partner
              </h2>
              <p className="text-xs mt-[15px] pl-0 pr-[150px] py-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div className="ml-[50px] pl-10 pr-[70px] py-0 border-l-[3px] border-l-[#121a5e] border-solid">
              <h1 className="text-[#121a5e] font-semibold text-[15px]">
                As one of the world’s largest IT Service Providers, our deep
                pool of over 130 certified engineers and IT support staff
              </h1>
              <p className="text-xs mt-[15px] pl-0 pr-[120px] py-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>

            <div>
              <button className="bg-[#078dd7] rounded font-semibold text-[white]  hover:bg-[#077bc8] transition-[0.3s] text-[10px] p-2">
                GET STARTED
              </button>
              <ul className="gap-2.5 flex flex-col mt-5">
                <li className="text-[10px] flex gap-1">
                  <Image src={tick} alt="headerImg" width={15} height={10} />
                  We are committed to providing quality IT Services
                </li>
                <li className="text-[10px] flex gap-1">
                  <Image src={tick} alt="headerImg" width={15} height={10} /> We
                  are committed to providing quality IT Services
                </li>
                <li className="text-[10px] flex gap-1">
                  <Image src={tick} alt="headerImg" width={15} height={10} /> We
                  are committed to providing quality IT Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] mb-[100px]">
        <div className=" w-[1140px] m-auto grid grid-cols-[auto_auto_auto] gap-5">
          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="bg-white text-center shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center gap-5 border-neutral-100 px-[30px] py-[33px] rounded-[0px_0px_0px_0px] border-solid border-[0px_0px_0px_0px]">
            <Image src={logo} alt="headerImg" width={45} height={45} />
            <h1 className="font-bold">IT Expertise</h1>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>

      <section className="engineer-team-back relative">
        <div className=" bg-black opacity-70 h-full w-full flex items-center gap-5 absolute flex-col px-[181px] py-[100px]">
          <h1 className="text-[40px] text-[white] font-bold text-center w-9/12">
            Don’t Hesitate To Contact Us For Better Information And Services
          </h1>
          <p className="text-[22px] text-[white] font-medium text-center p-0 w-9/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </section>

      <section className="mt-[-100px]">
        <div className=" w-[1140px] m-auto flex shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] bg-white">
          <div className="submit-form-div-left bg-center bg-no-repeat bg-cover relative w-6/12 p-10">
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-[40px] text-[white] font-bold leading-[45px]">
                Perfect Solutions For Your Business
              </h2>
              <p className="text-base text-[white]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <ul className="gap-2.5 flex flex-col mt-5">
                <li className="text-[16px] text-[white] flex gap-1">
                  <Image
                    src={whitetick}
                    alt="headerImg"
                    width={15}
                    height={10}
                  />
                  We are committed to providing quality IT Services
                </li>
                <li className="text-[16px] text-[white] flex gap-1">
                  <Image
                    src={whitetick}
                    alt="headerImg"
                    width={15}
                    height={10}
                  />{' '}
                  We are committed to providing quality IT Services
                </li>
                <li className="text-[16px] text-[white] flex gap-1">
                  <Image
                    src={whitetick}
                    alt="headerImg"
                    width={15}
                    height={10}
                  />{' '}
                  We are committed to providing quality IT Services
                </li>
                <li className="text-[16px] text-[white] flex gap-1">
                  <Image
                    src={whitetick}
                    alt="headerImg"
                    width={15}
                    height={10}
                  />{' '}
                  We are committed to providing quality IT Services
                </li>
              </ul>
              <div className="flex gap-5 mt-[50px]">
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
                  Read more
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
                <label className="text-[#121a5e] text-[15px]">Telephone</label>
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
    </div>
  );
};

export default AboutUs;
