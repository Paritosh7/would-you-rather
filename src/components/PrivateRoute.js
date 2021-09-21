import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => {
  console.log("Private route, authedUser : ", authedUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
