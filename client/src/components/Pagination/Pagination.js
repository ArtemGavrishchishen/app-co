import React, { Component } from "react";

import styles from "./Pagination.module.css";

const initialPage = 1;

class Pagination extends Component {
  state = { pager: {} };

  componentDidMount() {
    const { totalPages } = this.props;
    if (totalPages) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { totalPages } = this.props;
    if (totalPages !== prevProps.totalPages) {
      this.setPage(initialPage);
    }
  }

  setPage(page) {
    const { pager } = this.state;
    const { onChangePage } = this.props;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    this.setState({ pager: this.getPager(page) });
    onChangePage(page);
  }

  getPager(page) {
    const currentPage = page || 1;
    const defaultPage = 5;

    // calculate total pages
    const { totalPages } = this.props;
    let startPage, endPage;

    // calculate start and end pages
    if (totalPages <= defaultPage) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    };
  }

  render() {
    const { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <ul className={styles.pagination}>
        <li
          className={styles.navigation}
          onClick={() => this.setPage(pager.currentPage - 1)}
        >
          <div
            className={
              pager.currentPage === 1 ? styles.disabled : styles.containerLine
            }
          >
            <div className={styles.prev}></div>
          </div>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage !== page ? styles.page : styles.active}
          >
            <button className={styles.btn} onClick={() => this.setPage(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={styles.navigation}
          onClick={() => this.setPage(pager.currentPage + 1)}
        >
          <div
            className={
              pager.currentPage === pager.totalPages
                ? styles.disabled
                : styles.containerLine
            }
          >
            <div className={styles.next}></div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Pagination;
