import sequelize from "@/database";
import { DataTypes, Model } from "sequelize";

class User extends Model {
  public id!: number;

  public register!: string;

  public name!: string;

  public email!: string;

  public hash!: string;

  lastConnection!: Date;

  public isBanned!: boolean;

  public canCreateTicket!: boolean;

  public canResolveTicket!: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly deletedAt!: Date | null;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    register: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    hash: { type: DataTypes.STRING, allowNull: false },
    lastConnection: { type: DataTypes.DATE, allowNull: true },
    isBanned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    canCreateTicket: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    canResolveTicket: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },

    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },

    deletedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "Users",
    sequelize,
    paranoid: true,
    deletedAt: true,
  },
);

export { User };
