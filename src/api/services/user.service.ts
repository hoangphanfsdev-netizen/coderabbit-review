import User from '../../../models/user.model.js';

class UserService {
  public async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  public async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  public async createUser(name: string, email: string): Promise<User> {
    return User.create({ name, email });
  }
}

export default new UserService();
