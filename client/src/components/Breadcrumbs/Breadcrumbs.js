import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../configs/routes';
import styles from './Breadcrumbs.module.css';

const items = [
  { to: routes.MAIN, label: 'Main page' },
  { to: routes.USERS, label: 'User statistics' }
];

const Breadcrumbs = ({ item }) => {
  let links;
  if (item && item.to && item.label) {
    links = [...items, item];
  } else {
    links = [...items];
  }

  return (
    <div>
      {links.map(({ to, label }) => (
        <Link className={styles.btn} key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
