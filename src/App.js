import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./container/quiz/quiz";
import List from "./container/list/list";
import AddQuiz from "./container/add_quiz/add_quiz";
import Main from "./container/main/main";

function App({ FileInput, quizRepository }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/list">
            <List quizRepository={quizRepository} />
          </Route>
          <Route path="/quiz/:id">
            <Quiz quizRepository={quizRepository} />
          </Route>
          <Route path="/add">
            <AddQuiz FileInput={FileInput} quizRepository={quizRepository} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
