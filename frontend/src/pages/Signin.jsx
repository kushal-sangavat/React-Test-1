import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/Signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        console.error('Signin failed');
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
}

export default Signin;
