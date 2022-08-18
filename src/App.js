import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './features/greeting/greetingSlice';
import './App.css';

function App() {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  fetchGreetings();
  return (
    <div className="App">
      {!message.loading && message.message}
    </div>
  );
}

export default App;
