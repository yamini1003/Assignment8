import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you can add authentication logic
    if (loginEmail === '' || loginPassword === '') {
      setLoginMessage('Please enter both email and password.');
    } else {
      setLoginMessage(''); // Clear message after submission
      // Further login logic can be added here
      alert('Logged in successfully');
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
        <h2>Login Here</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
          <div style={{ color: 'red' }}>{loginMessage}</div>
        </form>
        <p>New user? <Link to="/register">Register here</Link></p>
      </div>

      <footer>
        <p>&copy; 2024 Online Quiz Competition</p>
      </footer>
    </div>
  );
}

export default Login;
