import React from 'react';
import styles from './UsersList.module.css';

const UsersList = ({ users = [] }) => (
  <div className={styles.section}>
    <h3 className={styles.title}>Users statistics</h3>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Id</th>
          <th className={styles.th}>First name</th>
          <th className={styles.th}>Last name</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>Gender</th>
          <th className={styles.th}>IP adress</th>
          <th className={styles.th}>Total clicks</th>
          <th className={styles.th}>Total page views</th>
        </tr>
      </thead>
      <tbody>
        {users.map(
          ({
            id,
            first_name,
            last_name,
            email,
            gender,
            ip_address,
            total_cliks,
            total_page_views
          }) => (
            <tr key={id} className={styles.tr}>
              <td className={styles.td}>{id}</td>
              <td className={styles.td}>{first_name}</td>
              <td className={styles.td}>{last_name}</td>
              <td className={styles.td}>{email}</td>
              <td className={styles.td}>{gender}</td>
              <td className={styles.td}>{ip_address}</td>
              <td className={styles.td}>{total_cliks}</td>
              <td className={styles.td}>{total_page_views}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);

export default UsersList;
