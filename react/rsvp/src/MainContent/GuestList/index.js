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
          handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
          handleToggleEditing={() => props.toggleEditingAt(guest.id)}
          handleRemove={() => props.removeGuestAt(index)}
          setName={text => props.setNameAt(text, guest.id)} />
      )}
  </ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;
