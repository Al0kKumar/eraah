import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({ label, value, onChange, type = "text" }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {isPassword && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      )}
    </div>
  );
};

export default Input;

  