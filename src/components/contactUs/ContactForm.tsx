import React, { useState } from "react";
import FormField from "./FormField";

interface FormData {
  name: string;
  email: string;
  telephone:string;
  subject: string;
  message: string;
}

const ContactForm = ({ onSubmit, isSubmitting }: { onSubmit: (data: FormData) => void; isSubmitting: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: '',
      });
      
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField label="Name" name="name" type="text" value={formData.name} onChange={handleInputChange} required />
        <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
        <FormField label="Telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleInputChange} />
        <FormField label="Subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required />
        <FormField label="Message" name="message" type="textarea" value={formData.message} onChange={handleInputChange} required />
        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
          {isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
