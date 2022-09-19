import React from "react";
import Link from "../Link/Link";
import "./Header.css";
import logo from "../../GitHub-Mark-Light-64px.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My GitHub Portfolio </h1>
    </header>
  );
}
