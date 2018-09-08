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
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      isFiltered={props.isFiltered}
      removeGuest={props.removeGuest}
    />
  </div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest:PropTypes.func.isRequired,
  totalInvited: PropTypes.number,
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number
};

export default MainContent;
