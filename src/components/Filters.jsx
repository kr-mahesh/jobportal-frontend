import React from 'react';
import { useFormContext } from 'react-hook-form';

const Filters = () => {
  const { register } = useFormContext();

  return (
    <div className="flex justify-between w-full border-b border-gray-300 py-3">
    
      <div className="flex items-center flex-1 px-3">
        <span className="mr-2 text-gray-500">🔍</span>
        <input
          className="flex-1 px-2 py-1 text-gray-700 placeholder-gray-500 focus:outline-none"
          placeholder="Search by Job Title"
          {...register('title')}
        />
      </div>

      <div className="border-l border-gray-300 h-10 mx-3"></div>

    
      <div className="flex items-center flex-1 px-3">
        <span className="mr-2 text-gray-500">📍</span>
        <input
          className="flex-1 px-2 py-1 text-gray-700 placeholder-gray-500 focus:outline-none"
          placeholder="Enter Location"
          {...register('location')}
        />
      </div>

      <div className="border-l border-gray-300 h-10 mx-3"></div>

     
      <div className="flex items-center flex-1 px-3">
        <span className="mr-2 text-gray-500">💼</span>
        <select
          className="flex-1 px-2 py-1 text-gray-700 focus:outline-none appearance-none bg-white bg-no-repeat bg-right bg-[length:12px_12px] bg-[position:right_8px_center]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%23676767\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E")',
          }}
          {...register('type')}
        >
          <option value="">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="border-l border-gray-300 h-10 mx-3"></div>


      <div className="flex items-center flex-1 px-3">
        <div className="w-full">
          <span className="block text-gray-700 text-sm">Salary Per Month (in ₹)</span>
          <div className="flex items-center">
            <input
              type="range"
              min="50"
              max="80"
              className="flex-1 h-0.5 bg-gray-300 rounded-lg cursor-pointer accent-black mt-1"
              {...register('salary')}
            />
            <span className="ml-2 text-gray-700">₹50k - ₹80k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
