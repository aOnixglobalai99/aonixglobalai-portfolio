import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo/logo.png';
import phone from '../../assets/footerImages/phone.svg';
import email from '../../assets/footerImages/email.svg';
import linkedin from '../../assets/footerImages/linkedin.svg';
import insta from '../../assets/footerImages/insta.svg';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="client-footer-div bg-[#078dd7] w-full bg-center bg-no-repeat bg-cover relative z-1">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white p-2 rounded-2xl w-fit">
              <Image src={logo} alt="Logo" width={45} height={45} />
              <h1 className="text-2xl sm:text-3xl font-bold text-[#121a5e]">
                Aonix<span className="text-[#078dd7]">Global</span>
                <span className="text-[#121a5e]">AI</span>
              </h1>
            </div>

            <p className="text-white text-sm sm:text-base">
              Empowering the Future with Intelligent Solutions
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src="https://img.icons8.com/?size=48&id=uzeKRJIGwbBY&format=png"
                  alt="Location"
                  width={15}
                  height={15}
                  className="h-5 w-auto"
                />
                <p className="text-white text-sm">Indore, Madhya Pradesh</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Image src={email} alt="Email" width={15} height={15} />
                <a
                  href="mailto:support@aonixglobalai.com"
                  className="text-white text-sm hover:underline"
                >
                  support@aonixglobalai.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Image src={phone} alt="Phone" width={15} height={15} />
                <a
                  href="tel:+918709871715"
                  className="text-white text-sm hover:underline"
                >
                  (+91) 8709871715
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-[20%] flex flex-col gap-5">
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
          </div> */}

          {/* Other Pages Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              Other Pages
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="text-white text-sm">
                <Link href="/" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Home
                  </span>
                </Link>
              </li>
              <li className="text-white text-sm">
                <Link href="/Service" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Services
                  </span>
                </Link>
              </li>
              <li className="text-white text-sm">
                <Link href="/Industries" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Industry
                  </span>
                </Link>
              </li>

              <li className="text-white text-sm">
                <Link href="/OurWork" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Our Work
                  </span>
                </Link>
              </li>
              <li className="text-white text-sm">
                <Link href="/Blog" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="text-white text-sm">
                <Link href="/ContactUs" className="flex items-center group">
                  <FaChevronRight
                    className="text-blue-500 group-hover:text-blue-400"
                    size={14}
                  />
                  <span className="ml-2 group-hover:text-blue-400 transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-white text-sm">Get the latest news & updates</p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                {
                  href: 'https://www.linkedin.com/company/aonixglobalai/',
                  icon: linkedin,
                  size: 12,
                },
                {
                  href: '#',
                  icon: 'https://img.icons8.com/?size=24&id=de4vjQ6J061l&format=png',
                  size: 15,
                },
                {
                  href: 'https://www.instagram.com/aonixglobalai/',
                  icon: insta,
                  size: 15,
                },
                {
                  href: 'https://dribbble.com/AonixGlobalAI',
                  icon: 'https://img.icons8.com/?size=32&id=16154&format=png',
                  size: 18,
                },
                {
                  href: 'https://www.behance.net/aonixgldevelop',
                  icon: 'https://img.icons8.com/?size=24&id=HvLKZeTLqQZn&format=png',
                  size: 15,
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors"
                  target="_blank"
                >
                  <Image
                    src={social.icon}
                    alt="Social Icon"
                    width={social.size}
                    height={social.size}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-white/30">
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-white text-sm">
            <p>Copyright © 2025 AonixGlobalAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
