const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});
app.on('error', err => {
    log.error('server error', err)
});

app.listen(3000);