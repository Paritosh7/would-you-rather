import React from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App({ authedUser }) {
  if (!authedUser) return <Login />;
  else return <Dashboard />;
}

const mapStateToProps = ({ authedUser, user, questions }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
