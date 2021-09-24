import React from "react";
import "../css/add-question.css";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleAddQuestion } from "../actions/shared";

function AddQuestion({ authedUser, dispatch }) {
  const [redirectState, setRedirectState] = React.useState(() => false);

  function handleSubmit(eve) {
    eve.preventDefault();

    const optionOne = eve.target.elements["option-one"].value;
    const optionTwo = eve.target.elements["option-two"].value;

    const question = {
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };
    dispatch(handleAddQuestion(question));
    setRedirectState(true);
  }

  if (redirectState) return <Redirect to="/" />;

  return (
    <form className="form-add-question" onSubmit={handleSubmit}>
      <h2>Would you Rather...</h2>
      <input id="option-one" placeholder="Option one"></input>
      <label>or</label>
      <input id="option-two" placeholder="Option two"></input>
      <button>Ask question</button>
    </form>
  );
}

export default connect(({ authedUser }) => ({ authedUser }))(AddQuestion);
