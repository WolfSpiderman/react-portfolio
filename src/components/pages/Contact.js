import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // Clear the error message when input changes
  };

  const handleInputBlur = event => {
    const { name, value } = event.target;

    if (!value) {
      setErrorMessage(`Please enter your ${name}`);
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrorMessage('Please enter a valid email address');
    }
  };

  const handleContactFormSubmit = event => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
    } else {
      console.log(formData);
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-around">
      <h1>Contact Me</h1>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form className="d-flex flex-column align-items-center justify-content-around" onSubmit={handleContactFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} onBlur={handleInputBlur} onFocus={() => setErrorMessage('')} />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleInputBlur} onFocus={() => setErrorMessage('')} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" style={{ height: 200, width: 300 }} value={formData.message} onChange={handleInputChange} onBlur={handleInputBlur} onFocus={() => setErrorMessage('')} />

        <button type="submit" style={{ marginTop: 10 }}>Submit</button>
      </form>
    </main>
  );
}
