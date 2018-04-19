# debugger-board

> datahub debugger board

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/debugger-board.svg?style=flat-square
[npm-url]: https://npmjs.org/package/debugger-board
[travis-image]: https://img.shields.io/travis/macacajs/debugger-board.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/debugger-board
[coveralls-image]: https://img.shields.io/coveralls/macacajs/debugger-board.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/debugger-board?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/debugger-board.svg?style=flat-square
[download-url]: https://npmjs.org/package/debugger-board

## Installation

### Common Usage

[Live demo](https://macacajs.github.io/debugger-board/)

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

### Use with [datahub-proxy-middleware](//github.com/macacajs/datahub-proxy-middleware)

```bash
$ npm i datahub-proxy-middleware --save-dev
```

And set showBoard `true`.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars1.githubusercontent.com/u/17233599?v=4" width="100px;"/><br/><sub><b>Chan-Chun</b></sub>](https://github.com/Chan-Chun)<br/>|[<img src="https://avatars1.githubusercontent.com/u/11460601?v=4" width="100px;"/><br/><sub><b>zivyll</b></sub>](https://github.com/zivyll)<br/>
| :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto upated at `Thu Apr 19 2018 22:58:33 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
