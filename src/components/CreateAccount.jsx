import React from 'react';
import FloatingInput from './FloatingInput';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
   const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create your<br />PopX account</h1>
      <form action="">
        <div className="space-y-4">
          <FloatingInput label="Full Name" name="Full Name" required />
          <FloatingInput label="Phone number" name="Phone number" type="number" required />
          <FloatingInput label="Email address" name="Email address" type="email" required />
          <FloatingInput label="Password" name="Password" type="password" required />
          <FloatingInput label="Company name" required />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAgency"
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAgency"
                className="form-radio text-purple-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button className="w-full mt-[15vh] bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition" onClick={() => navigate('/account')}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
