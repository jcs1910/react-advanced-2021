import React, { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('hello useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  const increaseNum = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={increaseNum}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffectBasics;
