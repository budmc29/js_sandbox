import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  state = {
    lastId: 3,
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        id: 1,
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        id: 2,
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        id: 3,
        name: 'Eveline',
        isConfirmed: false,
        isEditing: true
      }
    ]
  }

  toggleGuestPropertyAt = (property, idToChange) =>
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

  toggleConfirmationAt = id =>
    this.toggleGuestPropertyAt('isConfirmed', id)

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  toggleEditingAt = id =>
    this.toggleGuestPropertyAt('isEditing', id)

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
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests,
      ],
      pendingGuest: ''
    });
  }

  setNameAt = (name, idToChange) =>
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
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
        />
      </div>
    );
  }
}

export default App;
