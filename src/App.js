import React from "react";
import "./App.css";
import Quiz from "./container/quiz/quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./container/list/list";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
