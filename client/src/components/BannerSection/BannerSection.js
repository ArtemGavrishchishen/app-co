import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../configs/routes';
import styles from './BannerSection.module.css';

const BannerSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <strong>Brainstorming</strong> for desired perfect Usability
        </h2>
        <p className={styles.text}>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <NavLink exact to={routes.USERS}>
          View Stats
        </NavLink>
      </div>
    </div>
  );
};

export default BannerSection;
