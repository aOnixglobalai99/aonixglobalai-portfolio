import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/company/aonixglobalai/", icon: <FaLinkedin />, color: "bg-blue-600" },
  { href: "https://www.instagram.com/aonixglobalai/", icon: <FaInstagram />, color: "bg-pink-600" },
  { href: "https://dribbble.com/AonixGlobalAI", icon: <FaDribbble />, color: "bg-pink-500" },
  { href: "https://www.behance.net/aonixgldevelop", icon: <FaBehance />, color: "bg-blue-700" },
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
