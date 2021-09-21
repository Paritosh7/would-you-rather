import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./Leaderboard";
import Nav from "./Nav";
import ToggleQuestionAnswerPoll from "./ToggleQuestionAnswerPoll";

function App({ authedUser }) {
  return (
    <Router>
      <Nav authedUser={authedUser}></Nav>
      <Switch>
        <PrivateRoute
          path="/"
          authedUser={authedUser}
          exact
          component={Dashboard}
        />
        <Route path="/login" component={Login}></Route>
        <PrivateRoute
          path="/leaderboard"
          authedUser={authedUser}
          component={LeaderBoard}
        />
        <PrivateRoute
          path="/add"
          authedUser={authedUser}
          component={AddQuestion}
        />

        <PrivateRoute
          path="/question/:id"
          authedUser={authedUser}
          component={ToggleQuestionAnswerPoll}
        />
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
