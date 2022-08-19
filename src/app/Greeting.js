import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../features/greeting/greetingSlice';

function Greeting() {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  fetchGreetings();
  return (
    <div className="App">
      <h1>
        {!message.loading && message.message}
      </h1>
    </div>
  );
}

export default Greeting;
