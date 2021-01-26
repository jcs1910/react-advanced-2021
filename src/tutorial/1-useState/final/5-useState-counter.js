import React, { useState } from 'react';

const UseStateCounter = () => {
  const [num, changeNum] = useState(0);

  const increaseNum = () => {
    changeNum(num + 1);
  };

  const decreaseNum = () => {
    changeNum(num - 1);
  };

  const reset = () => {
    changeNum(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      changeNum((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <section>
        <h1>General Counter</h1>
        <h1>{num}</h1>
        <button className='btn' onClick={increaseNum}>
          increase
        </button>
        <button className='btn' onClick={decreaseNum}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
      </section>

      <br />

      <section>
        <h1>Complex Counter</h1>

        <h1>{num}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
