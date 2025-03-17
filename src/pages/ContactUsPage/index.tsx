"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { submitContactForm } from "@/redux/contactSlice";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfo from "@/components/contactUs/ContactInfo";

interface FormData {
  name: string;
  email: string;
  telephone:string;
  subject: string;
  message: string;
}

const ContactUsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields", { autoClose: 3000 });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await dispatch(submitContactForm(formData));
      if (response.meta.requestStatus === "fulfilled") {
        alert(response.payload.message);
        toast.success("Thank you! We will get back to you shortly!", { autoClose: 3000 });
      } else {
        toast.error("Something went wrong. Please try again.", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong", { autoClose: 3000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen p-6 gap-24 max-w-screen-xl mx-auto">
        <ContactInfo />
        <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default ContactUsPage;
