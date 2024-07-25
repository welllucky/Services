/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          resolverId: 2,
          resume: "Problema de Rede",
          description: "A conexão com a internet está instável desde a manhã.",
          date: new Date(),
          priority: "high",
          type: "problem",
          // unityId: "1",
          // sectorId: "1",
          status: "inProgress",
          createdBy: 1,
          updatedBy: 1,
          closedBy: null,
        },
        {
          resolverId: 1,
          resume: "Problema de Impressora",
          description: "A impressora não está imprimindo corretamente.",
          date: new Date(),
          priority: "medium",
          type: "problem",
          status: "notStarted",
          createdBy: 2,
          updatedBy: 2,
          closedBy: null,
        },
        {
          resolverId: 4,
          resume: "Solicitação de Acesso",
          description:
            "Solicito acesso ao sistema de gerenciamento de projetos.",
          date: new Date(),
          priority: "low",
          type: "request",
          status: "notStarted",
          createdBy: 3,
          updatedBy: 3,
          closedBy: null,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
