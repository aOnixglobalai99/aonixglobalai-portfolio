import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaBehance, FaFacebook } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // ✅ Twitter (X)

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/aonixglobalai/",
    icon: <FaLinkedin />,
    color: "bg-blue-600"
  },
  {
    href: "https://x.com/AonixGlobalAI",
    icon: <SiX />,
    color: "bg-black"
  },
  {
    href: "https://www.instagram.com/aonixglobalai/",
    icon: <FaInstagram />,
    color: "bg-pink-600"
  },
  {
    href: "https://www.facebook.com/profile.php?id=61577369285356",
    icon: <FaFacebook />,
    color: "bg-blue-800"
  },
  {
    href: "https://www.behance.net/aonixgldevelop",
    icon: <FaBehance />,
    color: "bg-blue-700"
  }
];


const SocialLinks = () => (
  <div className="flex gap-3">
    {socialLinks.map(({ href, icon, color }, idx) => (
      <Link key={idx} href={href} className={`${color} text-white w-10 h-10 flex items-center justify-center rounded-full`}>
        {icon}
      </Link>
    ))}
  </div>
);

export default SocialLinks;
