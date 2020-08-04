import React from 'react';
import {Switch, Route} from "react-router-dom";
import About from "./about"
import Login from "./RegisterLogin/login";
import Register from "./RegisterLogin/register";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
