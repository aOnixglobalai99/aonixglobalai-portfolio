import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, placeholder, value, onChange, error, required }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          rows={4}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
