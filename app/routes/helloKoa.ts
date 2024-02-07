import koaRouter from 'koa-router';
import helloKoa from '../controllers/helloKoa';

const router = new koaRouter({ prefix: '/api' });

router.get('/get', helloKoa.get);

export default router;