import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import Navigation from './components/Navigation';
import Filters from './components/Filters';
import JobCard from './components/JobCard';
import JobCreationForm from './components/JobCreationForm';

const App = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [jobs, setJobs] = useState([]);
  const [showJobCreation, setShowJobCreation] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://attractive-nourishment-production-8eb9.up.railway.app/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

 
  useEffect(() => {
    const subscription = watch((values) => {
      const queryParams = new URLSearchParams();

      if (values.title) queryParams.append('jobTitle', values.title);
      if (values.location) queryParams.append('location', values.location);
      if (values.type) queryParams.append('jobType', values.type);
      if (values.salary) queryParams.append('salaryRange', values.salary);

      axios
        .get(`https://attractive-nourishment-production-8eb9.up.railway.app/api/jobs/filter?${queryParams.toString()}`)
        .then((res) => setJobs(res.data))
        .catch((err) => console.error('Filtering error:', err));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const onSubmit = async (data) => {
    try {
      const jobPayload = {
        jobTitle: data.title,
        companyName: data.company,
        location: data.location,
        jobType: data.type,
        salaryRange: `${data.salaryMin} - ${data.salaryMax}`,
        jobDescription: data.description,
        requirements: 'N/A',
        responsibilities: 'N/A',
        applicationDeadline: data.deadline,
      };

      await axios.post('https://attractive-nourishment-production-8eb9.up.railway.app/api/jobs', jobPayload);
      fetchJobs();
      setShowJobCreation(false);
    } catch (error) {
      console.error('Failed to create job:', error);
    }
  };

  const handleCreateJobClick = () => {
    setShowJobCreation(true);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex items-center justify-center">
        <Navigation onCreateJobClick={handleCreateJobClick} />
      </div>

      <FormProvider {...methods}>
        <form>
          <Filters />
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 mt-4">
  {jobs.map((job) => (
    <JobCard
      key={job.id}
      company={job.companyName}
      title={job.jobTitle}
      location={job.location}
      salary={job.salaryRange}
      type={job.jobType}
      description={job.jobDescription}
      ago="Just now"
    />
  ))}
</div>


        {showJobCreation && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <JobCreationForm
              onClose={() => setShowJobCreation(false)}
              onJobCreated={fetchJobs}
            />
          </div>
        )}
      </FormProvider>
    </div>
  );
};

export default App;
