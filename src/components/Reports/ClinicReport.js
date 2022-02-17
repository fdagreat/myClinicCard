import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ClinicReport.module.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../assets/avartar.jpg";
// import { useHistory } from "react-router";
import { IoLogOutOutline } from "react-icons/io5";
import ActivityForm from "../Form/ActivityForm";
import { FaCalendar } from "react-icons/fa";

import Menu from "../Menu/Menu";

const ClinicReport = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className={classes.grid}>
        {/* menu column */}
        <div className={classes.menu}>
          <Link to="/" className={classes.topbar}>
            <span>
              <IoLogOutOutline className={classes.icon} />
            </span>
            Logout
          </Link>
          {/* menu item lists */}
          <Menu />
        </div>
        {/* content column */}
        <div className={classes.content}>
          <div className={classes.main}>
            {/* top bar section */}
            <div className={classes.top_bar}>
              <div className={classes.title}>Clinic Progress Reports</div>
              <div className={classes.avarta}>
                <div className={classes.avarta_btn}>
                  <button>
                    <span className={classes.plus_icon}>+</span> Create New
                    Report
                  </button>
                </div>
                <div className={classes.user_data}>
                  <div className={classes.avarta_image}>
                    <img src={profileImage} alt="" />
                  </div>
                  <span>Jane Doe</span>
                </div>
              </div>
            </div>
            {/* cards section */}
            <section className={classes.card_grid}>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={classes.aside}>3</div> */}
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.card_item}>
                <div className={classes.date_data}>
                  <FaCalendar className={classes.dateIcon} />{" "}
                  <span className={classes.date_value}>17th February 2022</span>
                </div>
                <div className={classes.report_data}>
                  <div className={classes.address}>
                    <p>
                      Hospital: <span>Vijibweni Hospital</span>
                    </p>
                    <p>
                      District: <span>Kigamboni</span>
                    </p>
                    <p>
                      City: <span>Dar es Salaam</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.recomm_title}>
                      Doctor Recommendations
                    </p>
                    <div className={classes.recommendations}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum aliquam molestias culpa nesciunt repellendus
                        molestiae, tenetur earum necessitatibus harum dolores
                        illo quam ad adipisci, natus quo! Blanditiis recusandae
                        non repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* modal component */}
    </>
  );
};

export default ClinicReport;
