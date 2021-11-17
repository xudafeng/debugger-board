# debugger-board

> datahub debugger board

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/debugger-board.svg
[npm-url]: https://npmjs.org/package/debugger-board
[travis-image]: https://img.shields.io/travis/xudafeng/debugger-board.svg
[travis-url]: https://travis-ci.org/xudafeng/debugger-board
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/debugger-board.svg
[coveralls-url]: https://coveralls.io/r/xudafeng/debugger-board?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/debugger-board.svg
[download-url]: https://npmjs.org/package/debugger-board

## Installation

### Common Usage

[Live demo](https://xudafeng.github.io/debugger-board/)

* Script with attribute tag for append to point element

```html
<script append="body" src="//unpkg.com/debugger-board@latest/dist/debugger-board.js"></script>
```

* Script without attribute tag

```html
<script src="//unpkg.com/debugger-board@latest/dist/debugger-board.js"></script>
<script>
  window._debugger_board.append(document.body);
</script>
```

### Use with [datahub-proxy-middleware](//github.com/xudafeng/datahub-proxy-middleware)

```bash
$ npm i datahub-proxy-middleware --save-dev
```

And set showBoard `true`.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/17233599?v=4" width="100px;"/><br/><sub><b>Chan-Chun</b></sub>](https://github.com/Chan-Chun)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Mon Jul 26 2021 19:15:41 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
