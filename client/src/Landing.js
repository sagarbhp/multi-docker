import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';


function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/home">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Landing;
