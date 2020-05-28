"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define(
    "todoitem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  todoitem.associate = function (models) {
    //2a. To do item belongs to to do list
    todoitem.belongsTo(models.todolist);
  };
  return todoitem;
};
