import React from "react";
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
    <div>
      <h2>{`${name} asked `}</h2>
      <img src={avatarURL} alt={`${name}`}></img>
      <h3>Would you rather...</h3>
      <p>{question.optionOne.text}</p>
      <span>{`Votes : ${optionOne.votes.length} out of ${totalVotes}`}</span>
      <span>{`Percentage : ${optionOnePercentage} %`}</span>
      <label>OR</label>
      <p>{question.optionTwo.text}</p>
      <span>{`Votes : ${optionTwo.votes.length} out of ${totalVotes}`}</span>
      <span>{`Percentage : ${optionTwoPercentage} %`}</span>
      <p>{`Your Answer:  ${userAnswer}`}</p>
    </div>
  );
}

export default connect(({ questions }) => ({ questions }))(QuestionPoll);
