import React from 'react';

const Navigation = ({ onCreateJobClick }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md rounded-full w-full max-w-[600px] mx-auto">
     
      <div className="flex items-center space-x-8">
   
        <img
          src="src/assets/logo.png"
          alt="Logo"
          className="h-8 w-8 object-contain"
        />


        <div className="flex space-x-6 text-sm md:text-base font-medium text-gray-700">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Talent</a>
          <a href="#" className="hover:text-blue-500">About us</a>
          <a href="#" className="hover:text-blue-500">Testimonials</a>
        </div>
      </div>

      <button
        onClick={onCreateJobClick}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold text-sm px-5 py-2 rounded-full shadow"
      >
        Create Job
      </button>
    </nav>
  );
};

export default Navigation;
