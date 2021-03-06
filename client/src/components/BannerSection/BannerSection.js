import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import mobile from './assets/mobile.png';
import styles from './BannerSection.module.css';

import { ReactComponent as Background } from './assets/background.svg';

const BannerSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bgc}>
        <Background />
      </div>

      <div className={styles.container}>
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
      </div>
    </section>
  );
};

export default BannerSection;
