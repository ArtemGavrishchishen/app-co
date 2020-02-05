import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../../configs/routes';
import UsersList from '../../components/UsersList';
import Pagination from '../../components/Pagination';

class UsersPage extends Component {
  state = { users: [], maxPage: 1, currentPage: 1, error: false };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    try {
      const { currentPage } = this.state;
      console.log(currentPage);
      const response = await fetch('/users', {
        body: JSON.stringify({ page: 3 })
      });
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

  render() {
    const { users, maxPage, currentPage } = this.state;
    return (
      <>
        <UsersList users={users} />
        <Pagination
          maxPage={maxPage}
          currentPage={currentPage}
          prev={this.prevPage}
          next={this.nextPage}
        />
      </>
    );
  }
}

export default UsersPage;
