import React from 'react';
import { ReactComponent as Design } from './assets/design.svg';
import { ReactComponent as Retina } from './assets/retina.svg';
import { ReactComponent as Secure } from './assets/secure.svg';

import styles from './OurWorkSection.module.css';

const OurWorkSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Why{' '}
          <span>
            small business owners <br />
            love{' '}
          </span>
          AppCo?
        </h2>
        <p className={styles.text}>
          Our design projects are fresh and simple and will benefit your
          business <br />
          greatly. Learn more about our work!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Design />
            <h3 className={styles.item__title}>Clean Design</h3>
            <p className={styles.item__text}>
              Increase sales by showing true dynamics of your website.
            </p>
          </li>
          <li className={styles.item}>
            <Secure />
            <h3 className={styles.item__title}>Secure Data</h3>
            <p className={styles.item__text}>
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </li>
          <li className={styles.item}>
            <Retina />
            <h3 className={styles.item__title}>Retina Ready</h3>
            <p className={styles.item__text}>
              Realize importance of social proof in customer’s purchase decision
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurWorkSection;
