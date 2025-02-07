import React from 'react';
import linkedin from '../../assets/footerImages/linkedin.svg';
import insta from '../../assets/footerImages/insta.svg';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen p-6 bg-gray-100 gap-12">
      <div className="lg:mr-12 mt-8 lg:mt-0 flex flex-col justify-center items-left  max-w-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">CONTACT US</h2>
        <h3 className="text-3xl font-bold mb-4">Let's Get In Touch</h3>
        <p className="text-gray-600 mb-6">
          Let's connect and discuss how we can empower your business with
          intelligent solutions. Whether you have questions, need support, or
          want to explore our services, we're here to help.
        </p>
        <div className="space-y-4">
          <p>
            <strong>Inbore Office</strong>: Indore, Madhya Pradesh, India
          </p>
          {/* <p>
            <strong>Uber Office</strong>: Jl. Raya dewata No.44, Uber
          </p> */}
          <p>
            <strong>Calling Support</strong>:{' '}
            <a href="tel:+918709871715" className="text-sm hover:underline">
              (+91) 8709871715
            </a>
          </p>
          <p>
            <strong>Email</strong>:{' '}
            <a
              href="mailto:support@aonixglobalai.com"
              className="text-sm hover:underline"
            >
              support@aonixglobalai.com
            </a>
          </p>
        </div>
        {/* Social Links */}
        <div className="flex flex-wrap gap-4 mt-4">
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

      {/* Contact Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Telephone</label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded-md h-28"
            ></textarea>
          </div>
          <button className="w-full bg-blue-400 text-white p-3 rounded-md hover:bg-blue-600">
            SUBMIT MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
