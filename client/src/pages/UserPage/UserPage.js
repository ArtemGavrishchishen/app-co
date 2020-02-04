import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// import styles from './UserPage.module.css';

class UserPage extends Component {
  state = { user: {}, statistic: [], error: false };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    this.getUser(id);
  }

  getUser = async id => {
    try {
      const response = await fetch(`/user/${id}`);
      if (response.ok) {
        const data = await response.json();

        this.setState({ user: data.user, statistic: data.statistic });
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <div>{user.first_name}</div>
      </>
    );
  }
}

export default withRouter(UserPage);
