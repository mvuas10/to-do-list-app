//Let's begin with the users => todoList relation.
//Now onto the todoList model. Here we have to do a very similar change but using belongsTo() instead of hasMany(), this way:

"use strict";
module.exports = (sequelize, DataTypes) => {
  const todolist = sequelize.define(
    "todolist",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  todolist.associate = function (models) {
    //2. To do list belong to 1 user
    todolist.belongsTo(models.user);
    //1a. To do list has many to do items
    todolist.hasMany(models.todoitem);
  };
  return todolist;
};
