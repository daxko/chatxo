var koa = require('koa')
  , mount = require('koa-mount')
  , serve = require('koa-static')
  , path = require('path');

const app = koa();

app.use(serve(path.resolve(__dirname, '../public')));

app.listen(3000);
console.log('listening on port 3000');