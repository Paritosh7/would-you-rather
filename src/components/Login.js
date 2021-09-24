import "../css/login.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import handleInitialUserData from "../actions/shared";

function Login({ authedUser, dispatch, history, location }) {
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

  useEffect(() => {
    if (authedUser) {
      const { from } = location.state || { from: "/" };
      history.push(from);
    }
  }, [authedUser, history, location.state]);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label style={{ textAlign: "center" }}>
        Please select a loginName from the drop down:
        <select ref={userRef}>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
      </label>
      <button className="login-submit" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Login);
