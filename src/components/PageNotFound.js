import React from "react";
import { Link } from "react-router-dom";
import "../css/page-404.css";

const PageNotFound = () => {
  return (
    <div className="wrapper">
      <img src="/images/404-page.jpeg" alt="page not found" />
      <div id="info">
        <h4>Hey, we are sorry! Looks like we took a wrong turn!</h4>
        <Link to="/">Go back to Home page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
