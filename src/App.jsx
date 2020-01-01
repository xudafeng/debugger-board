import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './App.module.less';

const localStorageKey = '_debugger_board_minimize';

export default class App extends Component {
  state = { visible: true, minimize: localStorage.getItem(localStorageKey) };

  showDrawer() {
    this.setState({
      visible: false,
    });
    window._debugger_board_drawer_ref.showDrawer();
  }

  showButton() {
    this.setState({
      visible: true,
      minimize: false,
    });
    localStorage.removeItem(localStorageKey);
  }

  minimize(e) {
    e.stopPropagation();
    this.setState({
      minimize: true,
    });
    localStorage.setItem(localStorageKey, '1');
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          className={classnames(styles.button, {
            [styles.buttonHide]: !this.state.visible,
            [styles.buttonMini]: this.state.minimize,
          })}
          onClick={() => this.showDrawer()}
        >
          <img src="https://macacajs.github.io/macaca-datahub/logo/logo-color.svg" />
          <img
            onClick={(e) => this.minimize(e)}
            className={classnames(styles.minimize, styles.showMini)}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVQ4T2NkoBAwUqifYdQABkgY/P//P4GBgUGexAB9yMjIuABmwAEGBgZ7Eg04yMjI6EA1AyYwMDAYkOiCC4yMjAWj6QCaDkgMPBTlFAciAMdPFBFJiZyaAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    );
  }
}
