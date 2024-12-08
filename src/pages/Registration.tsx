import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from React Router
import './Registration.css';
import config from '../config';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    contact: '',
    location: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/customer/register`, formData);
      if (response.status === 200) {
        setStatusMessage('Registration successful!');
        console.log('Server Response:', response.data);
      } else {
        setStatusMessage('Registration failed. Please try again.');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // navigate back to the previous page
  };

  return (
    <div className="registration-container">
      <h1>Customer Registration</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="contact">Contact Number:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}

      {/* Back button to go to the previous page */}
      <button className="back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
