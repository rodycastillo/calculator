import React from 'react';

const Result = ({value}) => {
  console.log('Result', value);
  return (
    <div className="result">
      {value}
    </div>
  )

}

export default Result;