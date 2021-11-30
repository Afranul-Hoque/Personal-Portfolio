import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>

    </Router>
  );
}

export default App;
