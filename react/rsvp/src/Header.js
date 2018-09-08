import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <form onSubmit={props.newGuestSubmitHandler}>
      <input
        type="text"
        value={props.pendingGuest}
        onChange={props.handleNameInput}
        placeholder="Invite Someone" />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  </header>

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
};

export default Header;
