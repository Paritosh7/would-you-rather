import "../css/leaderboard.css";
import React from "react";
import { connect } from "react-redux";

function LeaderBoard({ users }) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>LeaderBoard</h3>
      <table>
        <tbody>
          <tr>
            <th>Score</th>
            <th>User</th>
            <th>Answered Questions</th>
            <th>Created Questions</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.score}</td>
              <td>{user.name}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{Object.keys(user.questions).length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  let tempObj = Object.assign({}, users);
  /** adding score in tempObj */
  Object.values(tempObj).map(
    (user) =>
      (tempObj[user.id]["score"] =
        Object.keys(user.answers).length + user.questions.length)
  );

  return { users: Object.values(tempObj).sort((a, b) => b.score - a.score) };
};

export default connect(mapStateToProps)(LeaderBoard);
