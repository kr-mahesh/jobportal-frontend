import React from 'react';

const JobCard = ({ company, title, location, salary, type, ago }) => {
  const companyName = company || 'Unknown Company';

  return (
    <div className="w-full sm:w-[220px] md:w-[240px] lg:w-[250px] bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col justify-between">
     
<div className="flex items-center justify-between mb-1">

  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-500">
    Logo
  </div>


  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full whitespace-nowrap">
    {ago || 'Just now'}
  </span>
</div>

<div className="text-center mb-2">
  <h3 className="text-md font-semibold">{title || 'Untitled Job'}</h3>
</div>


 
      <div className="text-sm text-gray-600 space-y-1 mb-3">
        <div className="flex items-center justify-center gap-2">
          <span> 1-3 yr Exp</span>
          <span> {type || 'N/A'}</span>
          <span> {salary || 'N/A'} LPA</span>
        </div>
        
      </div>

      <ul className="text-xs text-gray-500 mb-4 list-disc list-inside">
       <li> {description || 'No description provided.'}</li> 
      </ul>

      <button className="mt-auto bg-blue-500 text-white text-sm font-semibold py-2 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;

