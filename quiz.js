import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Quiz() {
  const [quizCategory, setQuizCategory] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizResult, setQuizResult] = useState('');

  const showQuiz = (category) => {
    setQuizCategory(category);
    // Placeholder for loading questions based on the category
    setQuizQuestions([
      { id: 1, question: `Sample question for ${category}`, options: ['A', 'B', 'C', 'D'], answer: 'A' },
    ]);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    // Placeholder for calculating quiz result
    setQuizResult(`Results for ${quizCategory} quiz`);
  };

  return (
    <div>
      {/* Header Section */}
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

      {/* Main Quiz Container */}
      <div className="container">
        <h2>Select a Quiz Category</h2>
        <div className="quiz-container">
          {/* HTML Quiz Card */}
          <div className="quiz-card">
            <h3>HTML</h3>
            <p>40 Questions covering the basics of HTML</p>
            <button onClick={() => showQuiz('HTML')}>Start Quiz</button>
          </div>
          {/* CSS Quiz Card */}
          <div className="quiz-card">
            <h3>CSS</h3>
            <p>25 Questions covering the basics of CSS</p>
            <button onClick={() => showQuiz('CSS')}>Start Quiz</button>
          </div>
          {/* JavaScript Quiz Card */}
          <div className="quiz-card">
            <h3>JavaScript</h3>
            <p>25 Questions covering the basics of JavaScript</p>
            <button onClick={() => showQuiz('JavaScript')}>Start Quiz</button>
          </div>
          {/* SQL Quiz Card */}
          <div className="quiz-card">
            <h3>SQL</h3>
            <p>25 Questions covering the basics of SQL</p>
            <button onClick={() => showQuiz('SQL')}>Start Quiz</button>
          </div>
        </div>

        {/* Quiz Form Section */}
        {quizCategory && (
          <div id="quiz">
            <form onSubmit={handleQuizSubmit}>
              <div id="quizQuestions">
                {quizQuestions.map((question) => (
                  <div key={question.id}>
                    <p>{question.question}</p>
                    {question.options.map((option) => (
                      <label key={option}>
                        <input type="radio" name={`question${question.id}`} value={option} required />
                        {option}
                      </label>
                    ))}
                  </div>
                ))}
              </div>
              <button type="submit">Submit Quiz</button>
            </form>
            {quizResult && <div id="quiz-result">{quizResult}</div>}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Online Quiz Competition</p>
      </footer>
    </div>
  );
}

export default Quiz;
