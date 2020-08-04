import React from 'react';
import {Switch, Route} from "react-router-dom";
import About from "./about"
import Login from "./RegisterLogin/login";
import Register from "./RegisterLogin/register";


function App() {
  return (
    <div>
      <Switch>
      <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
