const { user, todoitem, todolist, tag } = require("./models");

async function listsWithUsers() {
  const lists = await todolist.findAll({
    include: { model: user, attributes: ["name"] },
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todolist, attributes: ["name"] },
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

//1. Get one user by id with his lists.
async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todolist] });
  return result.get({ plain: true });
}

// getUserWithList(1).then((user) => console.log("user by id with lists", user));

//2. Get important TodoItems with the name of the list they belong to.
async function importantTodos() {
  const todos = await todoitem.findAll({
    where: { important: true },
    include: { model: todolist, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

importantTodos().then((items) => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todolist,
        attributes: ["name"],
        include: { model: todoitem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

// fullUserById(1).then((user) => console.log("User with tasks", user));

async function getItemsAndTags() {
  const items = await todoitem.findAll({
    include: [{ model: tag, attributes: ["title"] }],
  });
  return items.map((item) => item.get({ plain: true }));
}

getItemsAndTags().then((items) => console.log(items));
