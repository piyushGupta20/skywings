import React, { useState } from 'react';
import './FlightSelection.css';

const FlightSelection = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    returnDate: '',
    isRoundTrip: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const reverseDestinations = () => {
    setFormData({ ...formData, from: formData.to, to: formData.from });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Choose Your Destination</h2>

      {/* From Destination */}
      <label>
        From:
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Enter departure city"
          required
        />
      </label>

      {/* Reverse Button */}
      <button
        type="button"
        className="reverse-button"
        onClick={reverseDestinations}
        aria-label="Reverse destinations"
      >
        ⇄
      </button>

      {/* To Destination */}
      <label>
        To:
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="Enter arrival city"
          required
        />
      </label>

      {/* Travel Date */}
      <label>
        Travel Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      {/* Roundtrip Toggle */}
      <label className="roundtrip-label">
        <input
          type="checkbox"
          name="isRoundTrip"
          checked={formData.isRoundTrip}
          onChange={handleChange}
        />
        Roundtrip
      </label>

      {/* Return Date if Roundtrip */}
      {formData.isRoundTrip && (
        <label>
          Return Date:
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </label>
      )}

      {/* Navigation Buttons */}
      <button type="submit">Next</button>
    </form>
  );
};

export default FlightSelection;
