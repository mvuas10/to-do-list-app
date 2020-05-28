//Find information in the DB using queries

const User = require("./models").user;
const TodoItem = require("./models").todoitem;

//1. Searches for all users and logs them.
async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log("Log all users:", users));

//2. Searches for all TodoItems and logs them (use plain: true)
async function getTodoItems() {
  const allTodoItems = await TodoItem.findAll();
  return allTodoItems.map((item) => item.get({ plain: true }));
}

// getTodoItems().then((todoItem) =>
//   console.log("Log all to do items:", todoItem)
// );

//3. Searches for a user by primary key.

async function getUserByPk(key) {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found";
}

// getUserByPk(1).then((userPk) => console.log("user Pk:", userPk));

//4. Creates a new user. (Once you manage to create this user, delete or comment the function call as to no run it again, if not we we'll get an error).

async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

// newUser().then((newuser) => console.log("Log new user:", newuser));

//5. Searches only for important TodoItems

async function importantTodos() {
  const todos = await TodoItem.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

importantTodos(4).then((result) => console.log(result));
