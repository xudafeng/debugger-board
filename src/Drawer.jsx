import React from 'react';
import classnames from 'classnames';

import styles from './Drawer.module.less';

const Drawer = (props) => {
  const {
    state: {
      drawerVisible, drawerContentVisible,
    },
    onDrawerClose,
    drawerContent,
  } = props;
  return (
    <div
      onClick={onDrawerClose}
      className={classnames(styles.wrapper, {
        [styles.hide]: !drawerVisible,
        [styles.none]: !drawerContentVisible,
      })}
      style={{ height: window.innerHeight }}
    >
      <div className={classnames(styles.content, {
        [styles.show]: drawerVisible,
      })}>
        {drawerContent}
      </div>
    </div>
  );
};

export default Drawer;
