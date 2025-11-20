import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';
import { Optional } from 'sequelize';

const jwtSecret = "your_super_secret_key"; 
const jwt_expires_in = '1h';

class AuthService {
  public async register(
    data: Optional<User, 'id'>
  ): Promise<{ user: User; token: string }> {
    const user = await User.create(data);

    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
      expiresIn: jwt_expires_in,
    });

    return { user, token };
  }

  public async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.comparePassword(password))) {
      console.log(`Login attempt failed for email: ${email}`);
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
      expiresIn: jwt_expires_in,
    });

    return { user, token };
  }
}

export default new AuthService();
