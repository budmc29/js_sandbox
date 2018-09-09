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

const Counter = React.createClass({
  propTypes: {
    score: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
});

const Application = (props) =>
  <div className="scoreboard">
    <Header title={props.title}/>

    <div className="players">
      {props.players.map(
        (player, index) => {
          return <Player key={player.id} name={player.name} score={player.score} />;
        }
      )}
    </div>
  </div>;

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired
};

Application.defaultProps = {
  title: 'Scoreboard'
}

ReactDOM.render(<Application players={PLAYERS}/>, document.querySelector('#container'));
