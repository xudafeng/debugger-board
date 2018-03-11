'use strict';

import {
  webpackHelper,
} from 'macaca-wd';
import Promise from 'bluebird';

const {
  driver,
  BASE_URL,
} = webpackHelper;

describe('test/debugger-board.test.js', () => {

  describe('page func testing', () => {

    before(() => {
      return driver
        .initWindow({
          width: 375,
          height: 667,
          deviceScaleFactor: 2
        })
        .getUrl(BASE_URL);
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('panel should be show', () => {
      return driver
        .sleep(3000)
        .elementTouch('#_debugger_board_app > div._debugger_board_thumbnail', {
          type: 'start'
        });
    });

    it('panel should be switch', () => {
      const queue = [1, 2, 3, 4, 3, 2, 1];

      return driver
        .sleep(1000)
        .then(() => {
          return Promise.reduce(queue, (i, item) => {
            const selector = `div._debugger_board_nav._debugger_board_common_bar > span:nth-child(${item})`;
            return driver
              .elementTouch(selector, {
                type: 'start'
              })
              .sleep(1000);
          });
        });
    });

    it('addLog should be execute', () => {
      const queue = [1, 2, 3, 4, 3, 2, 1];

      return driver
        .sleep(1000)
        .execute(`window.addLog('${Date.now()}')`)
        .execute(`window.addLog('${Date.now()}')`)
        .execute(`window.addLog('${Date.now()}')`)
        .execute(`window.addLog('${Date.now()}')`)
        .execute(`window.addLog('${Date.now()}')`);
    });

  });

});
