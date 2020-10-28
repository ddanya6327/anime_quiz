import React from "react";
import "./App.css";
import Quiz from "./container/quiz/quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./container/list/list";
import AddQuiz from "./container/add_quiz/add_quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/add">
            <AddQuiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
