import React, { Component } from 'react';
import {
  Drawer,
} from 'antd';

import styles from './App.module.less';

export default class App extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    if (!window._debugger_board_datahub_options) {
      return null;
    }
    const { port } = window._debugger_board_datahub_options;
    return (
      <div>
        <div
          className={styles.container}
          onClick={this.showDrawer}
        >
          <img src="https://macacajs.github.io/macaca-datahub/logo/logo-color.svg" />
        </div>
        <Drawer
          className={styles.drawerContainer}
          title={null}
          width="90%"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <iframe
            src={`http://127.0.0.1:${port}/dashboard`}
            width="100%" height="100%" frameBorder="0"
          />
        </Drawer>
      </div>
    );
  }
}
