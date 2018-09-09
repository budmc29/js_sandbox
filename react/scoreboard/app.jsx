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

const Header = (props) =>
  <div className="header">
    <h1>{props.title}</h1>
  </div>;

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

const Player = (props) =>
  <div className="player">
     <div className="player-name">
       {props.name}
     </div>
     <div className="player-score">
       <Counter score={props.score}/>
     </div>
  </div>;

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
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

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>

        <div className="players">
          {this.state.players.map(
            (player, index) => {
              return <Player key={player.id} name={player.name} score={player.score} />;
            }
          )}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.querySelector('#container'));
