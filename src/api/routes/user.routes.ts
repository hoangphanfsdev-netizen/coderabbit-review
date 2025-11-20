import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', UserController.getAllUsers);
    this.router.get('/:id', UserController.getUserById);
    this.router.post('/', UserController.createUser);
  }
}

export default new UserRoutes().router;
