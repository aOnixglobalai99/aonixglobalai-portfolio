'use client';
import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import categories from '../../components/industries/IndustriesData';
import Image, { StaticImageData } from 'next/image';
import Logo from '../../../assets/industries/tick.png';
import { useRouter } from 'next/router';
// Data Objects

const DetailIndustry = () => {
  const router = useRouter();
  const { industry } = router.query;
  console.log(industry);

  const [category, setCategory] = useState<{
    title: string;
    imageUrl: StaticImageData;
    services: { title: string; description: string }[];
    industries: string[];
    trustFactors: { title: string; description: string }[];
  } | null>(null);

  useEffect(() => {
    if (industry) {
      // Find the category based on the title
      const foundCategory = categories.find(
        (cat) => cat.title.replace(/\s+/g, '-') === industry
      );
      if (foundCategory) {
        setCategory(foundCategory);
      }
    }
  }, [industry]);

  console.log(category);

  return (
    <div className="max-w-5xl mx-auto p-5 pt-[100px]">
      {category && (
        <Image
          src={category.imageUrl}
          alt="Telecom Networking Services"
          className="w-full h-96 mb-6 rounded-lg shadow-md"
        />
      )}

      {/* Services Section */}
      <section className="mb-9">
        <h2 className="text-3xl font-semibold tracking-wide mb-9">
          {category?.title.replace(/([A-Z])/g, ' $1').trim()} Services Offered
          By AonixGlobalAI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category?.services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={Logo}
                alt={category?.title.replace(/([A-Z])/g, ' $1').trim()}
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold mb-2 text-[#03104e]">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="mb-6">
        <h2 className="text-3xl tracking-wide font-semibold mb-3">
          Industries That Can Benefit from Our{' '}
          {category?.title.replace(/([A-Z])/g, ' $1').trim()}
        </h2>
        <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {category?.industries.map((industry, index) => (
            <li key={index} className="text-gray-700">
              {industry}
            </li>
          ))}
        </ul>
      </section>

      {/* Trust Factors Section */}
      <section className="mb-6">
        <h2 className="text-3xl tracking-wide font-semibold mb-9">
          Why Trust Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category?.trustFactors.map((factor, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <h3 className="text-xl font-bold mb-2 text-[#03104e]">
                {factor.title}
              </h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailIndustry;
