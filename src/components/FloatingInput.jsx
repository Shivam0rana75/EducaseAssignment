import React from 'react'

const FloatingInput = ({ label, name, type }) => {
  return (
    <div className="relative w-full mt-6">
      <fieldset className="border border-gray-300 bg-gray-100 rounded-md px-3 pt-4 pb-2 w-full relative focus-within:border-purple-600">
        <legend className="text-sm px-1 text-purple-600">
          {label}<span className="text-red-500">*</span>
        </legend>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={label}
          className="block w-full text-base bg-transparent placeholder-transparent focus:outline-none"
          required
        />
      </fieldset>
    </div>
  );
};

export default FloatingInput