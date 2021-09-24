import React from "react";
import "../css/question-poll.css";
import { connect } from "react-redux";

function QuestionPoll({ authedUser, question: oldQuestion, questions, users }) {
  const question = questions[oldQuestion.id];
  const user = users[question.author];
  const { name, avatarURL } = user;
  const { optionOne, optionTwo } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  const userAnswer =
    questions[question.id][users[authedUser].answers[question.id]].text;

  const optionOnePercentage = (
    (optionOne.votes.length / totalVotes) *
    100
  ).toFixed(0);
  const optionTwoPercentage = (
    (optionTwo.votes.length / totalVotes) *
    100
  ).toFixed(0);

  return (
    <div className="question-poll">
      <div className="avatar-div">
        <img className="avatar" src={avatarURL} alt={`${name}`}></img>
        <h2>{`${name} asked `}</h2>
      </div>

      <label>Would you rather...</label>
      <h3>{question.optionOne.text}</h3>
      <span>{`Votes : ${optionOne.votes.length} out of ${totalVotes} & Percentage : ${optionOnePercentage} %`}</span>
      <label style={{ marginTop: "1rem" }}>OR</label>
      <h3>{question.optionTwo.text}</h3>
      <span>{`Votes : ${optionTwo.votes.length} out of ${totalVotes} & Percentage : ${optionTwoPercentage} %`}</span>
      <p>{`Your Answer:  ${userAnswer}`}</p>
    </div>
  );
}

export default connect(({ questions }) => ({ questions }))(QuestionPoll);
