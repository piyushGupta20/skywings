import React from 'react';
import './Booking.css';

const steps = ['Search Flight', 'Select Flight', 'Passenger Details', 'Payment'];

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index + 1 <= currentStep ? 'active' : ''}`}
        >
          <div className="step-circle">{index + 1}</div>
          <span className="step-label">{step}</span>
          {index < steps.length - 1 && (
            <div
              className={`step-line ${index + 1 < currentStep ? 'completed' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
