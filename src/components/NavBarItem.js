"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export function NavBarItem(props) {
  return (
    <span id={"navbar-item-"+props.name} className="navbar-item">
      <a href={props.href} className="navbar-link">{props.name}</a>
    </span>
  );
}
