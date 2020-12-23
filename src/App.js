import './App.css';
import React from "react";
import Terminal from "./components/Terminal";

function App() {
  return (
    <React.Fragment>
      <header className={'header'}>
        <span> Harsh Profile $</span>
        <span>
            <span className="button blue" />
            <span className="button secondary" />
            <span className="button secondary" />
        </span>
      </header>
      <div id="content">
        <Terminal />
      </div>
    </React.Fragment>
  );
}

export default App;
