'use client';
import React, { useEffect, useState } from 'react';
import categories from '../../components/industries/IndustriesData';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Category types
interface Category {
  faqs: React.FC;
  title: string;
  imageUrl: string;
  description: string;
  services: { title: string; description: string }[];
  industries: string[];
  industryImages: string[];
  trustFactors: { title: string; description: string }[];
}

// Separate component for rendering category details
const CategoryDetails: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-5">
        <Image
          src={category.imageUrl}
          alt={category.title}
          width={600}
          height={400}
          className="w-full h-auto max-h-96 object-cover mb-6 rounded-lg shadow-md"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <section className="mb-9">
          <h2 className="text-3xl font-semibold tracking-wide mb-4">
            {category.title.replace(/([A-Z])/g, '$1').trim()} through Web and
            App Development By AonixGlobalAI
          </h2>
          <p className="mb-8">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.services.map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/images/industry/tick.png"
                  width={60}
                  height={40}
                  alt={category.title.replace(/([A-Z])/g, ' $1').trim()}
                  className="w-10 h-10 mb-6"
                />
                <h3 className="text-xl font-bold text-[#03104e] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl tracking-wide font-semibold mb-6">
            Industries That Can Benefit from Our{' '}
            {category.title.replace(/([A-Z])/g, '$1').trim()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {category.industries.map((industry, index) => (
              <div key={index} className="relative">
                {category.industryImages[index] && (
                  <Image
                    src={category.industryImages[index]}
                    alt={industry}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
                <p className="absolute bottom-2 left-2 right-2 text-center text-[#121a5e] font-bold bg-white bg-opacity-75 px-2 py-1 rounded">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl tracking-wide font-semibold mb-9">
            Why Trust Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.trustFactors.map((factor, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <h3 className="text-xl font-bold text-[#03104e] mb-6">
                  {factor.title}
                </h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section>{React.createElement(category.faqs)}</section>
    </div>
  );
};

const DetailIndustry: React.FC = () => {
  const params = useParams();
  const industry = params?.industry as string | undefined; // Extract industry param
  const [category, setCategory] = useState<Category | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (industry) {
      const foundCategory = categories.find(
        (cat) =>
          cat.title.replace(/\s+/g, '-').toLowerCase() ===
          industry.toLowerCase()
      );
      setCategory(foundCategory || null);
    }
  }, [industry]);

  if (!isMounted || !category) {
    return <div>Loading...</div>;
  }

  return <CategoryDetails category={category} />;
};

export default DetailIndustry;
