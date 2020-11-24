import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Drawer.module.less';

const Drawer = () => {
  const [visible, setVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
    setTimeout(() => setContainerVisible(false), 500);
    window._debugger_board_show_button();
  };

  const _debugger_board_show_drawer = () => {
    setContainerVisible(true);
    setTimeout(() => setVisible(true), 16);
  };
  window._debugger_board_show_drawer = window._debugger_board_show_drawer || _debugger_board_show_drawer;

  if (!window._debugger_board_datahub_options) {
    return null;
  }
  const { port = 9200, hostname = '127.0.0.1' } = window._debugger_board_datahub_options;
  return (
    <div
      onClick={onClose}
      className={classnames(styles.drawer, {
        [styles.drawerHide]: !visible,
        [styles.drawerNone]: !containerVisible,
      })}
      style={{ height: window.innerHeight }}
    >
      <div className={classnames(styles.drawerContent, {
        [styles.drawerContentShow]: visible,
      })}>
        <iframe
          src={`http://${hostname}:${port}/dashboard`}
          width="100%" height="100%" frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Drawer;
