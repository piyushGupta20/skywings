import React from 'react';

const SelectFlight = ({ nextStep, prevStep }) => {
  return (
    <div className="step-form">
      <h2>Select Flight</h2>
      <p>Flight options are displayed here.</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default SelectFlight;
