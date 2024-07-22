import sequelize from "database";
import { DataTypes, Model } from "sequelize";

class Ticket extends Model {
    public id!: number;

    public resume!: string;

    public description!: string;

    public date!: Date;

    public type!: "task" | "incident" | "problem" | "change";

    public priority!: "low" | "medium" | "high";

    public status!: "notStarted" | "inProgress" | "blocked" | "closed";

    public resolverId!: number;

    // public unityId!: number;

    // public sectorId!: number;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

    public readonly closedAt!: Date;

    public createdBy!: number;

    public updatedBy!: number;

    public closedBy!: number;
}

Ticket.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        resume: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        type: {
            type: DataTypes.ENUM("task", "incident", "problem", "change"),
            allowNull: false,
        },
        priority: {
            type: DataTypes.ENUM("low", "medium", "high"),
            allowNull: false,
            defaultValue: "low",
        },
        status: {
            type: DataTypes.ENUM(
                "notStarted",
                "inProgress",
                "blocked",
                "closed",
            ),
            allowNull: false,
            defaultValue: "notStarted",
        },
        resolverId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
        },
        // unityId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   references: {
        //     model: "unities",
        //     key: "id",
        //   },
        //   onUpdate: "CASCADE",
        //   onDelete: "CASCADE",
        // },
        // sectorId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   references: {
        //     model: "sectors",
        //     key: "id",
        //   },
        //   onUpdate: "CASCADE",
        //   onDelete: "CASCADE",
        // },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        closedAt: { type: DataTypes.DATE, allowNull: true },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
        },
        closedBy: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "Tickets",
        paranoid: true,
        deletedAt: true,
    },
);

export { Ticket };
