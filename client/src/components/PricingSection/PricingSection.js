import React from 'react';
import basic from './assets/basic.jpg';
import standart from './assets/standart.jpg';
import unlimited from './assets/unlimited.jpg';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>Afforadble Pricing and Packages </span>
          <br />
          choose your best one
        </h2>
        <p className={styles.text}>
          Monotonectally grow strategic process improvements vis-a-vis
          integrated resources.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.item__title}>Basic</h3>
            <img className={styles.img} src={basic} alt="basic" />
            <p className={styles.item__number}>$29</p>
            <ul className={styles.item__list}>
              <li className={styles.list__items}>Data Transfer</li>
              <li className={styles.list__items}>SQL Database</li>
              <li className={styles.list__items}>Search & SEO Analytics</li>
              <li className={styles.list__items}>Push Notifications</li>
              <li className={styles.list__items}>24/7 Phone Support</li>
              <li className={styles.list__items}>2 months technical support</li>
              <li className={styles.list__items}>2+ profitable keyword</li>
            </ul>
            <Link className={styles.btn} to={routes.MAIN}>
              Purchase now
            </Link>
          </li>
          <li className={styles.item}>
            <h3 className={styles.item__title}>Standard</h3>
            <img className={styles.img} src={standart} alt="standart" />
            <p className={styles.item__number}>$149</p>
            <ul className={styles.item__list}>
              <li className={styles.list__items}>Push Notifications</li>
              <li className={styles.list__items}>Data Transfer</li>
              <li className={styles.list__items}>SQL Database</li>
              <li className={styles.list__items}>Search & SEO Analytics</li>
              <li className={styles.list__items}>24/7 Phone Support</li>
              <li className={styles.list__items}>2 months technical support</li>
              <li className={styles.list__items}>2+ profitable keyword</li>
            </ul>
            <Link className={styles.btn} to={routes.MAIN}>
              Purchase now
            </Link>
          </li>
          <li className={styles.item}>
            <h3 className={styles.item__title}>Unlimited</h3>
            <img className={styles.img} src={unlimited} alt="unlimited" />
            <p className={styles.item__number}>$39</p>
            <ul className={styles.item__list}>
              <li className={styles.list__items}>Push Notifications</li>
              <li className={styles.list__items}>Data Transfer</li>
              <li className={styles.list__items}>SQL Database</li>
              <li className={styles.list__items}>Search & SEO Analytics</li>
              <li className={styles.list__items}>24/7 Phone Support</li>
              <li className={styles.list__items}>2 months technical support</li>
              <li className={styles.list__items}>2+ profitable keyword</li>
            </ul>
            <Link className={styles.btn} to={routes.MAIN}>
              Purchase now
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PricingSection;
