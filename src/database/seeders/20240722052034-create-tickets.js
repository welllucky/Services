/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          resolverId: 242424242,
          resume: "Problema de Rede",
          description: "A conexão com a internet está instável desde a manhã.",
          date: new Date(),
          priority: "high",
          type: "problem",
          // unityId: "11242002",
          // sectorId: "11242002",
          status: "inProgress",
          createdBy: 11242002,
          updatedBy: 11242002,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resolverId: 11242002,
          resume: "Problema de Impressora",
          description: "A impressora não está imprimindo corretamente.",
          date: new Date(),
          priority: "medium",
          type: "problem",
          status: "notStarted",
          createdBy: 242424242,
          updatedBy: 242424242,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resolverId: 1111111,
          resume: "Solicitação de Acesso",
          description:
            "Solicito acesso ao sistema de gerenciamento de projetos.",
          date: new Date(),
          priority: "low",
          type: "request",
          status: "notStarted",
          createdBy: 9999992,
          updatedBy: 9999992,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
