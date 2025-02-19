import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedin from '../../assets/footerImages/linkedin.svg';
import insta from '../../assets/footerImages/insta.svg';
import Link from 'next/link';
import Image from 'next/image';
import { div } from 'framer-motion/client';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clearing error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // sending data to backend
      console.log('Form data:', formData);
      toast.success('We will get back to you shortly!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Clearing form
      setFormData({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: '',
      });
    } else {
      toast.error('Please fill in all required fields', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 mix-blend-overlay bg-[url('/contact-us-page-background-image.png')] w-full bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-full flex flex-col items-start justify-center w-full max-w-[1140px] mx-auto px-4">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-block px-4 py-2 bg-gray-700/30 rounded-full transition-all hover:bg-gray-700/50 cursor-pointer backdrop-blur-sm">
                <span className="text-blue-200 font-medium">Get in Touch</span>
              </div>
              <h1 className="text-white font-black text-[clamp(1.3rem,5vw,2.5rem)] max-w-[600px] leading-tight">
                Let's Connect and Build Something Amazing Together
              </h1>
              <p className="text-blue-100 text-[clamp(1rem,2vw,1.25rem)] max-w-[90%] md:max-w-[500px] leading-relaxed">
                Reach out to us for inquiries, collaborations, or just to say
                hello. We’d love to hear from you and discuss how we can help
                bring your ideas to life.
              </p>
              {/* <button
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          onClick={() => {
            router.push('/Contact');
          }}
        >
          Contact Us
        </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen p-6 gap-12 max-w-screen-xl mx-auto">
        <ToastContainer />

        <div className="lg:mr-12 mt-8 lg:mt-0 flex flex-col justify-center items-left max-w-md">
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

        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-2 border rounded-md ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full p-2 border rounded-md ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Telephone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Your Subject"
                className={`w-full p-2 border rounded-md ${
                  errors.subject ? 'border-red-500' : ''
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className={`w-full p-2 border rounded-md h-28 ${
                  errors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white p-3 rounded-md hover:bg-blue-600"
            >
              SUBMIT MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
