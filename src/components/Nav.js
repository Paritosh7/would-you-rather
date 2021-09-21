import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ authedUser }) {
  function handleLogOut() {}
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
        <label></label>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </nav>
  );
}
