import React from 'react';
import Logo from '../Logo';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
