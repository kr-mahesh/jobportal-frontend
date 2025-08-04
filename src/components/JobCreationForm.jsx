import React from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';

const JobCreationForm = ({ onClose, onJobCreated }) => {
  const { register, handleSubmit, reset } = useFormContext();

  const onSubmit = async (data) => {
    try {
      const jobPayload = {
        jobTitle: data.title,
        companyName: data.company,
        location: data.location,
        jobType: data.type,
        salaryRange: `${data.salaryMin} - ${data.salaryMax}`,
        jobDescription: data.description,
        requirements: "N/A",
        responsibilities: "N/A",
        applicationDeadline: data.deadline,
      };

      await axios.post('http://localhost:8080/api/jobs', jobPayload);

      reset();
      onClose();
      onJobCreated(); 
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div
      className="form-container bg-white shadow-lg"
      style={{
        width: '670px',
        height: '520px',
        borderRadius: '16px',
        opacity: 1,
      }}
    >
      <h2 className="text-xl font-semibold mb-3 text-center">Create Job Opening</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-4">
        <div className="flex space-x-3">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              className="filter-input border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="Job Title"
              {...register("title")}
              defaultValue="Full Stack Develo"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              className="filter-input border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="Company Name"
              {...register("company")}
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="filter-input border border-gray-300 rounded px-2 py-1 w-full" {...register("location")}>
              <option value="">Choose Preferred Location</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
            <select className="filter-input border border-gray-300 rounded px-2 py-1 w-full" {...register("type")}>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="w-1/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
            <input
              className="filter-input border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="₹ to"
              {...register("salaryMin")}
            />
          </div>
          <div className="w-1/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
            <input
              className="filter-input border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="₹ 12,00,000"
              {...register("salaryMax")}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
            <input
              className="filter-input border border-gray-300 rounded px-2 py-1 w-full"
              type="date"
              {...register("deadline")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea
            className="filter-input border border-gray-300 rounded px-2 py-1 w-full h-24"
            placeholder="Please share a description to let the candidate know more about the job role"
            {...register("description")}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button type="button" className="bg-gray-200 px-3 py-1 rounded" onClick={onClose}>
            Save Draft
          </button>
          <button type="submit" className="apply-btn bg-blue-500 text-white px-3 py-1 rounded">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobCreationForm;
