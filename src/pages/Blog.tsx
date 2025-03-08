'use client';

import React from 'react';
import Articles from '../components/blog/BlogList';
// import { useRouter } from 'next/navigation';

const Blog = () => {
  // const router = useRouter();
  const BlogList: typeof Articles = Articles;

  return (
    <div id="blog" className="mb-[100px]">
      <div className="w-full px-4 md:w-[90%] xl:w-[1140px] mx-auto">
        <div className="text-center px-5 mb-[100px]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-blue-900">
              Our Blogs
            </h2>
          </div>
          <p className="text-center text-[15px] mt-5 px-2 md:px-10">
            Stay updated with our latest insights, industry trends, and
            technological innovations through our carefully curated blog posts.
            Our experts share valuable knowledge and experience in various
            domains.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 md:px-0">
          {BlogList.map((card, index) => (
            <div
              key={index}
              className="backgrounddd bg-white text-center shadow-md flex flex-col items-start justify-between gap-5 border rounded-lg overflow-hidden"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-4 relative">
                <h3 className="text-left font-bold text-lg absolute top-0">
                  {card.title}
                </h3>
                <p className="text-left text-sm mt-3 pt-14">
                  {card.description}
                </p>
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 ml-7"
                  onClick={() => window.open(card.blogPath, '_blank')}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
