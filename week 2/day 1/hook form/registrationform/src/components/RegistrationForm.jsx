import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;


    