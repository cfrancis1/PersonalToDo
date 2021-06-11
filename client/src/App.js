import React, { Fragment } from "react";
import "./App.css";

//components

import InputOne from "./Input";
import ListAll from "./List";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputOne />
        <ListAll />
      </div>
    </Fragment>
  );
}

export default App;
