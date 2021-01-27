import React, { useEffect, useState } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const modifySize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', modifySize);

    return () => {
      console.log('clean up');
      window.removeEventListener('resize', modifySize);
    };
  });
  console.log('render');

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
