import "../css/login.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import handleInitialUserData from "../actions/shared";

function Login({ authedUser, dispatch, history, location }) {
  const [userState, setUserState] = React.useState(() => "");

  function handleChange(eve) {
    setUserState(eve.target.value);
  }

  function handleSubmit(eve) {
    if (!userState) return;
    eve.preventDefault();
    dispatch(handleInitialUserData(userState));
  }

  useEffect(() => {
    if (authedUser) {
      const { from } = location.state || { from: "/" };
      console.log(from);
      history.push(from);
    }
  }, [authedUser]);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label style={{ textAlign: "center" }}>
        Please select a loginName from the drop down:
        <select
          value={userState === "" ? "" : userState}
          onChange={handleChange}
        >
          <option default disabled defaultValue value="">
            Please select a name
          </option>
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
