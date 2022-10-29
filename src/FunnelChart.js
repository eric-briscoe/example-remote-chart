import React from 'react';

const FunnelChart = (props) => {
  return (
    <>
  <h1>This is a funnel chart</h1>
  <span style={{fontFamily: 'monospace'}}>
    {JSON.stringify(props)}
  </span>
  </>
  );
};

export default FunnelChart;
