import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: []
  }

  lastGuestID = 0;

  generateUniqueID = () => {
    this.lastGuestID += 1;
    return this.lastGuestID;
  }

  toggleGuestProperty = (property, idToChange) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === idToChange) {
           return {
             ...guest,
             [property]: !guest[property]
           };
        }

        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty('isConfirmed', id)

  removeGuest = id => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    })
  }

  toggleEditing = id =>
    this.toggleGuestProperty('isEditing', id)

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered })

  handleNameInput = e =>
    this.setState({
      pendingGuest: e.target.value
    })

  newGuestSubmitHandler = e => {
    e.preventDefault();

    this.setState({
      guests: [
        {
          id: this.generateUniqueID(),
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests,
      ],
      pendingGuest: ''
    });
  }

  setName = (name, idToChange) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === idToChange) {
           return {
             ...guest,
             name
           };
        }

        return guest;
      })
    });

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          pendingGuest={this.state.pendingGuest}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
        />
      </div>
    );
  }
}

export default App;
