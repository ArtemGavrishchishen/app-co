import React from "react";
import Logo from "../Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
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
    </>
  );
};

export default Footer;
