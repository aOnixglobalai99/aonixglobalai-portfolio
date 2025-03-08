import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ApplyPage = () => {
  const router = useRouter();
  const { job } = router.query;

  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    if (job && typeof job === "string") {
      setJobTitle(decodeURIComponent(job));
    }
  }, [job]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF or Word documents are allowed.");
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Apply for {jobTitle || "this job"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile"
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio (if any)"
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="file"
            name="resume"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            rows={4}
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition focus:ring-2 focus:ring-blue-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
