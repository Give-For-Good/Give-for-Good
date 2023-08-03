import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/registerfund");
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] `}
      onClick={handleRedirect}
    >
      Get Started.
    </button>
  );
};

export default Button;
