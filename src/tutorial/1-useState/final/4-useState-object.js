import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: 'kim',
    age: 22,
    message: 'hello world',
  });

  const changeMessage = () => {
    if (person.message === 'hello world') {
      setPerson({ ...person, message: 'bye space' });
    } else {
      setPerson({ ...person, message: 'hello world' });
    }
  };
  return (
    <>
      <h1>{person.id}</h1>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>

      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};
export default UseStateObject;
