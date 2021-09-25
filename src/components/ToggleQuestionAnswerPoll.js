import React from "react";
import { Redirect } from "react-router";
import QuestionPoll from "./QuestionPoll";
import QuestionUnanswered from "./QuestionUnanswered";

function ToggleQuestionAnswerPoll({ location }) {
  if (!location.state) {
    return <Redirect to="/404"></Redirect>;
  }

  const { unanswered, authedUser, question, questions, users, id } =
    location.state;
  return (
    <div>
      {unanswered ? (
        <QuestionUnanswered
          authedUser={authedUser}
          question={question}
          questions={questions}
          id={id}
        />
      ) : (
        <QuestionPoll
          authedUser={authedUser}
          question={question}
          users={users}
          id={id}
        />
      )}
    </div>
  );
}

export default ToggleQuestionAnswerPoll;
