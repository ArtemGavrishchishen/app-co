import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import Statistic from "../../components/Statistic";
import Footer from "../../components/Footer";

import routes from "../../configs/routes";
import styles from "./UserPage.module.css";

class UserPage extends Component {
  state = { user: {}, clicks: [], views: [], error: false };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    this.getUser(id);
  }

  formatDate = date => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
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
        {clicks.length > 0 && <Statistic data={clicks} title="Clicks" />}
        {views.length > 0 && <Statistic data={views} title="Views" />}
        <Footer />
      </>
    );
  }
}

export default withRouter(UserPage);
