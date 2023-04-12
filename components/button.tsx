import React from "react";
interface SubmitButtonProps {
    text : string;
}




const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;