import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Drawer.module.less';

export default class Drawer extends Component {
  state = { visible: false, containerVisible: false };

  showDrawer = () => {
    this.setState({
      containerVisible: true,
    });
    setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 16);
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
    setTimeout(() => {
      this.setState({
        containerVisible: false,
      });
    }, 500);
    window._debugger_board_button_ref.showButton();
  };

  render() {
    if (!window._debugger_board_datahub_options) {
      return null;
    }
    const { port = 9200, hostname = '127.0.0.1' } = window._debugger_board_datahub_options;
    return (
      <div
        onClick={() => this.onClose()}
        className={classnames(styles.drawer, {
          [styles.drawerHide]: !this.state.visible,
          [styles.drawerNone]: !this.state.containerVisible,
        })}
        style={{ height: window.innerHeight }}
      >
        <div className={classnames(styles.drawerContent, {
          [styles.drawerContentShow]: this.state.visible,
        })}>
          <iframe
            src={`http://${hostname}:${port}/dashboard`}
            width="100%" height="100%" frameBorder="0"
          />
        </div>
      </div>
    );
  }
}
