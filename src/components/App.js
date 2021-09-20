import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App({ authedUser }) {
  console.log("In App, authedUser : ", authedUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <PrivateRoute authedUser={authedUser} exact component={Dashboard} />
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
