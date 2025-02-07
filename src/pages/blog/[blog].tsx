import React from "react";
// import { useParams } from "react-router-dom";

const BlogDetail = () => {
//   const { title } = useParams(); // Get the blog title from the URL

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6  mx-auto gap-14 pt-10">
      {/* Left Sidebar - Sticks on Scroll */}
      <aside className="w-full md:w-2/4 h-auto md:h-screen sticky top-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <img
            src="https://www.vamenture.com/_next/image?url=https%3A%2F%2Fbespoke-cashemeres.s3.eu-west-1.amazonaws.com%2Fother-images%2F1738086361542_SaaSDevelopmentLifeCycle.jpg&w=1920&q=75"
            alt="Blog Thumbnail"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">Related Blogs</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-teal-600 hover:underline cursor-pointer">SaaS Development Best Practices</li>
            <li className="text-teal-600 hover:underline cursor-pointer">Cloud Security in SaaS</li>
            <li className="text-teal-600 hover:underline cursor-pointer">Scaling SaaS Applications</li>
          </ul>
        </div>
      </aside>

      {/* Right Content - Scrollable */}
      <main className="flex-grow bg-white p-6 shadow-lg rounded-lg overflow-y-auto max-h-screen">
        {/* <h1 className="text-3xl font-bold">{decodeURIComponent(title)}</h1> */}
        <p className="text-gray-600 mt-2">Published on Jan 30, 2025</p>
        <img
          src="https://www.vamenture.com/_next/image?url=https%3A%2F%2Fbespoke-cashemeres.s3.eu-west-1.amazonaws.com%2Fother-images%2F1738086361542_SaaSDevelopmentLifeCycle.jpg&w=1920&q=75"
          alt="Blog Content"
          className="w-full h-64 object-cover rounded-lg mt-4"
        />
        <div className="mt-6 text-lg text-gray-700 space-y-4">
          <p>
            The Software as a Service (SaaS) development life cycle is a structured
            approach to building scalable cloud-based applications. This article explores
            key phases, best practices, and challenges in SaaS development.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Understanding the SaaS Development Life Cycle</h2>
          <p>
            SaaS development involves multiple stages, including planning, design,
            development, testing, deployment, and maintenance. Each phase plays a crucial
            role in ensuring a seamless and secure cloud-based solution.
          </p>
          <p>
            The Software as a Service (SaaS) development life cycle is a structured
            approach to building scalable cloud-based applications. This article explores
            key phases, best practices, and challenges in SaaS development.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Understanding the SaaS Development Life Cycle</h2>
          <p>
            SaaS development involves multiple stages, including planning, design,
            development, testing, deployment, and maintenance. Each phase plays a crucial
            role in ensuring a seamless and secure cloud-based solution.
          </p>
          <p>
            The Software as a Service (SaaS) development life cycle is a structured
            approach to building scalable cloud-based applications. This article explores
            key phases, best practices, and challenges in SaaS development.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Understanding the SaaS Development Life Cycle</h2>
          <p>
            SaaS development involves multiple stages, including planning, design,
            development, testing, deployment, and maintenance. Each phase plays a crucial
            role in ensuring a seamless and secure cloud-based solution.
          </p>
          <p>
            The Software as a Service (SaaS) development life cycle is a structured
            approach to building scalable cloud-based applications. This article explores
            key phases, best practices, and challenges in SaaS development.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Understanding the SaaS Development Life Cycle</h2>
          <p>
            SaaS development involves multiple stages, including planning, design,
            development, testing, deployment, and maintenance. Each phase plays a crucial
            role in ensuring a seamless and secure cloud-based solution.
          </p>
          <p>
            The Software as a Service (SaaS) development life cycle is a structured
            approach to building scalable cloud-based applications. This article explores
            key phases, best practices, and challenges in SaaS development.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Understanding the SaaS Development Life Cycle</h2>
          <p>
            SaaS development involves multiple stages, including planning, design,
            development, testing, deployment, and maintenance. Each phase plays a crucial
            role in ensuring a seamless and secure cloud-based solution.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Key Phases in SaaS Development</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Planning:</strong> Define objectives, target audience, and architecture.</li>
            <li><strong>Design:</strong> UI/UX design to enhance user experience.</li>
            <li><strong>Development:</strong> Code implementation with cloud-first approach.</li>
            <li><strong>Testing:</strong> Automated and manual testing for performance.</li>
            <li><strong>Deployment:</strong> Secure and scalable deployment.</li>
            <li><strong>Maintenance:</strong> Continuous monitoring and updates.</li>
            <li><strong>Planning:</strong> Define objectives, target audience, and architecture.</li>
            <li><strong>Design:</strong> UI/UX design to enhance user experience.</li>
            <li><strong>Development:</strong> Code implementation with cloud-first approach.</li>
            <li><strong>Testing:</strong> Automated and manual testing for performance.</li>
            <li><strong>Deployment:</strong> Secure and scalable deployment.</li>
            <li><strong>Maintenance:</strong> Continuous monitoring and updates.</li>
            <li><strong>Planning:</strong> Define objectives, target audience, and architecture.</li>
            <li><strong>Design:</strong> UI/UX design to enhance user experience.</li>
            <li><strong>Development:</strong> Code implementation with cloud-first approach.</li>
            <li><strong>Testing:</strong> Automated and manual testing for performance.</li>
            <li><strong>Deployment:</strong> Secure and scalable deployment.</li>
            <li><strong>Maintenance:</strong> Continuous monitoring and updates.</li>
            <li><strong>Planning:</strong> Define objectives, target audience, and architecture.</li>
            <li><strong>Design:</strong> UI/UX design to enhance user experience.</li>
            <li><strong>Development:</strong> Code implementation with cloud-first approach.</li>
            <li><strong>Testing:</strong> Automated and manual testing for performance.</li>
            <li><strong>Deployment:</strong> Secure and scalable deployment.</li>
            <li><strong>Maintenance:</strong> Continuous monitoring and updates.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
