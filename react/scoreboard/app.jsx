const PLAYERS = [
  {
    name: "John Doe",
    score: 31,
    id: 1
  },
  {
    name: "Jane Smith",
    score: 33,
    id: 2
  },
  {
    name: "Mitch Mitchelson",
    score: 55,
    id: 3
  },
];

const Stats = (props) => {
  let totalPlayers = props.players.length;
  let totalPoints = props.players.reduce((total, player) => total + player.score, 0);

  return (
    <table className="stats">
       <tbody>
         <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
         </tr>
        <tr>
         <td>Total Points:</td>
         <td>{totalPoints}</td>
        </tr>
       </tbody>
     </table>
  );
};

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};

const Header = (props) =>
  <div className="header">
    <Stats players={props.players}/>
    <h1>{props.title}</h1>
  </div>;

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

const Player = (props) =>
  <div className="player">
     <div className="player-name">
       {props.name}
     </div>
     <div className="player-score">
       <Counter score={props.score} onChange={props.onScoreChange}/>
     </div>
  </div>;

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.onChange(-1)}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => props.onChange(1)}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired
  },

  getDefaultProps: function() {
    return {
      title: 'Scoreboard',
    };
  },

  getInitialState: function() {
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange: function(id, delta) {
    this.setState({
      players: this.state.players.map((player) => {
        if (id === player.id) {
          return (
            {
              ...player,
              score: player.score + delta
            }
          )
        }

        return player;
      })
    });
  },

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map(
            (player, index) => {
              return (
                <Player
                  key={player.id}
                  name={player.name}
                  score={player.score}
                  onScoreChange={(delta) => this.onScoreChange(player.id, delta)} />
              );
            }
          )}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.querySelector('#container'));
