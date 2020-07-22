import React from 'react';
import {Switch, Route} from "react-router-dom";
import About from "./about"
//import Home from ""


function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
