import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import { RiSettings3Line, RiFunctionFill } from "react-icons/ri";
import { GoLightBulb, GoDiff } from "react-icons/go";

const Menu = () => {
  return (
    <>
      <div className={classes.menu_items}>
        <ul className={classes.menu_lists}>
          <Link to="/dashboard" className={classes.menu__list_item}>
            <RiFunctionFill className={classes.icon} />
            Dashboard
          </Link>
          <Link to="/clinicreport" className={classes.menu__list_item}>
            <GoDiff className={classes.icon} />
            Clinic Report
          </Link>
          <Link to="lean" className={classes.menu__list_item}>
            <GoLightBulb className={classes.icon} />
            Learn
          </Link>

          <Link to="profile" className={classes.menu__list_item}>
            <RiSettings3Line className={classes.icon} />
            Profile
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;
