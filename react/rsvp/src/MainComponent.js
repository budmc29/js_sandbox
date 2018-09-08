import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';

const MainComponent = props =>
  <div className="main">
    <div>
      <h2>Invitees</h2>
      <label>
        <input
          type="checkbox"
          onChange={props.toggleFilter}
          checked={props.isFiltered} /> Hide those who haven't responded
      </label>
    </div>

    <Counter
      totalInvited={props.totalInvited}
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
    />

    <GuestList
      guests={props.guests}
      pendingGuest={props.pendingGuest}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuestAt={props.removeGuestAt}
    />
  </div>

MainComponent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guests: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt:PropTypes.func.isRequired,
  totalInvited: PropTypes.number,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number
};

export default MainComponent;
