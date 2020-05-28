const { user, todoitem, todolist } = require("./models");

async function listsWithUsers() {
  const lists = await todolist.findAll({
    include: { model: user, attributes: ["name"] },
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((lists) => console.log(lists));
