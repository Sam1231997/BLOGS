import React, { useState } from 'react';

const Post = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Create the payload for the POST request
    const payload = {
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
         
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
        
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="*******"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="********"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;
