import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { calcUnAnsweredQuestionIds } from "../utils/helper";

function QuestionsContainer({
  unanswered,
  unAnsweredQuestionIds,
  answeredQuestionIds,
}) {
  function questionsList(questionIds) {
    return questionIds.map((id) => {
      return (
        <li key={id}>
          <Question unanswered={unanswered} id={id} />
        </li>
      );
    });
  }
  return (
    <ul>
      {unanswered
        ? questionsList(unAnsweredQuestionIds)
        : questionsList(answeredQuestionIds)}
    </ul>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    unAnsweredQuestionIds: calcUnAnsweredQuestionIds(
      users[authedUser],
      questions
    ),
    answeredQuestionIds: Object.keys(users[authedUser].answers),
  };
};

export default connect(mapStateToProps)(QuestionsContainer);
