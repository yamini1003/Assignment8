import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [username, setUsername] = useState('John Doe'); // Example default username
  const [email, setEmail] = useState('john@example.com'); // Example default email
  const [quizzesTaken, setQuizzesTaken] = useState(5); // Example default quizzes taken
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState(username);
  const [editEmail, setEditEmail] = useState(email);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setUsername(editUsername);
    setEmail(editEmail);
    setIsEditing(false);
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
        <h2>User Profile</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Quizzes Taken: {quizzesTaken}</p>
        {!isEditing ? (
          <button onClick={handleEditProfile}>Edit Profile</button>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={editUsername}
              onChange={(e) => setEditUsername(e.target.value)}
              placeholder="New Username"
              required
            />
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              placeholder="New Email"
              required
            />
            <button type="button" onClick={handleSaveChanges}>Save Changes</button>
          </form>
        )}
      </div>

      <footer>
        <p>&copy; 2024 Online Quiz Competition</p>
      </footer>
    </div>
  );
}

export default Profile;
