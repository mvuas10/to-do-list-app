"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "Do laundry",
          deadline: "28.05.20",
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: 1,
        },
        {
          task: "Water plants",
          deadline: "28.05.20",
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoitems", null, {});
  },
};
