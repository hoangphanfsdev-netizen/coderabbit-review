import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import { authenticateJWT } from '../middlewares/auth.middleware.js';

class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', authenticateJWT, UserController.getAllUsers);
    this.router.get('/:id', authenticateJWT, UserController.getUserById);
    this.router.post('/', UserController.createUser); // Keep public for registration
  }
}

export default new UserRoutes().router;
