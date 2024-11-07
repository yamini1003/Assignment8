import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
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
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Welcome to the Online Quiz Competition</h2>
        <p>Test your skills and knowledge with our exciting quizzes!</p>
        <button onClick={() => window.location.href = '/login'}>Start Quiz</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Online Quiz Competition</p>
    </footer>
  );
}

export default App;
