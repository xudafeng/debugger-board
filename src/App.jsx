import React, { Component } from 'react';
import { Drawer } from 'antd';
import classnames from 'classnames';

import 'antd/dist/antd.less';
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
    const { port = 9200, hostname = '127.0.0.1' } = window._debugger_board_datahub_options;
    return (
      <div className={styles.container}>
        <div
          className={classnames(styles.button, {
            [styles.hide]: this.state.visible,
          })}
          onClick={this.showDrawer}
        >
          <img src="https://macacajs.github.io/macaca-datahub/logo/logo-color.svg" />
        </div>
        <Drawer
          className={styles.drawer}
          title={null}
          width="90%"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{ height: window.innerHeight }}
        >
          <iframe
            src={`http://${hostname}:${port}/dashboard`}
            width="100%" height="100%" frameBorder="0"
          />
        </Drawer>
      </div>
    );
  }
}
