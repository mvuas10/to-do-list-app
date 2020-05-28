"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "My thing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Weekend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Achievements",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("tags", null, {});
  },
};
