import React from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import phone from '../assets/images/phone.svg';
import email from '../assets/images/email.svg';
import linkedin from '../assets/images/linkedin.svg';
import insta from '../assets/images/insta.svg';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="client-footer-div bg-[#078dd7] h-[400px] w-full bg-center bg-no-repeat bg-cover relative mt-[100px]">
      <div className=" w-[1140px] m-auto flex flex-col gap-5 py-10 ">
        <div className="flex gap-5">
          <div className="w-[30%] flex flex-col px-0 justify-between">
            <div className="flex items-center gap-[15px] bg-white p-[5px] rounded-2xl">
              <Image src={logo} alt="headerImg" width={45} height={45} />
              <h1 className="text-3xl font-bold text-[#121a5e]">
                Aonix<span className="text-[#078dd7]">Global</span>
                <span className="text-[#121a5e]">AI</span>
              </h1>
            </div>
            <p className="text-[white] text-[15px] pt-[10px]">
              Empowering the Future with Intelligent Solutions
            </p>
            <div className="flex flex-col gap-3 mt-[30px]">
              <div className="flex gap-2.5">
                <img
                  src="https://img.icons8.com/?size=48&id=uzeKRJIGwbBY&format=png"
                  alt="headerImg"
                  width={15}
                  height={10}
                  className="h-[20px]"
                />
                <p className="text-[white] text-[15px]">
                  Indore, Madhya Pradesh
                </p>
              </div>
              <div className="flex gap-2.5">
                <Image src={email} alt="headerImg" width={15} height={10} />
                <p className="text-[white] text-[15px]">
                  support@aonixglobalai.com
                </p>
              </div>
              <div className="flex gap-2.5">
                <Image src={phone} alt="headerImg" width={15} height={10} />
                <p className="text-[white] text-[15px]">(+91) 8709871715</p>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-col gap-5">
            <h1 className="text-[white] text-[25px]">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-[15px]">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" size={16} />
                  <span className="ml-2 hover:text-blue-500">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li className="text-white text-[15px]">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" size={16} />
                  <span className="ml-2 hover:text-blue-500">
                    Term Of Service
                  </span>
                </Link>
              </li>
              <li className="text-white text-[15px]">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" size={16} />
                  <span className="ml-2 hover:text-blue-500">Disclaimer</span>
                </Link>
              </li>
              <li className="text-white text-[15px]">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" size={16} />
                  <span className="ml-2 hover:text-blue-500">Credits</span>
                </Link>
              </li>
              <li className="text-white text-[15px]">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" size={16} />
                  <span className="ml-2 hover:text-blue-500">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[20%] flex flex-col gap-5">
            <h1 className="text-[white] text-[25px]">Other Pages</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-[15px] flex items-center">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" />
                  <span className="ml-2 hover:text-blue-500">Home</span>
                </Link>
              </li>
              <li className="text-white text-[15px] flex items-center">
                <Link href="#our_services" className="flex items-center">
                  <FaChevronRight className="text-blue-500" />
                  <span className="ml-2 hover:text-blue-500">Services</span>
                </Link>
              </li>
              <li className="text-white text-[15px] flex items-center">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" />
                  <span className="ml-2 hover:text-blue-500">Contact</span>
                </Link>
              </li>
              <li className="text-white text-[15px] flex items-center">
                <Link href="#" className="flex items-center">
                  <FaChevronRight className="text-blue-500" />
                  <span className="ml-2 hover:text-blue-500">Project</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[30%] flex flex-col gap-5">
            <h2 className="text-[white] p-[5px] text-[25px]">Newsletter</h2>
            <div className="bg-white flex gap-[5px] p-[5px]">
              <input className="text-[15px] border-[unset]" />
              <button className="text-[15px] h-10 flex items-center text-[white] font-semibold px-5 py-0 bg-[#121a5e]">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-[white] text-[15px]">
              Get the latest news & updates
            </p>
            <div className="flex gap-8">
              {/* LinkedIn clickable logo */}
              <Link
                href=""
                className="bg-[white] w-10 h-10 flex items-center justify-center rounded-[50%]"
              >
                <Image src={linkedin} alt="headerImg" width={12} height={12} />
              </Link>
              {/* Twitter(X) clickable logo */}
              <Link
                href=""
                className="bg-[white] w-10 h-10 flex items-center justify-center rounded-[50%]"
              >
                <Image
                  src={
                    'https://img.icons8.com/?size=24&id=de4vjQ6J061l&format=png'
                  }
                  alt="headerImg"
                  width={15}
                  height={15}
                />
              </Link>
              {/* Instagram Clickable logo */}
              <Link
                href=""
                className="bg-[white] w-10 h-10 flex items-center justify-center rounded-[50%]"
              >
                <Image src={insta} alt="headerImg" width={15} height={15} />
              </Link>
              {/* Dribble clickable logo */}
              <Link
                href=""
                className="bg-[white] w-10 h-10 flex items-center justify-center rounded-[50%]"
              >
                <Image
                  src={'https://img.icons8.com/?size=32&id=16154&format=png'}
                  alt="headerImg"
                  width={18}
                  height={18}
                />
              </Link>
              {/* Behance clickable logo */}
              <Link
                href=""
                className="bg-[white] w-10 h-10 flex items-center justify-center rounded-[50%]"
              >
                <Image
                  src={
                    'https://img.icons8.com/?size=24&id=HvLKZeTLqQZn&format=png'
                  }
                  alt="headerImg"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between absolute w-[1140px] pt-[30px] border-t-white border-t border-solid bottom-7">
          <p className="text-[white] text-[15px]">
            Technolgy & IT Solution Template Kit by Baliniz
          </p>
          <p className="text-[white] text-[15px]">
            Copyright © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
