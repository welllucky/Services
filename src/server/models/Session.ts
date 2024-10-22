import sequelize from "@/database";
import { DataTypes, Model } from "sequelize";

class Session extends Model {
  public id!: number | string;

  public token!: string;

  public userId!: string;

  public expiresAt!: Date;
}

Session.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    token: { type: DataTypes.STRING, allowNull: false },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "register",
      },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Sessions",
    paranoid: true,
    deletedAt: true,
  },
);

export { Session };
