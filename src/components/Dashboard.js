import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionsContainer from "./QuestionContainer";
import AddQuestion from "./AddQuestion";

function Dashboard({ authedUser, dispatch }) {
  const [state, setState] = React.useState(() => ({ unanswered: true }));
  const { unanswered } = state;

  return (
    <div>
      <Nav></Nav>

      <button onClick={() => setState({ unanswered: true })}>unanswered</button>
      <button onClick={() => setState({ unanswered: false })}>answered</button>
      {unanswered ? (
        <QuestionsContainer unanswered={unanswered} />
      ) : (
        <QuestionsContainer unanswered={unanswered} />
      )}
    </div>
  );
}

export default connect()(Dashboard);
