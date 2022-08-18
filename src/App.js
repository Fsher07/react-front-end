import React from 'react';
import { fetchGreetings } from './features/greeting/greetingSlice';
import './App.css';

function App() {
  fetchGreetings();
  return (
    <div className="App">
      nice
    </div>
  );
}

export default App;
