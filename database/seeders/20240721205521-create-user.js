/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          register: "11242002",
          name: "Well Batist",
          email: "well@l3.com",
          hash: "123456789",
          canCreateTicket: true,
          canResolveTicket: true,
        },
        {
          register: "1111111",
          name: "Bad User",
          email: "baaad@l3.com",
          hash: "123456789",
          canCreateTicket: true,
          canResolveTicket: true,
          isBanned: true,
        },
        {
          register: "242424242",
          name: "Madara Batist",
          email: "madara@l3.com",
          hash: "123456789",
          canCreateTicket: true,
          canResolveTicket: false,
        },
        {
          register: "9999992",
          name: "Guest User",
          email: "guest@l3.com",
          hash: "123456789",
          canCreateTicket: false,
          canResolveTicket: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
