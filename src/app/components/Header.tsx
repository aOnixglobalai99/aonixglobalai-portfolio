'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handler to close menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-8 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-4">
            <Link
              href="#top"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Home
            </Link>
            <Link
              href=""
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              AI
            </Link>
            <Link
              href="#our_services"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Services
            </Link>
            <Link
              href="#industries"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Industry
            </Link>
            <Link
              href="#our_work"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Our Work
            </Link>
            <Link
              href="#our_blog"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Blog
            </Link>
            <Link
              href="#contact_us"
              onClick={handleLinkClick}
              className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
            >
              Contact Us
            </Link>
            <button
              onClick={handleLinkClick}
              className="w-full bg-[#078dd7] rounded text-lg font-semibold text-white p-2.5 hover:bg-[#077bc8]"
            >
              Call Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="header-back fixed w-full bg-white z-30">
        <div className="max-w-[1140px] mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            {/* Mobile View Container */}
            <div className="flex w-full lg:hidden items-center justify-between">
              {/* Hamburger for mobile */}
              <button
                className="text-[#078dd7]"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Logo for mobile - now on the right */}
              <div className="flex items-center gap-4">
                <Image src={logo} alt="headerImg" width={45} height={45} />
                <h1 className="text-xl md:text-3xl font-bold text-[#121a5e]">
                  Aonix<span className="text-[#078dd7]">Global</span>
                  <span className="text-[#121a5e]">AI</span>
                </h1>
              </div>
            </div>

            {/* Desktop View Container */}
            <div className="hidden lg:flex w-full items-center justify-between">
              {/* Logo for desktop */}
              <div className="flex items-center gap-4">
                <Image src={logo} alt="headerImg" width={45} height={45} />
                <h1 className="text-xl md:text-3xl font-bold text-[#121a5e]">
                  Aonix<span className="text-[#078dd7]">Global</span>
                  <span className="text-[#121a5e]">AI</span>
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center gap-8">
                <Link
                  href="#top"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Home
                </Link>
                <Link
                  href=""
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  AI
                </Link>
                <Link
                  href="#our_services"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Services
                </Link>
                <Link
                  href="#industries"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Industry
                </Link>
                <Link
                  href="#our_work"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Our Work
                </Link>
                <Link
                  href="#our_blog"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Blog
                </Link>
                <Link
                  href="#contact_us"
                  className="text-[15px] text-[#077bc8] font-semibold hover:text-[#121a5e]"
                >
                  Contact Us
                </Link>
                <button className="bg-[#078dd7] rounded text-lg font-semibold text-white p-2.5 hover:bg-[#077bc8]">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;
