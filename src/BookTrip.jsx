import React, { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import FlightSelection from './components/FlightSelection';
import PassengerDetails from './components/PassengerDetails';
import PaymentGateway from './components/PaymentGateway';
import PaymentDetails from './components/PaymentDetails';
import './App.css';

const BookTrip = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="booking-container">
      <StepIndicator currentStep={currentStep} />
      <div className="step-content">
        {currentStep === 1 && <FlightSelection nextStep={nextStep} />}
        {currentStep === 2 && <PassengerDetails nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 3 && <PaymentGateway nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 4 && <PaymentDetails prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default BookTrip;
