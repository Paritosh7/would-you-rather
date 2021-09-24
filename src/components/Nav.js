import React from "react";
import "../css/nav.css";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import LoginHeader from "./LoginHeader";

const Nav = ({ authedUser, userName, dispatch, history }) => {
  function handleLogOut() {
    dispatch(setAuthedUser(null));
    history.push("/");
  }

  if (!authedUser) {
    return <LoginHeader />;
  }

  return (
    <nav className="nav">
      <ul className="nav-link-wrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/add" }}>Add Question</NavLink>
        </li>
      </ul>
      <div className="nav-user">
        <label style={{ marginRight: "0.5rem" }}>{userName}</label>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </nav>
  );
};

export default withRouter(connect()(Nav));
