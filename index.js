const Koa = require("koa");
const route = require("koa-router");
const serve = require("koa-static");
const path = require("path");

const app = new Koa();
// 1.主页静态网页 把静态页统一放到public中管理
const home = serve(path.join(__dirname) + "/public/");
// 3.分配路由
app.use(home);
app.use(async ctx => {
  ctx.body = "Hello World";
});

//app.use(route.get('/', hello));
app.on("error", err => {
  log.error("server error", err);
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log("服务器启动成功");
console.log("siteURL: http://localhost:%s", port);
