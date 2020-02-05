import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import notebook from './assets/notebook.png';
import styles from './CallSection.module.css';

const CallSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Start Managing your apps business, more faster
          </h2>
          <p className={styles.text}>
            Objectively deliver professional value with diverse web-readiness.
            Collaboratively transition wireless customer service without
            goal-oriented catalysts for change. Collaboratively.
          </p>
          <Link className={styles.btn} to={routes.USERS}>
            Learn more
          </Link>
        </div>

        <img className={styles.img} src={notebook} alt="notebook" />
      </div>
    </section>
  );
};

export default CallSection;
