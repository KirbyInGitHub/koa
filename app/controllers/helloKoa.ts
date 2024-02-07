import { Context } from 'koa';

export default {
  get(ctx: Context): void {
    ctx.body = {
      name: 'hello Koa',
    };
  },
};