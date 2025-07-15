import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { subscribeEmail } from '@/redux/subscribeSlice';

import {
  FaChevronRight,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // ✅ New clean X icon

import logo from '../../assets/logo/logo.png';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("")
  const dispatch: AppDispatch = useDispatch();
  const handleSubscribe = async () => {
    const response = await dispatch(subscribeEmail(email))
    console.log(response)
    if (response) {
      alert(response.payload?.message)
    }
    setEmail("")
  }
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/aonixglobalai/',
      icon: <FaLinkedinIn size={16} />,
      alt: 'LinkedIn',
    },
    {
      href: 'https://x.com/AonixGlobalAI',
      icon: <SiX size={14} />,
      alt: 'X',
    },

    {
      href: 'https://www.instagram.com/aonixglobalai/',
      icon: <FaInstagram size={16} />,
      alt: 'Instagram',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61577369285356',
      icon: <FaFacebook size={16} />,
      alt: 'Facebook',
    },
    {
      href: 'https://www.behance.net/aonixgldevelop',
      icon: <FaBehance size={16} />,
      alt: 'Behance',
    },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ServicePage', label: 'Services' },
    { href: '/Industries', label: 'Industry' },
    { href: '/OurWorkPage', label: 'Our Work' },
    { href: '/BlogPage', label: 'Blog' },
    { href: '/ContactUsPage', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-900 w-full bg-center bg-no-repeat bg-cover relative z-10">
      {/* top border - gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-xl w-fit shadow-lg shadow-indigo-500/10">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h1 className="text-2xl sm:text-3xl font-bold  text-indigo-600">
                Aonix<span className="text-sky-500">Global</span>
                <span className="text-indigo-600">AI</span>
              </h1>
            </div>

            <p className="text-slate-400 text-sm sm:text-base">
              Empowering the Future with Intelligent Solutions
            </p>

            <div className="flex flex-col gap-5 mt-2">
              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <FaMapMarkerAlt className="text-indigo-400 h-4 w-4" />
                </div>
                <p className="text-slate-300 text-sm">
                  Indore, Madhya Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <FaEnvelope className="text-indigo-400 h-4 w-4" />
                </div>
                <a
                  href="mailto:support@aonixglobalai.com"
                  className="text-slate-300 text-sm hover:text-indigo-300 transition-colors"
                >
                  support@aonixglobalai.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <FaPhone className="text-indigo-400 h-4 w-4" />
                </div>
                <a
                  href="tel:+918709871715"
                  className="text-slate-300 text-sm hover:text-indigo-300 transition-colors"
                >
                  (+91) 8319177429
                </a>
              </div>
            </div>
          </div>

          {/* Other Pages Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              Explore
            </h2>
            <ul className="flex flex-col gap-4 mt-2">
              {navLinks.map((link, index) => (
                <li key={index} className="text-slate-300 text-sm">
                  <Link href={link.href} className="flex items-center group">
                    <div className="bg-slate-800 w-8 h-8 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-600 transition-all duration-300">
                      <FaChevronRight
                        className="text-indigo-400 group-hover:text-white"
                        size={10}
                      />
                    </div>
                    <span className="group-hover:text-indigo-300 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              Stay Updated
            </h2>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    className="w-full p-4 pl-5 pr-12 rounded-xl border-0 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-300 placeholder-slate-500"
                    placeholder="Your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleSubscribe} className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium px-4 rounded-lg text-sm transition-colors">
                    SUBSCRIBE
                  </button>
                </div>
                <p className="text-slate-500 text-sm">
                  Get our latest news and updates
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-slate-800 hover:bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                    target="_blank"
                    aria-label={social.alt}
                  >
                    <span className="text-indigo-400 hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© {currentYear} AonixGlobalAI. All rights reserved.</p>
            {/* <div className="flex gap-8">
              <Link
                href="/privacy-policy"
                className="hover:text-indigo-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-indigo-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
