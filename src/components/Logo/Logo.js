import React from "react";
import Icon from "./Icon";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div style={{ textAlign: "ecenter" }}>
      <Icon />
      <div>
        <h3 className={classes.logo_text}>Clinic Card</h3>
      </div>
    </div>
  );
};

export default Logo;
