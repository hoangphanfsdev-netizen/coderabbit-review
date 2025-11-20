import { Request, Response } from 'express';
import AuthService from '../services/auth.service.js';

class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { user, token } = await AuthService.register(req.body);
      const userResponse = user.toJSON();
      delete userResponse.password;

      res.status(201).json({ user: userResponse, token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: 'Registration failed', error: error.message });
      } else {
        res.status(400).json({ message: 'Registration failed' });
      }
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthService.login(email, password);
      const userResponse = user.toJSON();
      delete userResponse.password;

      res.status(200).json({ user: userResponse, token });
    } catch (error) {
       if (error instanceof Error) {
        res.status(401).json({ message: 'Login failed', error: error.message });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    }
  }
}

export default new AuthController();
