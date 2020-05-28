//Let's begin with the users => todoList relation.
//1. In our User file we have to add a hasMany() relation

"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone: DataTypes.INTEGER,
    },
    {}
  );
  user.associate = function (models) {
    //1. In our User file we have to add a hasMany() relation
    user.hasMany(models.todoList);
  };
  return user;
};
