import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for registration logic
    if (name === '' || email === '' || password === '') {
      setRegistrationError('All fields are required.');
    } else {
      setRegistrationError('');
      alert('Registered successfully');
      // Further registration logic can be added here
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h1>Quiz Competition</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container centered">
        <h2>Register Here</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input type="submit" value="Register" />
          <div style={{ color: 'red' }}>{registrationError}</div>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Online Quiz Competition</p>
      </footer>
    </div>
  );
}

export default Register;
