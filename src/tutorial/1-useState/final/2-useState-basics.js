import React, { useState, Fragment } from 'react';

const UseStateBasics = () => {
  let title = 'welcome the space';
  const [text, setText] = useState(title);

  const handleClick = () => {
    if (text === 'welcome the space') {
      setText('welcome korea');
    } else {
      setText('welcome the space');
    }
  };

  return (
    <Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change The Title
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
