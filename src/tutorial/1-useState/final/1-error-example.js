import React, { Fragment } from 'react';

const ErrorExample = () => {
  let title = 'Welcome the Space';

  const handleClick = () => {
    title = 'Welcome Korea';
    console.log(title);
  };
  return (
    <Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        Change the Title
      </button>
    </Fragment>
  );
};

export default ErrorExample;
