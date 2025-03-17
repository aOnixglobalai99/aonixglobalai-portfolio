import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { applyJob } from "@/redux/applicationSlice";
import { useDispatch} from "react-redux";
import { AppDispatch } from "@/redux/store";

const ApplyPage = () => {
  const router = useRouter();
  const { title, id } = router.query;
  const jobId = Array.isArray(id) ? id[0] : id || "";

  const [jobTitle, setJobTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (title && typeof title === "string") {
      setJobTitle(decodeURIComponent(title));
    }
  }, [title]);

  const [formData, setFormData] = useState({
    jobId: jobId || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    resume: null as File | null,
    coverLetter: "",
  });

  useEffect(() => {
    if (jobId && typeof jobId === "string") {
      setFormData((prev) => ({ ...prev, jobId: jobId }));
    }
  }, [jobId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    }
};



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        console.log(formData);

        // Ensure the resume is a File object
        if (formData.resume instanceof File) {
            const response = await dispatch(applyJob(formData));
            console.log(response)
           
            if (response.meta.requestStatus === "fulfilled") {
              alert(response.payload.message||response.payload.error);
                toast.success("Thank you! We will get back to you shortly!");
                setFormData({
                    jobId: jobId || "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    city: "",
                    skills: "",
                    resume: null,
                    coverLetter: "",
                });
            } else {
                toast.error("Something went wrong. Please try again.");
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
              value={formData.firstName}
              placeholder="First Name"
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              required
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          <input
            type="text"
            name="skills"
            value={formData.skills}
            placeholder="Skills (if any)"
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
            value={formData.coverLetter}
            placeholder="Cover Letter"
            rows={4}
            required
            className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition focus:ring-2 focus:ring-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplyPage;
