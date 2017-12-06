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
[node-image]: https://img.shields.io/badge/node.js-%3E=_7-green.svg?style=flat-square
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

## License

The MIT License (MIT)
