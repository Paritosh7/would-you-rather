import React from "react";
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
    <form onSubmit={handleSubmit}>
      <label>Would you Rather</label>
      <input id="option-one" placeholder="Option one"></input>
      <label>or</label>
      <input id="option-two" placeholder="Option two"></input>
      <button>Ask question</button>
    </form>
  );
}

export default connect(({ authedUser }) => ({ authedUser }))(AddQuestion);
