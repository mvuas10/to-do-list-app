//We are going to use this migration to add the necessary columns to our models in order to tie our data together as we want to.
//Let's begin with the users => todoList relation.
//let's declare those columns. We can see we are going to need a userId column in our todoList table, to tie lists to users.

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //3. Set up relation to tie lists to users
    await queryInterface.addColumn("todolists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //3a. Set up relation to tie items to list
    await queryInterface.addColumn("todoitems", "todoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todolists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todolists", "userId");
    await queryInterface.removeColumn("todoitems", "todoListId");
  },
};

//$ npx sequelize-cli db:migrate
