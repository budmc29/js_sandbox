/* eslint
  react/destructuring-assignment: off,
  react/prop-types: off,
*/
import React from 'react';

// Exercise 01/01
// ===========
//
// At this stage we are not interesting in layout, just
// getting used to JSX and some of its features. Therefore,
// don't worry about how the component renders/looks, focus
// on making sure the right data is rendered.
//
// Tasks
// --------
// ✅    Your component should accept a 'status' prop, which renders the status label
// ✅    Your component should accept a 'stat' prop, which renders a statistic
// ✅    Your component should render one of the allowed status icons
//
// 🚫    Styling & layout are out of scope for this exercise
//
// ⭐️    Capitalise the first letter of the status label
//
// Tip
// ------
// 🐨   You can create an icon using the 'i' DOM node, and with either of the following class names:
//        Unavailable  =>    'fas fa-user-slash'
//        Available    =>    'far fa-user'
//        Busy         =>    'fas fa-user'
function Icon({ status, stat }) {
  const classNames = {
    unavailable: 'fas fa-user-slash',
    available: 'far fa-user',
    busy: 'fas fa-user'
  }

  return (
    <i className={classNames[status]}>
      {stat}
      {status.replace(/^./, str => str.toUpperCase())}
    </i>
  )
}

function StatusBlock(props) {
  return (
    <div>
      <Icon {...props} />
    </div>
  );

}

export default StatusBlock;
