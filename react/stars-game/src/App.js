import React from 'react';
import './App.css';
import utils from './utils';
import StarsDisplay from './stars_display';
import PlayNumber from './play_number';

const App = () => {
  const [stars, setStars] = React.useState(utils.random(1, 9));

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} number={number} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
