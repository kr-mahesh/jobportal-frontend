import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import JobSearchResultsPage from './pages/JobSearchResults';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/job-search-results" element={<JobSearchResultsPage />} />
        <Route path="/" element={<JobSearchResultsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;