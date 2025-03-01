import React from 'react';
import Image from 'next/image';
// import // FaTwitter,
// FaLinkedinIn,
// FaCode,
// FaPaintBrush,
// FaCogs,
// FaUsers,
// 'react-icons/fa';
import shubham from '../../assets/ourTeam/shubham.jpg';
import neha from '../../assets/ourTeam/neha.jpg';
import Dilrus from '../../assets/ourTeam/Dilras_Hussain.jpeg';
import Jeba from '../../assets/ourTeam/Jeba_Shertate.jpg';
import Avinash from '../../assets/ourTeam/Avinash_Dubey.jpg';
import Riya from '../../assets/ourTeam/Riya_Rana.jpg';

// Team Members Data
const teamMembers = [
  {
    name: 'Neha Singh',
    role: 'MERN Developer',
    image: neha,
    // twitter: '',
    // linkedin: 'https://www.linkedin.com/in/neha-singh-2142392a1/',
  },
  {
    name: 'Shubham Kumar Gupta',
    role: 'MERN Developer',
    image: shubham,
    // twitter: '',
    // linkedin: 'https://www.linkedin.com/in/iamshubhamkumargupta/',
  },
  {
    name: 'Riya Rana',
    role: 'MERN Developer',
    image: Riya,
    // twitter: '',
    // linkedin: 'https://www.linkedin.com/in/riyaranadseu/',
  },
  {
    name: 'Dilras Hussain',
    role: 'Nodejs backend developer',
    image: Dilrus,
    // twitter: '',
    // linkedin: 'https://linkedin.com/in/dilras-hussain-330474207',
  },
  {
    name: 'Jeba Shertate',
    role: 'UI/UX',
    image: Jeba,
    // twitter: '',
    // linkedin: 'https://www.linkedin.com/in/jeba-shertate-754068248/',
  },
  {
    name: 'Avinash Dube',
    role: 'DevOps Engineer',
    image: Avinash,
    // twitter: '',
    // linkedin: 'https://www.linkedin.com/in/avinash-dubey-7b996b178/',
  },
];

// Expertise Areas Data
// const expertiseAreas = [
//   {
//     title: 'Web Development',
//     description:
//       'We specialize in building fast, responsive, and user-friendly websites using the latest technologies.',
//     icon: <FaCode size={40} className="text-blue-500" />,
//   },
//   {
//     title: 'UI/UX Design',
//     description:
//       'Our design team ensures the best user experience and visually appealing interfaces for all our products.',
//     icon: <FaPaintBrush size={40} className="text-pink-500" />,
//   },
//   {
//     title: 'Backend Development',
//     description:
//       'We create scalable and secure backend systems that ensure seamless functionality and performance.',
//     icon: <FaCogs size={40} className="text-green-500" />,
//   },
//   {
//     title: 'Team Collaboration',
//     description:
//       'Our team works closely together to deliver the best results, ensuring transparency and strong communication.',
//     icon: <FaUsers size={40} className="text-yellow-500" />,
//   },
// ];

const OurTeam = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative mt-4">
        <Image src={team} alt="Our Team" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center group">
          <h1 className="text-white tracking-widest text-6xl font-bold transition-transform duration-800 hover:cursor-pointer hover:scale-110">
            Our Team
          </h1>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="bg-white mb-[100px]">
        <div className="max-w-[1140px] mx-auto text-center">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900 px-4">
              Meet Our Amazing Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pt-[100px]">
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
                  {/* <div className="flex space-x-4 mt-3">
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
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Section with Background Image Effect */}
      {/* <section
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
      </section> */}

      {/* Expertise Section */}
      {/* <section className="py-20 bg-gray-50 text-center">
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
      </section> */}
    </>
  );
};

export default OurTeam;
