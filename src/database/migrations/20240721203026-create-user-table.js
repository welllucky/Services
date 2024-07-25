/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      register: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      hash: {
        type: Sequelize.STRING,
        // unique: true,
        allowNull: false,
      },
      lastConnection: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      isBanned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      canCreateTicket: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      canResolveTicket: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // roleId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "roles",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // },
      // sectorId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "sectors",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
