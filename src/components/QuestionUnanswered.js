import React from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";

/**
 * TODO
 * questionObj
 * question id
 */
function QuestionUnanswered({
  authedUser,
  question,
  questions,
  users,
  dispatch,
}) {
  const user = users[question.author];

  const [state, setState] = React.useState(() => ({
    selected: "none",
    value: null,
  }));

  const [submitAnswer, setSubmitAnser] = React.useState(() => false);

  function handleChange(eve) {
    if (state.selected === "none") {
      setState({ selected: eve.target.id, value: eve.target.value });
    }
  }

  function handleSubmit(eve) {
    eve.preventDefault();
    if (state.selected === null || submitAnswer === true) return;

    // setState({
    //   selected: state.selected,
    //   value: eve.target[state.selected].value,
    // });

    const answerObj = { authedUser, qid: question.id, answer: state.value };
    dispatch(handleSaveQuestionAnswer(answerObj));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user.name}</h2>
      <img src={user.avatarURL} alt={user.name}></img>
      <h3>Would you rather....</h3>

      <input
        id="option-one"
        type="radio"
        value="optionOne"
        checked={state.selected === "option-one"}
        name="answer"
        onChange={handleChange}
      ></input>
      <label>{question.optionOne.text}</label>
      <input
        id="option-two"
        type="radio"
        name="answer"
        value="optionTwo"
        checked={state.selected === "option-two"}
        onChange={handleChange}
      ></input>
      <label>{question.optionTwo.text}</label>
      <button>Answer</button>
    </form>
  );
}

export default connect()(QuestionUnanswered);
