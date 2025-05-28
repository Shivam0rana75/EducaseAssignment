import React from "react";
import { useNavigate } from 'react-router-dom';
const LandingScreen = () => {

  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-end justify-center bg-white">
      <div className="w-full max-w-[350px] px-4 pb-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#09090B] mb-2">
            Welcome to PopX
          </h1>
          <p className="text-sm text-[#6B7280]">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-sm text-[#6B7280]">
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-[#824CF5] text-white font-semibold py-3 rounded" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="w-full bg-[#E2D9FF] text-[#09090B] font-semibold py-3 rounded" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
