import React from 'react';
import './App.css';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="container">
      <header className="text-center my-5">
        <h1>Expense Tracker</h1>
      </header>
      <ExpenseTracker />
    </div>
  );
}

export default App;