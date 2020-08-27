import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { resolve } from 'path';
import routes from '../routes/index';

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.middeware();
    this.routes();
  }

  public middeware() {
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(cors({ origin: '' }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(
      '/uploads',
      express.static(resolve(__dirname, '..', '..', 'uploads'))
    );
  }

  public routes() {
    this.app.use(routes);
  }
}

export default new App().app;
