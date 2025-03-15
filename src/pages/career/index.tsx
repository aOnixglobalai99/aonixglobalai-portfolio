import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import JobApplicationForm from "@/components/career/careerForm";
import { getAllJobs } from "@/redux/jobSlice";
import { registerUser } from "@/redux/registerSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

const JobPortal = () => {
  const [activeTab, setActiveTab] = useState("careers");
  const [filter, setFilter] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();
  const { jobs, status, error } = useSelector((state: RootState) => state.job);

  const filteredJobs =
    filter === "all" ? jobs : jobs.filter((job) => job.jobType === filter);

  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    resume: null as File | null,
    coverLetter: "",
  });

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  const handleApply = (title: string, id: string) => {
    router.push(
      `/career/apply/${encodeURIComponent(title)}/${encodeURIComponent(id)}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData);

      if (formData.resume instanceof File) {
        console.log("here")
        const response = await dispatch(registerUser(formData));
        console.log(response);

        if (response.meta.requestStatus === "fulfilled") {
          alert(response.payload.message || response.payload.error);
          toast.success("Thank you! We will get back to you shortly!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            postalCode: "",
            resume: null,
            coverLetter: "",
          });
        } else {
          toast.error(response.payload.error || "Something went wrong. Please try again.");
        }
      } else {
        toast.error("Please upload a valid resume.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
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
            className={`px-6 py-2 text-lg font-medium ${activeTab === "careers" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"
              }`}
          >
            Careers
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`px-6 py-2 text-lg font-medium ${activeTab === "register" ? "border-b-4 border-blue-500 text-blue-600" : "text-gray-500"
              }`}
          >
            Register
          </button>
        </div>

        {/* Careers Tab */}
        {activeTab === "careers" && (
          <div>
            {/* Status Handling */}
            {status === "loading" && (
              <div className="flex justify-center items-center py-4">
                <Loader />
              </div>
            )}

            {status === "failed" && (
              <div className="text-red-500 text-center py-4">
                Error: {error || "Failed to fetch jobs. Please try again later."}
              </div>
            )}

            {status === "succeeded" && (
              <>
                <div className="mb-4 flex gap-4">
                  <select
                    className="p-2 border rounded w-48 bg-gray-100"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Full-time">Full-Time</option>
                    <option value="Part-time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="overflow-x-auto max-h-96 overflow-y-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-blue-500 text-white text-left">
                        <th className="border border-gray-300 px-4 py-2">Job</th>
                        <th className="border border-gray-300 px-4 py-2">Posting Title</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">City</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredJobs.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="w-full text-center text-gray-600 py-6">
                            No jobs available.
                          </td>
                        </tr>
                      ) : (
                        filteredJobs.map((job, index) => (
                          <tr key={index} className="text-left bg-white hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 text-blue-500">{job.jobType}</td>
                            <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                            <td className="border border-gray-300 px-4 py-2">
                              {job.dateOpened?.split("T")[0] || ""}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{job.city}</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <button
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                onClick={() => handleApply(job.title, job._id)}
                              >
                                Apply
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "register" && (
          <div className="mt-6">
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-gray-700 font-medium">Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-gray-700 font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-gray-700 font-medium">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-gray-700 font-medium">Upload Resume</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-gray-700 font-medium">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded bg-gray-100"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                  }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>

            </form>
          </div>
        )}

      </div>
      <ToastContainer />
    </div>
  );
};

export default JobPortal;
