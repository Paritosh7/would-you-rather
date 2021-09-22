import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Nav = ({ authedUser, userName, dispatch }) => {
  function handleLogOut() {
    dispatch(setAuthedUser(null));
  }

  if (!authedUser) {
    return <div>Hello</div>;
  }

  return (
    <nav
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <ul>
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
      <div>
        <label>{userName}</label>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </nav>
  );
};

export default connect()(Nav);
