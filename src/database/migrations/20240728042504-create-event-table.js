/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      order: { type: Sequelize.INTEGER, allowNull: false },
      emitterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tickets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "register",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        defaultValue: 0,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "register",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        defaultValue: 0,
      },
      deletedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "register",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      title: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING, allowNull: true },
      type: {
        type: Sequelize.ENUM("open", "close", "reopen", "message", "system"),
        allowNull: false,
      },
      visibility: {
        type: Sequelize.ENUM("public", "private"),
        allowNull: false,
        defaultValue: "public",
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Events");
  },
};
