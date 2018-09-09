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

let nextId = 4;

const Stopwatch = React.createClass({
  getInitialState: function() {
    return {
      isRunning: false,
      elapsedTime: 0,
      previousTime: 0,
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.onTick, 100);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  onTick: function() {
    if (this.state.isRunning) {
      var now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }
  },

  onStop: function() {
    this.setState({
      isRunning: false,
    });
  },

  onStart: function() {
    this.setState({
      isRunning: true,
      previousTime: Date.now(),
    });
  },

  onReset: function() {
    this.setState({
      elapsedTime: 0,
      previoutTime: Date.now(),
    })
  },

  render() {
    let startStop;
    if (this.state.isRunning) {
      startStop = <button onClick={this.onStop}>Stop</button>;
    } else {
      startStop = <button onClick={this.onStart}>Start</button>;
    }

    let seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
       <div className="stopwatch">
         <h2>Stopwatch</h2>
         <div className="stopwatch-time">{seconds}</div>
          { startStop }
          <button onClick={this.onReset}>Reset</button>
       </div>
    );
  }
});

const AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
       name: '',
    };
  },

  onSubmit: function(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);

    this.setState({ name: '' });
  },

  onNameChange: function(e) {
    this.setState({
      name: e.target.value,
    });
  },

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
});

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
    <Stopwatch />
  </div>;

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

const Player = (props) =>
  <div className="player">
     <div className="player-name">
       <a className="remove-player" onClick={props.onRemove}>✖</a>
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
  onRemove: React.PropTypes.func.isRequired,
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

  onPlayerAdd: function(name) {
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });

    this.setState(this.state);

    nextId++;
  },

  onPlayerRemove: function(id) {
    this.setState({
      players: this.state.players.filter((player) => player.id !== id)
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
                  onScoreChange={(delta) => this.onScoreChange(player.id, delta)}
                  onRemove={() => this.onPlayerRemove(player.id)}
                />
              );
            }
          )}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd}/>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.querySelector('#container'));
