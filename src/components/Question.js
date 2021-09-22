import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

function Question({ authedUser, unanswered, id, users, questions, match }) {
  const questionObj = questions[id];
  const user = users[questionObj.author];
  const { name, avatarURL } = user;

  return (
    <div>
      <h2>{name}</h2>
      <img src={avatarURL} alt={`${name}`}></img>
      <label>Would you rather be...</label>
      <h3>{questionObj.optionOne["text"]}</h3>
      <label>OR</label>
      <h3>{questionObj.optionTwo["text"]}</h3>
      {unanswered ? (
        <Link
          to={{
            pathname: `${match.url}question/${id}`,
            state: {
              question: questionObj,
              unanswered,
              authedUser,
              id,
              questions,
            },
          }}
        >
          You can answer here!
        </Link>
      ) : (
        <Link
          to={{
            pathname: `${match.url}question/${id}`,
            state: {
              question: questionObj,
              unanswered,
              authedUser,
              id,
              questions,
              users,
            },
          }}
        >
          View Poll
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  users,
  questions,
});

export default withRouter(connect(mapStateToProps)(Question));
