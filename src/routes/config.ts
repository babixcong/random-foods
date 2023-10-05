import {Application} from 'express';
import routerFood from './food';

export default function (app: Application) {
  app.use('/', routerFood);
};
