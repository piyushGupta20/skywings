import React, { useState } from 'react';

const PaymentGateway = ({ nextStep, prevStep }) => {
  const [gateway, setGateway] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Select Payment Gateway</h2>
      <label>
        <input
          type="radio"
          name="gateway"
          value="PayPal"
          onChange={(e) => setGateway(e.target.value)}
          required
        />
        PayPal
      </label>
      <label>
        <input
          type="radio"
          name="gateway"
          value="Stripe"
          onChange={(e) => setGateway(e.target.value)}
          required
        />
        Stripe
      </label>
      <label>
        <input
          type="radio"
          name="gateway"
          value="Credit Card"
          onChange={(e) => setGateway(e.target.value)}
          required
        />
        Credit Card
      </label>
      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default PaymentGateway;
