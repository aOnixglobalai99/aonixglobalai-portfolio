import { useState } from "react";
import { useRouter } from "next/router";
import JobApplicationForm from "@/components/career/careerForm";

const JobPortal = () => {
  const [activeTab, setActiveTab] = useState("careers");
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const jobs = [
    { type: "Full time", title: "Inside Sales", date: "11/04/2019", city: "Koramangala, Bangalore" },
    { type: "Remote", title: "Data Science", date: "11/04/2019", city: "Koramangala, Bangalore" },
    { type: "Part time", title: "WordPress Developer", date: "11/04/2019", city: "Koramangala, Bangalore" },
    { type: "Full time", title: "Server Admin Associate", date: "11/05/2019", city: "Koramangala, Bangalore" },
    { type: "Remote", title: "Sr .Net Developer", date: "11/04/2019", city: "Koramangala, Bangalore" },
    { type: "Full time", title: "Software Engineer", date: "12/06/2020", city: "Mumbai, India" },
    { type: "Part time", title: "Graphic Designer", date: "10/02/2021", city: "Delhi, India" },
  ];

  const filteredJobs = filter === "all" ? jobs : jobs.filter(job => job.type === filter);

  const handleApply = (title: string) => {
    router.push(`/career/apply/${encodeURIComponent(title)}`);
};


 

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <JobApplicationForm />
      </div>

      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg mt-6">
        {/* Tabs */}
        <div className="flex justify-center border-b mb-6">
          <button 
            onClick={() => setActiveTab("careers")} 
            className={`px-6 py-2 text-lg font-medium ${activeTab === "careers" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"}`}
          >
            Careers
          </button>
          <button 
            onClick={() => setActiveTab("register")} 
            className={`px-6 py-2 text-lg font-medium ${activeTab === "register" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"}`}
          >
            Register
          </button>
        </div>

        {/* Careers Tab */}
        {activeTab === "careers" && (
          <div>
            <div className="mb-4 flex gap-4">
              <select 
                className="p-2 border rounded w-48 bg-gray-100" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Full time">Full Time</option>
                <option value="Part time">Part Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white text-left">
                    <th className="border border-gray-300 px-4 py-2">Job Type</th>
                    <th className="border border-gray-300 px-4 py-2">Posting Title</th>
                    <th className="border border-gray-300 px-4 py-2">Date Opened</th>
                    <th className="border border-gray-300 px-4 py-2">City</th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((job, index) => (
                    <tr key={index} className="text-left bg-white hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-blue-500">{job.type}</td>
                      <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                      <td className="border border-gray-300 px-4 py-2">{job.date}</td>
                      <td className="border border-gray-300 px-4 py-2">{job.city}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => handleApply(job.title)}>Apply</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "register" && (
          <div className="mt-6">
            <form className="space-y-4">
              <h2 className="text-lg font-semibold">Basic Information</h2>
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded bg-gray-100" required />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded bg-gray-100" required />
              <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded bg-gray-100" required />

              <h2 className="text-lg font-semibold">Address Information</h2>
              <input type="text" placeholder="Street Address" className="w-full p-3 border rounded bg-gray-100" required />
              <input type="text" placeholder="City" className="w-full p-3 border rounded bg-gray-100" required />
              <input type="text" placeholder="State" className="w-full p-3 border rounded bg-gray-100" required />
              <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded bg-gray-100" required />

              <h2 className="text-lg font-semibold">Attachment Information</h2>
              <input type="file" className="w-full p-3 border rounded bg-gray-100" required />
              <textarea placeholder="Cover Letter" className="w-full p-3 border rounded bg-gray-100" rows={4} required></textarea>

              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPortal;
