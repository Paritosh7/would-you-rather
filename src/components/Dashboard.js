import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import QuestionsContainer from "./QuestionContainer";
import AddQuestion from "./AddQuestion";

function Dashboard() {
  const [state, setState] = React.useState(() => ({ unanswered: true }));
  const { unanswered } = state;

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ marginLeft: "1.5rem" }}>
        <button onClick={() => setState({ unanswered: true })}>
          unanswered
        </button>
        <button onClick={() => setState({ unanswered: false })}>
          answered
        </button>
      </div>
      {unanswered ? (
        <QuestionsContainer unanswered={unanswered} />
      ) : (
        <QuestionsContainer unanswered={unanswered} />
      )}
    </div>
  );
}

export default Dashboard;
