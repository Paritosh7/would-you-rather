import React from "react";
import QuestionPoll from "./QuestionPoll";
import QuestionUnanswered from "./QuestionUnanswered";

function ToggleQuestionAnswerPoll({ location }) {
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
