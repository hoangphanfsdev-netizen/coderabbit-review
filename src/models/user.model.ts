import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database/connection.js';

// Interface for User attributes
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interface for User creation attributes (some fields are optional)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'users',
    sequelize, // passing the sequelize instance is required
  }
);

export default User;
