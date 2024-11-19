import React from 'react';
import './BookingSteps.css';

const steps = [
  'Search Flight',
  'Select Flight',
  'Passenger Details',
  'Payment',
];

const BookingSteps = ({ currentStep }) => {
  return (
    <div className="steps-container">
      <ul className="steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step-item ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
          >
            <div className="circle">{index + 1}</div>
            <span className="step-label">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSteps;
