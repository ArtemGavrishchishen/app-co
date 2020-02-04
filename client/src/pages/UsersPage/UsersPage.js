import React, { Component } from 'react';
import UsersList from '../../components/UsersList';

class UsersPage extends Component {
  state = { users: [], error: false };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    try {
      const response = await fetch('/users');
      if (response.ok) {
        const data = await response.json();

        this.setState({ users: data });
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <>
        <UsersList users={users} />
      </>
    );
  }
}

export default UsersPage;
