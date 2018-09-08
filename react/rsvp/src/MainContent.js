import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props =>
  <div className="main">
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered} />

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

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt:PropTypes.func.isRequired,
  totalInvited: PropTypes.number,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number
};

export default MainContent;
