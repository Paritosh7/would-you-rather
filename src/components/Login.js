import React from "react";
import { connect } from "react-redux";
import handleInitialUserData from "../actions/shared";

function Login({ dispatch }) {
  /**
   * Didn't want to make Login a controlled component,
   * so used useRef.
   */
  const userRef = React.useRef();

  function handleSubmit(eve) {
    eve.preventDefault();
    const userID = userRef.current.value;
    dispatch(handleInitialUserData(userID));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please select a loginName from the drop down:
        <select ref={userRef}>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default connect()(Login);
