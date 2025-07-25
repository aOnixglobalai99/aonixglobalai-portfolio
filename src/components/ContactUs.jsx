import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { SiX } from 'react-icons/si'; // ✅ New clean X icon
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Form data:', formData);
        toast.success('Thank you! We will get back to you shortly.', {
          position: 'top-right',
          autoClose: 3000,
        });

        // Clearing form
        setFormData({
          name: '',
          email: '',
          telephone: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        toast.error('Something went wrong. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error('Please fill in all required fields', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen md:p-6 bg-gray-50 gap-24">
      <ToastContainer />

      {/* Contact Information */}
      <div className="lg:mr-12 mt-8 lg:mt-0 flex flex-col justify-center items-left max-w-md">
        <div className="bg-blue-500 text-white p-6 rounded-sm md:rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-6">
            Ready to transform your business with intelligent solutions? We're
            here to help you navigate the possibilities.
          </p>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex-shrink-0">✉️</span>
            <a
              href="mailto:support@aonixglobalai.com"
              className="hover:underline transition-colors"
            >
              support@aonixglobalai.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0">📞</span>
            <a
              href="tel:+918709871715"
              className="hover:underline transition-colors"
            >
              (+91) 8319177429
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-sm md:rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <MdLocationOn className="text-blue-500" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Visit Our Office</h3>
              <p className="text-gray-600 text-sm">
                Indore, Madhya Pradesh, India
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-sm md:rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <MdAccessTime className="text-blue-500" size={24} />
              </div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM IST</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <SocialLink
              href="https://www.linkedin.com/company/aonixglobalai/"
              icon={<FaLinkedin size={18} />}
              label="LinkedIn"
              color="bg-blue-600"
            />
            <SocialLink
              href="https://x.com/AonixGlobalAI"
              icon={<SiX size={18} />}
              label="X"
              color="bg-black"
            />
            <SocialLink
              href="https://www.instagram.com/aonixglobalai/"
              icon={<FaInstagram size={18} />}
              label="Instagram"
              color="bg-pink-600"
            />

            <SocialLink
              href="https://www.facebook.com/profile.php?id=61577369285356"
              icon={<FaFacebook size={18} />}
              label="Facebook"
              color="bg-blue-800"
            />
            <SocialLink
              href="https://www.behance.net/aonixgldevelop"
              icon={<FaBehance size={18} />}
              label="Behance"
              color="bg-blue-700"
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 shadow-lg rounded-sm md:rounded-lg w-full max-w-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />

            <FormField
              label="Telephone"
              name="telephone"
              type="tel"
              placeholder="Your Phone (Optional)"
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>

          <FormField
            label="Subject"
            name="subject"
            type="text"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleInputChange}
            error={errors.subject}
            required
          />

          <FormField
            label="Message"
            name="message"
            type="textarea"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center justify-center"
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT MESSAGE'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Helper Components
const SocialLink = ({ href, icon, label, color }) => (
  <Link
    href={href}
    className={`${color} text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity shadow-sm`}
    target="_blank"
    aria-label={label}
  >
    {icon}
  </Link>
);

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all ${error ? 'border-red-500' : 'border-gray-300'
          }`}
        rows={4}
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all ${error ? 'border-red-500' : 'border-gray-300'
          }`}
      />
    )}

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Contact;
