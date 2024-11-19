import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PaymentDetails = ({ prevStep }) => {
  const [formData, setFormData] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Booked!",
        text: "You have unlocked a booking!",
        icon: "success"
      });
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Payment Details</h2>
      <label>
        Card Number:
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
      </label>
      <label>
        Expiry Date:
        <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" required />
      </label>
      <label>
        CVV:
        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
      </label>
      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PaymentDetails;
