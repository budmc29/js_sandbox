import React from 'react';
import utils from './utils';

const PlayNumber = (props) => (
  <button className="number" onClick={() => console.log('Number clicked', props.number)}>
    {props.number}
  </button>
);

export default PlayNumber;
