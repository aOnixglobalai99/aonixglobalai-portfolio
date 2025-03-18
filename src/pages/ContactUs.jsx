import React from "react";

const Contact = () => {
  return (<div className="flex pt-20 flex-col lg:flex-row-reverse justify-center items-center min-h-screen p-6 bg-gray-100 gap-12">
      <div className="lg:mr-12 mt-8 lg:mt-0 text-center lg:text-left max-w-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">CONTACT US</h2>
        <h3 className="text-3xl font-bold mb-4">Let's Get In Touch</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
        <div className="space-y-4">
          <p>
            <strong>Delhi Office</strong>: Jl. office No.70, Bali
          </p>
          <p>
            <strong>Uber Office</strong>: Jl. Raya dewata No.44, Uber
          </p>
          <p>
            <strong>Calling Support</strong>: (+91)817 235 26512
          </p>
          <p>
            <strong>Email</strong>: support@domain.com
          </p>
        </div>
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <button className="bg-blue-500 text-white p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.596 24 1.325 24h11.497v-9.294H9.294V10.41h3.528V7.897c0-3.51 2.14-5.428 5.265-5.428 1.498 0 2.782.11 3.155.16v3.657h-2.167c-1.7 0-2.03.81-2.03 1.99v2.602h4.065l-.53 4.296h-3.535V24h6.927c.73 0 1.326-.594 1.326-1.326V1.326C24 .593 23.405 0 22.675 0z" />
            </svg>
          </button>
          <button className="bg-blue-500 text-white p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.93 13.93 0 011.671 3.15a4.822 4.822 0 001.523 6.573 4.902 4.902 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.923 4.923 0 004.6 3.417A9.868 9.868 0 010 21.542a13.905 13.905 0 007.548 2.209c9.056 0 14.001-7.513 14.001-14.027 0-.213 0-.426-.015-.637A9.936 9.936 0 0024 4.59z" />
            </svg>
          </button>
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

export default Contact;
