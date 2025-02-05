import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Counter = () => {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("count") || "0");
  });

  const background = useSpring({
    backgroundColor: count > 0 ? "#4CAF50" : "#FF5733", 
    config: { tension: 250, friction: 20 },
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <animated.div style={background} className="counter-container">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </animated.div>
  );
};

export default Counter;
