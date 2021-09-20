import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  function handleLogOut() {}
  return (
    <nav
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <ul>
        <li>Home</li>
        <li>Leaderboard</li>
        <li>Add question</li>
      </ul>
      <div>
        <label></label>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </nav>
  );
}
