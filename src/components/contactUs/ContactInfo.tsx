import React from "react";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <div className="lg:mr-12 mt-8 lg:mt-0 flex flex-col max-w-md">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
        <p>Let&apos;s discuss how we can help empower your business.</p>
        <p className="mt-3">✉️ <a href="mailto:support@aonixglobalai.com" className="hover:underline">support@aonixglobalai.com</a></p>
        <p>📞 <a href="tel:+918709871715" className="hover:underline">(+91) 8709871715</a></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-md border hover:shadow-lg">
          <div className="flex flex-col items-center text-center">
            <MdLocationOn className="text-blue-500 text-2xl" />
            <h3 className="font-semibold mt-2">Visit Our Office</h3>
            <p className="text-gray-600 text-sm">Indore, Madhya Pradesh, India</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md border hover:shadow-lg">
          <div className="flex flex-col items-center text-center">
            <MdAccessTime className="text-blue-500 text-2xl" />
            <h3 className="font-semibold mt-2">Business Hours</h3>
            <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM IST</p>
          </div>
        </div>
      </div>

      <SocialLinks />
    </div>
  );
};

export default ContactInfo;
