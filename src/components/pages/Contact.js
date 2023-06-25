import React, { useState } from 'react';

export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
    }
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-around">
      <h1>Contact Me</h1>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleContactFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}/>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange}/>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}/>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
