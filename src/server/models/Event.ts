import sequelize from "@/database";
import { DataTypes, Model } from "sequelize";

export class Event extends Model {
  public id!: number;

  public order!: number;

  public emitterId!: number;

  public createdBy!: number;

  public title!: string;

  public description!: string;

  public type!: "open" | "close" | "reopen" | "message" | "system";

  public visibility!: "public" | "private";

  public readonly createdAt!: Date;

  public deletedAt!: Date | null;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    emitterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: "Tickets",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: "Users",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visibility: {
      type: DataTypes.ENUM("public", "private"),
      allowNull: false,
      defaultValue: "public",
    },
    type: {
      type: DataTypes.ENUM("open", "close", "reopen", "message", "system"),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Events",
    paranoid: true,
    createdAt: true,
    deletedAt: true,
  },
);
