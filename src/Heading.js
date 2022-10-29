import React from 'react';

const Heading = ({message}) => {
  return <h1>{message ?? 'This is the default heading'}</h1>;
};

export default Heading;
