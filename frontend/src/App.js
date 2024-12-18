import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="app-container">
      <h1>Feedback and Review System</h1>
      <ReviewForm fetchReviews={() => {}} />
      <ReviewList />
    </div>
  );
}

export default App;
