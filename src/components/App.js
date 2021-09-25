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
import PageNotFound from "./PageNotFound";

function App({ authedUser, userName }) {
  return (
    <Router>
      <Nav authedUser={authedUser} userName={userName}></Nav>
      <Switch>
        <PrivateRoute
          path="/"
          authedUser={authedUser}
          exact
          component={Dashboard}
        />
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
          path="/questions/:id"
          exact
          authedUser={authedUser}
          component={ToggleQuestionAnswerPoll}
        />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
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
