import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class Form extends React.Component {
  state = { userName: '' };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(response.data);
    this.setState({ userName: '' })
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
    { props.profiles.map(profile => <Card key={profile.id} {...profile} />) }
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
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }

  render() {
    return(
      <>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

ReactDOM.render(<App title="The GitHub Cards App"/>, document.getElementById('root'));
