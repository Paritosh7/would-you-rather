import React from "react";
import { connect } from "react-redux";
import { calcUnAnsweredQuestionIds } from "../utils/helper";
import Nav from "./Nav";
import { QuestionsContainer } from "./QuestionContainer";

function Dashboard({
  user,
  questions,
  unAnsweredQuestionIds,
  answeredQuestionIds,
}) {
  const [state, setState] = React.useState(() => ({ unanswered: true }));
  const { unanswered } = state;
  console.log(answeredQuestionIds);

  return (
    <div>
      <Nav></Nav>
      <button onClick={() => setState({ unanswered: true })}>unanswered</button>
      <button onClick={() => setState({ unanswered: false })}>answered</button>
      {unanswered ? (
        <QuestionsContainer questionIds={unAnsweredQuestionIds} />
      ) : (
        <QuestionsContainer questionIds={answeredQuestionIds} />
      )}
    </div>
  );
}

const mapStateToProps = ({ user, questions }) => {
  return {
    user,
    questions: questions,
    unAnsweredQuestionIds: calcUnAnsweredQuestionIds(user, questions),
    answeredQuestionIds: Object.keys(user.answers),
  };
};

export default connect(mapStateToProps)(Dashboard);
