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

### Normal

* Script with attribute

```Html
<script append="body" src="https://unpkg.com/debugger-board/dist/debugger-board.js"></script>
```



* Script without attribute

```Html
<script src="https://unpkg.com/debugger-board/dist/debugger-board.js"></script>
<script>
  window._debugger_board.append(document.body);
</script>
```



### In Datahub-proxy-middleware

```bash
$ npm i debugger-board --save
```

> How [datahub-proxy-middleware.js](https://github.com/macacajs/datahub-proxy-middleware/blob/805badcb84a2469902aaced510072130f59f9aae/lib/datahub-proxy-middleware.js#L59) include it.
>
> In [datahub-proxy-middleware](https://github.com/macacajs/datahub-proxy-middleware)



## CDN

### unpkg

https://unpkg.com/debugger-board/dist/debugger-board.js



## License

The MIT License (MIT)
