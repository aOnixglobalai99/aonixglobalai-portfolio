'use client';
// import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { FaChevronDown } from 'react-icons/fa';
// import Dropdown from './Dropdown';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1140px] flex items-center justify-between m-auto px-4 py-6 bg-white">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="headerImg" width={45} height={45} />
        <h1 className="text-xl md:text-3xl font-bold text-[#121a5e]">
          Aonix<span className="text-[#078dd7]">Global</span>
          <span className="text-[#121a5e]">AI</span>
        </h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href=""
            >
              AI
            </Link>
          </li>
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href="#our_services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href=""
            >
              Industry
            </Link>
          </li>
          {/* Dropdown for PAGES */}
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href=""
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href="#our_blog"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e] transition-[0.3s]"
              href="#contact_us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-[#078dd7] rounded text-lg font-semibold text-[white] p-2.5 hover:bg-[#077bc8] transition-[0.3s]">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default Header;
