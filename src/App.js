"use strict";
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {NavBarItem} from './components/navbar.js';

const container = document.getElementById('react-app-container');
function AccountLink(props) {
  return (
    <a href={props.href}>
      <img src={props.imgSrc} width={props.width||93} height={props.height||93}/>
    </a>
  );
};
const NavBar = (
  <div id="navbar">
    <NavBarItem name="Home" href="/"/>
    <NavBarItem name="My Projects" href="projects.html"/>
  </div>
)
const Accounts = (
  <div id="accounts">
    <AccountLink href="https://github.com/icositetrachoron-programmer" imgSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
    <AccountLink href="https://repl.it/@TheProgrammer3" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png"/>
    <AccountLink href="https://glitch.com/@icositetrachoron-programmer" imgSrc="https://glitch.com/edit/images/logos/glitch/social-card@2x.png"/>
    <AccountLink href="https://forum.snap.berkeley.edu/u/programmer_user/" imgSrc="https://snap.berkeley.edu/img/topbar-logo.png" width="134.85" height="93"/>
  </div>
);
const Profile = (
  <div id="profile">
    <h1>programmer_user</h1>
    <p>C/C++, Javascript, and Python programmer</p>
    <p>This website was made with React.js</p>
  </div>
);
const App = (
  <div id="react-app">
    {NavBar}
    {Profile}
    {Accounts}
  </div>
);
ReactDOM.render(App,container);
