import React from "react";
import QuestionPoll from "./QuestionPoll";
import QuestionUnanswered from "./QuestionUnanswered";

function ToggleQuestionAnswerPoll({ location }) {
  const unanswered = location.state.unanswered;
  return <div>{unanswered ? <QuestionUnanswered /> : <QuestionPoll />}</div>;
}

export default ToggleQuestionAnswerPoll;
