import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClaimAssessmentForm from './components/ClaimAssessmentForm';
import ClaimSubmissionPage from './components/ClaimSubmissionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/submit-claim" element={<ClaimSubmissionPage />} />
          <Route path="/" element={<ClaimAssessmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;