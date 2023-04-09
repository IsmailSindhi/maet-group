'use client';
import React from "react";
interface InputFieldProps {
    placeholder: string; 
}
const InputField: React.FC<InputFieldProps> = ({ placeholder }) => {
  return (
    <input
      className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default InputField;