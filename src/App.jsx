import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './App.module.less';

const inIframe = window.self !== window.top;

const useViewModel = (props) => {
  const { localStorageKey = '_debugger_board_minimize' } = props;
  const [toolbarVisible, setToolbarVisible] = useState(!inIframe);
  const [toolbarMinimize, setToolbarMinimize] = useState(localStorage.getItem(localStorageKey));

  const onMinimize = () => {
    setToolbarMinimize(true);
    localStorage.setItem(localStorageKey, '1');
  };
  const _debugger_board_show_button = () => {
    setToolbarVisible(true);
    setToolbarMinimize(false);
    localStorage.removeItem(localStorageKey);
  };
  const showDrawer = () => {
    setToolbarVisible(false);
    window._debugger_board_show_drawer();
  };
  window._debugger_board_show_button = window._debugger_board_show_button || _debugger_board_show_button;
  return {
    state: {
      toolbarVisible,
      toolbarMinimize
    },
    onMinimize,
    showDrawer,
  };
};

const App = (props) => {
  const {
    state: {
      toolbarVisible,
      toolbarMinimize,
    },
    onMinimize,
    showDrawer,
  } = useViewModel(props);
  const {
    toolbarIcon,
    toolbarIconSize = 36,
  } = props; 
  return (
    <>
      <div
        className={classnames(styles.toolbar, {
          [styles.hide]: !toolbarVisible,
          [styles.mini]: toolbarMinimize,
        })}
        onClick={showDrawer}
      >
        <img
          src={toolbarIcon}
          width={toolbarIconSize}
          height={toolbarIconSize}
        />
        <img
          onClick={e => {
            e.stopPropagation();
            onMinimize();
          }}
          className={classnames(styles.minimizeButton, styles.mini)}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVQ4T2NkoBAwUqifYdQABkgY/P//P4GBgUGexAB9yMjIuABmwAEGBgZ7Eg04yMjI6EA1AyYwMDAYkOiCC4yMjAWj6QCaDkgMPBTlFAciAMdPFBFJiZyaAAAAAElFTkSuQmCC"
        />
      </div>
    </>
  );
};

export default App;
