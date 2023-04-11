'use client';
import React, { useContext } from "react";
import { AppContext } from "../pages/index";


interface InputFieldProps {
    placeholder: string;
    value : string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}
const InputField: React.FC<InputFieldProps> = ({ placeholder,value,setValue}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      type="text"
      placeholder={placeholder}
      value={value} onChange={handleChange}
    />
  );
};

export default InputField;