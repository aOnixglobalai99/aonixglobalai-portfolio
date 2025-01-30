import React from 'react';
import Image from 'next/image';
import {
  FaTwitter,
  FaLinkedinIn,
  FaCode,
  FaPaintBrush,
  FaCogs,
  FaUsers,
} from 'react-icons/fa';

// Images
import team from '../assets/images/TeamWork.png';
import laptop from '../assets/images/laptopwork.png';
import john from '../assets/images/john.jpeg';
import jane from '../assets/images/jane.jpeg';
import alice from '../assets/images/alice.jpeg';
import michael from '../assets/images/michael.jpeg';
import emily from '../assets/images/emily.jpeg';
import chris from '../assets/images/chris.jpeg';

// Team Members Data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Frontend Developer',
    image: john,
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    image: jane,
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Alice Johnson',
    role: 'Backend Developer',
    image: alice,
    twitter: 'https://twitter.com/alicejohnson',
    linkedin: 'https://linkedin.com/in/alicejohnson',
  },
  {
    name: 'Michael Brown',
    role: 'Project Manager',
    image: michael,
    twitter: 'https://twitter.com/michaelbrown',
    linkedin: 'https://linkedin.com/in/michaelbrown',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    image: emily,
    twitter: 'https://twitter.com/emilydavis',
    linkedin: 'https://linkedin.com/in/emilydavis',
  },
  {
    name: 'Chris Wilson',
    role: 'Data Scientist',
    image: chris,
    twitter: 'https://twitter.com/chriswilson',
    linkedin: 'https://linkedin.com/in/chriswilson',
  },
];

// Expertise Areas Data
const expertiseAreas = [
  {
    title: 'Web Development',
    description:
      'We specialize in building fast, responsive, and user-friendly websites using the latest technologies.',
    icon: <FaCode size={40} className="text-blue-500" />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Our design team ensures the best user experience and visually appealing interfaces for all our products.',
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
  },
  {
    title: 'Backend Development',
    description:
      'We create scalable and secure backend systems that ensure seamless functionality and performance.',
    icon: <FaCogs size={40} className="text-green-500" />,
  },
  {
    title: 'Team Collaboration',
    description:
      'Our team works closely together to deliver the best results, ensuring transparency and strong communication.',
    icon: <FaUsers size={40} className="text-yellow-500" />,
  },
];

const OurTeam = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <Image src={team} alt="Our Team" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center group">
          <h1 className="text-white tracking-widest text-6xl font-bold transition-transform duration-800 hover:cursor-pointer hover:scale-110">
            Our Team
          </h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-medium tracking-widest text-gray-800 mb-8">
            Meet Our Amazing Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-96 object-cover shadow-lg transition-opacity duration-500 group-hover:opacity-30"
                />
                {/* Details on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-5">
                  <h3 className="text-4xl tracking-wider font-normal">
                    {member.name}
                  </h3>
                  <p className="text-white tracking-wide">{member.role}</p>
                  <div className="flex space-x-4 mt-3">
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Section with Background Image Effect */}
      <section
        className="h-screen relative py-12 bg-transparent text-center"
        style={{
          backgroundImage: `url(${laptop.src})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex"></div>
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
          <h2 className="text-7xl font-bold mb-4 tracking-wide">
            Join Our Mission
          </h2>
          <p className="max-w-5xl mx-auto text-lg pt-9 text-center tracking-wider">
            We strive to innovate and bring value to our customers. Stay
            connected and follow us for more updates!
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-9xl mx-auto px-4">
          <h2 className="text-5xl font-medium tracking-widest text-gray-800 mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-1">{expertise.icon}</div>
                <h3 className="text-2xl text-gray-800 mb-2 font-mono font-medium">
                  {expertise.title}
                </h3>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
