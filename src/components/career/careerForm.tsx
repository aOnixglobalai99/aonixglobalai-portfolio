import React from "react";

const JobApplicationForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6 gap-6 md:gap-4">
      {/* Left Side - Image */}
      <div className="w-full md:w-5/12 flex justify-center">
        <img 
          src="https://i.pinimg.com/736x/71/b2/ef/71b2effc8fbeb1944b5c48466181e35f.jpg" 
        // src="https://i.pinimg.com/736x/18/ed/5a/18ed5a8739819ea9ca22aa435413aa46.jpg"
          alt="We are hiring" 
          className="w-full max-w-md rounded-lg shadow-lg h-full"
        />
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full md:w-7/12 bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Submit Your Resume</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className={inputField} required />
            <input type="text" placeholder="Last Name" className={inputField} required />
          </div>
          <input type="email" placeholder="Email" className={inputField} required />
          <input type="tel" placeholder="Phone Number" className={inputField} required />
          <input type="text" placeholder="City" className={inputField} required />
          <input type="text" placeholder="Skills" className={inputField} required />
          <div>
            <label className="block text-gray-700">Upload Resume</label>
            <input type="file" className={inputField} required />
          </div>
          <textarea placeholder="Cover Letter / Application" className={inputField} rows={4} required />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;

/* Tailwind Styles */
const inputField = "w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
