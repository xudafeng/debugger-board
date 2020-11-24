import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './App.module.less';

const localStorageKey = '_debugger_board_minimize';

const inIframe = window.self !== window.top;

const App = () => {
  const [visible, setVisible] = useState(!inIframe);
  const [minimize, setMinimize] = useState(localStorage.getItem(localStorageKey));

  const showDrawer = () => {
    setVisible(false);
    window._debugger_board_show_drawer();
  };

  const onMinimize = (e) => {
    e.stopPropagation();
    setMinimize(true);
    localStorage.setItem(localStorageKey, '1');
  };

  const _debugger_board_show_button = () => {
    setVisible(true);
    setMinimize(false);
    localStorage.removeItem(localStorageKey);

  };
  window._debugger_board_show_button = window._debugger_board_show_button || _debugger_board_show_button;

  return (
    <div className={styles.container}>
      <div
        className={classnames(styles.button, {
          [styles.buttonHide]: !visible,
          [styles.buttonMini]: minimize,
        })}
        onClick={showDrawer}
      >
        <img src="https://macacajs.github.io/macaca-datahub/logo/logo-color.svg" />
        <img
          onClick={onMinimize}
          className={classnames(styles.minimize, styles.showMini)}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVQ4T2NkoBAwUqifYdQABkgY/P//P4GBgUGexAB9yMjIuABmwAEGBgZ7Eg04yMjI6EA1AyYwMDAYkOiCC4yMjAWj6QCaDkgMPBTlFAciAMdPFBFJiZyaAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  );
};

export default App;
