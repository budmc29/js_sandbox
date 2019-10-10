/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-multi-comp: off,
  max-len: off,
*/
import React from 'react';
import PropTypes from 'prop-types';


// Exercise 07/01
// ===========
//
// Now let's look at an alternative component pattern which can also be used to cross-cut concerns
// between child components, namely the "Render Prop" pattern. While the demo app doesn't currently
// define any Render Props directly, the Render Prop pattern is one of the most important patterns
// which is in use today for abstracting and reusing component state/logic.
//
// We will repeat the HOC exercise on capturing and displaying the current mouse position, but this
// time, instead of using a HOC, we'll use a render prop.
//
// Tasks
// --------
// ✅    You should complete the `MousePosition` component so that it supports the render prop pattern
// ✅    Your `MousePosition` component should listen/capture current mouse position, as we did in the HOC exercise
// ✅    Your `MousePosition` should offer the current mouse position coords as a single object parameter to any child components
// ✅    Your `MousePosition` component should update the current coordinates in real time, as the user moves their mouse
// ✅    Your component include the `MousePosition` component
// ✅    Your component should render the current X, Y position. The format should be: (x,y) including the parentheses, as before.
//
// 🚫   Styling is out of scope
// 🚫   You are free to add additional text, markup, but we will only be looking for the current X, Y position of the mouse
//
// Tips
// ------
// 🐨   Use the `onMouseMove` Synthetic DOM event to capture the current X and Y coords of the mouse, as before
// 🐨   Your solution to the HOC exercise could be a good starting point
export class MousePosition extends React.Component {
    state = { x: 0, y: 0 }

    handleMouse = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }

    render() {
      return (
        <div onMouseMove={this.handleMouse}>
          {this.props.children(this.state)}
        </div>
      );
    }
}

// Define display name so we can select in our tests
MousePosition.displayName = 'MousePosition';

// Add runtime prop validation
MousePosition.propTypes = {
  children: PropTypes.func,
};

class App extends React.Component {
  render() {
    return (
      <div>
        <MousePosition>
          {(mousePosition) => {
            return(
              <div>
                Mouse coordinates: ({`${mousePosition.x},${mousePosition.y}`})
              </div>
            )
          }}
        </MousePosition>
      </div>


    // return class extends React.Component {
    // }
    );
  }
}

// Add runtime prop validation
App.propTypes = {};

export default App;

