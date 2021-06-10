import React, { Fragment } from "react";
import "./App.css";

//components

import InputOne from "./InputOne";
import ListAll from "./ListAll";

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
