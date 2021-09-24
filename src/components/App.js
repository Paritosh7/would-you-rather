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
import NoMatch from "./NoMatch";

function App({ authedUser, userName }) {
  return (
    <Router>
      <Nav authedUser={authedUser} userName={userName}></Nav>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <PrivateRoute
          path="/leaderboard"
          exact
          authedUser={authedUser}
          component={LeaderBoard}
        />
        <PrivateRoute
          path="/add"
          exact
          authedUser={authedUser}
          component={AddQuestion}
        />

        <PrivateRoute
          path="/question/:id"
          exact
          authedUser={authedUser}
          component={ToggleQuestionAnswerPoll}
        />
        <PrivateRoute
          path="/"
          authedUser={authedUser}
          exact
          component={Dashboard}
        />
        <Route component={NoMatch}></Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    userName: authedUser && users[authedUser].name,
  };
};

export default connect(mapStateToProps)(App);
