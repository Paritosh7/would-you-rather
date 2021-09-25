import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        return authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
