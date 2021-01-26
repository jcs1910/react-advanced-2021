import React, { useState, Fragment } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <Fragment>
            <h4>{name}</h4>
            <button
              className='btn'
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove
            </button>
          </Fragment>
        );
      })}

      <button className='btn' onClick={() => setPeople([])}>
        Clear All Items
      </button>
    </>
  );
};

export default UseStateArray;
