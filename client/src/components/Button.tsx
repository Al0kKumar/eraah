import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
  >
    {text}
  </button>
);

export default Button;
