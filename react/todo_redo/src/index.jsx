import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#app-root");

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<TodoList />, destination)
})
