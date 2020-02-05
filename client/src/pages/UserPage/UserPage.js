import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import styles from './UserPage.module.css';

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
        <Link className={styles.btn} to={routes.MAIN}>
          Main page >
        </Link>
        <Link className={styles.btn} to={routes.USERS}>
          Users page >
        </Link>
        <p className={styles.name}>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </p>
      </>
    );
  }
}

export default withRouter(UserPage);
