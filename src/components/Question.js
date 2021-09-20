import React from "react";
import { connect } from "react-redux";

function Question({ unanswered, id, users, questions }) {
  const questionObj = questions[id];
  const user = users[questionObj.author];
  const { name, avatarURL } = user;

  function handleClick() {}

  return (
    <div>
      <h2>{name}</h2>
      <img src={avatarURL} alt={`${name}`}></img>
      <label>Would you rather be...</label>
      <h3>{questionObj.optionOne["text"]}</h3>
      <label>OR</label>
      <h3>{questionObj.optionTwo["text"]}</h3>
      {!unanswered && (
        <label>{`You chose ${questionObj[user.answers[id]].text}`}</label>
      )}
      {unanswered ? (
        <button onClick={handleClick}>You can answer here!</button>
      ) : (
        <button>Compare Results</button>
      )}
    </div>
  );
}

const mapStateToProps = ({ users, questions }) => ({
  users,
  questions,
});

export default connect(mapStateToProps)(Question);
