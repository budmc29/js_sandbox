import React from 'react';
import PropTypes from 'prop-types';

import PendingGuest from './PendingGuest';
import Guest from './Guest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest}/>
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
        <Guest
          id={guest.id}
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(guest.id)}
          handleToggleEditing={() => props.toggleEditing(guest.id)}
          handleRemove={() => props.removeGuest(guest.id)}
          setName={text => props.setName(text, guest.id)} />
      )}
  </ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;
