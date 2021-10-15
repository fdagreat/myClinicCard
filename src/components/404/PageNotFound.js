import React from "react";
import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.notfound}>
      <div className={classes.content}>
        <h1>Oohhpss ! Page Not Found !.</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
