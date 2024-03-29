import Koa from 'koa';
import koaBody from 'koa-body';
import koaViews from 'koa-views';
import koaStatic from 'koa-static';
import koaLogger from 'koa-logger';
import router from './app/routes/helloKoa';
import path from 'path';

const app = new Koa();

app.use(koaLogger())
app.use(koaBody());

app.use(koaViews(path.join(__dirname, './views'), {
  extension: 'ejs',
}));

app.use(koaStatic(path.join(__dirname, './public'), {
  maxAge: 30 * 24 * 60 * 60 * 1000,
}));


app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);