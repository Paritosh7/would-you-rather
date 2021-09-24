import React from "react";
import QuestionsContainer from "./QuestionContainer";

function Dashboard() {
  const [state, setState] = React.useState(() => ({
    unanswered: true,
    button: { unAnsweredBtn: "active", answeredBtn: "" },
  }));
  const { unanswered } = state;
  const { unAnsweredBtn: unAnsweredStyle, answeredBtn: answeredStyle } =
    state.button;

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ marginLeft: "1.5rem" }}>
        <button
          className={unAnsweredStyle}
          onClick={(eve) =>
            setState({
              unanswered: true,
              button: { unAnsweredBtn: "active", answeredBtn: "" },
            })
          }
        >
          unanswered
        </button>
        <button
          className={answeredStyle}
          style={{ marginLeft: "1rem" }}
          onClick={() =>
            setState({
              unanswered: false,
              button: { unAnsweredBtn: "", answeredBtn: "active" },
            })
          }
        >
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
