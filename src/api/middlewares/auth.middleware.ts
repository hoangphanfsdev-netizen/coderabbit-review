import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

const jwtSecret = "your_super_secret_key"; 

interface RequestWithUser extends Request {
  user?: User;
}

export const authenticateJWT = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      
      req.user = decoded;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};
