import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../../configs/routes";
import UsersList from "../../components/UsersList";
import Pagination from "../../components/Pagination";

import styles from "./UsersPage.module.css";

class UsersPage extends Component {
  state = { users: [], maxPage: 1, currentPage: 1, error: false };

  componentDidMount() {
    this.getUserList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.getUserList();
    }
  }

  getUserList = async () => {
    try {
      const { currentPage } = this.state;
      const response = await fetch(`/users?page=${currentPage}`);
      if (response.ok) {
        const data = await response.json();

        this.setState({ users: data.users, maxPage: data.maxPage });
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: true });
    }
  };

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage === 1) return;
    const prev = currentPage - 1;

    this.setState({ currentPage: prev });
    this.getUserList();
  };

  nextPage = () => {
    const { currentPage, maxPage } = this.state;
    if (currentPage >= maxPage) return;

    const next = currentPage + 1;
    this.setState({ currentPage: next });
  };

  onChangePage = page => {
    this.setState({ currentPage: page });
    console.log("page", page);
  };

  render() {
    const { users, maxPage } = this.state;
    return (
      <>
        <div className={styles.container}>
          <Link className={styles.btn} to={routes.MAIN}>
            Main page >
          </Link>
        </div>
        <div className={styles.users}>
          <UsersList users={users} />
        </div>
        <Pagination totalPages={maxPage} onChangePage={this.onChangePage} />
      </>
    );
  }
}

export default UsersPage;
