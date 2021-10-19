import React from "react";
import Icon from "../Logo/Icon";
import classes from "./Dashboard.module.css";
import profileImage from "../../assets/avartar.jpg";

const Dashboard = () => {
  return (
    <div className={classes.grid}>
      {/* menu column */}
      <div className={classes.menu}>
        <div className={classes.menu_header}>
          <Icon />
          <p>Clinic Card</p>
        </div>
        <div className={classes.menu_items}>
          <ul className={classes.menu_lists}>
            <li className={classes.menu__list_item}>Dashboard</li>
            <li className={classes.menu__list_item}>Clinic Report</li>
            <li className={classes.menu__list_item}>Learn</li>
            <li className={classes.menu__list_item}>Profile</li>
          </ul>
        </div>
      </div>
      {/* content column */}
      <div className={classes.content}>
        <div className={classes.content_header}>
          <div className={classes.Welcome}>
            <p>Welcome Khadija</p>
            <div className={classes.notification}>
              <div>Notify</div>
              <div className={classes.profile_image}>
                <img
                  src={profileImage}
                  alt="profile"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className={classes.add_appointment}>
            <button className={classes.btn}>Next Clinic Visit</button>
          </div>
        </div>
        <div className="reminder"></div>
      </div>
    </div>
  );
};

export default Dashboard;
