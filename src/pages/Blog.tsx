'use client';

import React from 'react';
import Articles from '../components/blog/BlogList';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();
  const BlogList: typeof Articles = Articles;

  return (
    <div id="blog" className="pt-12 md:pt-[100px]">
      <div className="w-full px-4 md:w-[90%] lg:w-[1140px] mx-auto">
        <div className="text-center px-5">
          <div className="max-w-6xl mx-auto text-center -mb-20 max-md:mb-10 pb-4 md:pb-24">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-widest text-white  bg-blue-900 inline-block p-[20px] rounded-lg ">
              Our Blogs
            </h2>
          </div>
          <p className="text-justify hyphens-auto text-[15px] mt-5 px-2 md:px-10">
            Stay updated with our latest insights, industry trends, and
            technological innovations through our carefully curated blog posts.
            Our experts share valuable knowledge and experience in various
            domains.
          </p>
        </div>

        <div className="md:pt-[100px] pt-8 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogList.map((card, index) => (
            <div
              key={index}
              className="backgrounddd bg-white text-center shadow-md flex flex-col items-start justify-between gap-5 border rounded-lg overflow-hidden"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={card.imageUrl.src}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-4 relative">
                <h3 className="font-bold text-lg absolute top-0">
                  {card.title}
                </h3>
                <p className="text-justify text-sm mt-3 pt-14">
                  {card.description}
                </p>
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 ml-7"
                  onClick={() => router.push('/blog/detailpage')}
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
