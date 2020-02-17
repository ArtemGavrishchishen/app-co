import React from "react";
import Logo from "../Logo";
import { ReactComponent as Background } from "./assets/background.svg";
import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgc}>
        <Background />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.text}>All rights reserved by ThemeTags</div>
          <div className={styles.year}>Copyrights © 2019.</div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
