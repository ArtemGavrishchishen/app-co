import React from "react";
import styles from "./UsersList.module.css";

const UsersList = ({ users = [], onSelectUser }) => (
  <div className={styles.section}>
    <div className={styles.container}>
      <h3 className={styles.title}>Users statistics</h3>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th} scope="col">
              Id
            </th>
            <th className={styles.th} scope="col">
              First name
            </th>
            <th className={styles.th} scope="col">
              Last name
            </th>
            <th className={styles.th} scope="col">
              Email
            </th>
            <th className={styles.th} scope="col">
              Gender
            </th>
            <th className={styles.th} scope="col">
              IP adress
            </th>
            <th className={styles.th} scope="col">
              Total clicks
            </th>
            <th className={styles.th} scope="col">
              Total page views
            </th>
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
              <tr
                key={id}
                className={styles.tr}
                onClick={() => onSelectUser(id)}
              >
                <td className={styles.td} data-label="Id">
                  {id}
                </td>
                <td className={styles.td} data-label="First name">
                  {first_name}
                </td>
                <td className={styles.td} data-label="Last name">
                  {last_name}
                </td>
                <td className={styles.td} data-label="Email">
                  {email}
                </td>
                <td className={styles.td} data-label="Gender">
                  {gender}
                </td>
                <td className={styles.td} data-label="IP adress">
                  {ip_address}
                </td>
                <td className={styles.td} data-label="Total clicks">
                  {total_cliks}
                </td>
                <td className={styles.td} data-label="Total page views">
                  {total_page_views}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersList;
