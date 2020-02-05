import React from 'react';
import Logo from '../Logo';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftBgc} />
          <Logo />
          <div className={styles.rightBgc} />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
