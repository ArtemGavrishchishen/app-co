import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AppHeader from '../../components/AppHeader';
import Breadcrumbs from '../../components/Breadcrumbs';
import Statistic from '../../components/Statistic';
import Footer from '../../components/Footer';

import styles from './UserPage.module.css';

class UserPage extends Component {
  state = { user: {}, clicks: [], views: [], error: false };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    this.getUser(id);
  }

  formatDate = date => {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    return `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} `;
  };

  getUser = async id => {
    try {
      const response = await fetch(`/user/${id}`);
      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        const statistic = data.statistic;

        const clicks = statistic.map(item => {
          return {
            date: this.formatDate(new Date(item.date)),
            value: item.clicks
          };
        });

        const views = statistic.map(item => {
          return {
            date: this.formatDate(new Date(item.date)),
            value: item.page_views
          };
        });

        this.setState({ user: user, clicks: clicks, views: views });
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const { user, clicks, views } = this.state;
    return (
      <div className={styles.userPage}>
        <AppHeader />
        <main className={styles.main}>
          <div className={styles.container}>
            <Breadcrumbs
              item={{
                to: `${user.id}`,
                label: `${user.first_name} ${user.last_name}`
              }}
            />
            <p className={styles.name}>
              <span>{user.first_name} </span>
              <span>{user.last_name}</span>
            </p>
          </div>

          {clicks.length > 0 && <Statistic data={clicks} title="Clicks" />}
          {views.length > 0 && <Statistic data={views} title="Views" />}
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(UserPage);
