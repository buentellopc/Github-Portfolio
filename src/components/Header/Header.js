import React from "react";
import Link from "../Link/Link";
import "./Header.css";

export default function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to relofdddad.
      </p>
      <Link url="https://reactjs.org" title="Learn React" />
    </header>
  );
}
