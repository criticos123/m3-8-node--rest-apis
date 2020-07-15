const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
handleClients = (req, res) => {
  res.status(200).json({ clients });
};
handleId = (req, res, next) => {
  let id = req.params.id;
  clients.find((user) => {
    if (user.id === id) {
      res.status(200).json({ user });
    } else {
      next();
    }
  });
};
newClient = (req, res) => {
  let body = req.body;
  const foundUser = clients.find((user) => {
    if (user.email !== req.body.email) {
      clients.push(body);
    } else {
      return user;
    }
  });
  console.log(foundUser);
  if (!foundUser) {
    res.status(200).json({ status: "success" });
  } else {
    res.status(400).json({ error: "already exists" });
  }
};

handleRemove = (req, res) => {
  let id = req.params.id;
  const userObj = clients.find((user) => user.id === id);
  if (userObj) {
    const UserId = clients.map((event) => {
      return event.id;
    });
    let indexUser = UserId.indexOf(userObj.id);
    clients.splice(indexUser);
    res.status(200).json({ status: "success" });
  } else {
    res.status(404).json({ error: "user does not exist" });
  }
};
handleFour = (req, res) => {
  res.status(404).json({ error: "error!" });
};
module.exports = {
  handleClients,
  handleId,
  newClient,
  handleRemove,
  handleFour,
};
