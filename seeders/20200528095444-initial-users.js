"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Minh Vu",
          email: "minh@minh.com",
          phone: 1800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laurens Heemskerk",
          email: "laurens@laurens.com",
          phone: 180001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
