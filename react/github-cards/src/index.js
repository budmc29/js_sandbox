import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  const testData = [
      {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ];

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

const CardList = (props) => (
  <div className="card-list">
    { props.profiles.map(profile => <Card {...profile} />) }
  </div>
)

class Card extends React.Component {
  render() {
    const profile = this.props;

    return(
      <div className="github-profile">
        <img src={profile.avatar_url} alt="avatar"/>
        <div className="info">
          <div className="name">
            {profile.name}
          </div>
          <div className="company">
            {profile.company}
          </div>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  state = {
    profiles: testData
  }

  render() {
    return(
      <>
        <h1>{this.props.title}</h1>
        <Form />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

ReactDOM.render(<App title="The GitHub Cards App"/>, document.getElementById('root'));
