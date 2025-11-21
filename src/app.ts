import express, { Application, Request, Response, NextFunction } from 'express';
import apiRouter from './api/routes/index.js';
import 'reflect-metadata';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandling();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send('API is running.');
    });

    this.app.use('/api', apiRouter);
  }
  
  private errorHandling(): void {
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
  }
}

export default new App().app;
