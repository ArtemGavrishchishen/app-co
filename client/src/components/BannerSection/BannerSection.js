import React from "react";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";
import mobile from "./assets/mobile.png";
import styles from "./BannerSection.module.css";

const BannerSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftBgc} />
        <div className={styles.content}>
          <h2 className={styles.title}>
            <strong>Brainstorming</strong> for desired perfect Usability
          </h2>
          <p className={styles.text}>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
          <Link className={styles.btn} to={routes.USERS}>
            View Stats
          </Link>
        </div>
        <img className={styles.img} src={mobile} alt="mobile" />
        <div className={styles.rightBgc} />
      </div>
    </div>
  );
};

export default BannerSection;
