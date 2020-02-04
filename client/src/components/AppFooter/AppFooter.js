import React from 'react';
import Logo from '../Logo';
import styles from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Logo />
        <div>All rights reserved by ThemeTags</div>
        <div>Copyrights © 2019.</div>
      </footer>
    </>
  );
};

export default AppFooter;
