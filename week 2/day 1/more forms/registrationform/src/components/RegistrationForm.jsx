import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const newErrors = { ...errors };
    newErrors[name] = validateField(name, value);
    setErrors(newErrors);
  };

  const validateField = (fieldName, value) => {
    if (fieldName === 'firstName' || fieldName === 'lastName') {
      return value.length < 2 ? `Must be at least 2 characters` : '';
    } else if (fieldName === 'email') {
      return value.length < 5 ? `Must be at least 5 characters` : '';
    } else if (fieldName === 'password') {
      return value.length < 8 ? `Must be at least 8 characters` : '';
    } else if (fieldName === 'confirmPassword') {
      if (value !== formData.password) {
        return `Passwords must match`;
      }
      return value.length < 8 ? `Must be at least 8 characters` : '';
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
      {errors.firstName && <div className="error">{errors.firstName}</div>}

      <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
      {errors.lastName && <div className="error">{errors.lastName}</div>}

      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
      {errors.email && <div className="error">{errors.email}</div>}

      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
      {errors.password && <div className="error">{errors.password}</div>}

      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} required />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
