import { v4 as uuid } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User Added Successfully");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  const delUser = users.filter((user) => user.id === req.params.id);
  console.log(req.params.id, "req.params.id", delUser);
  res.send("User Deleted Successfully");
};

export const updateUser = (req, res) => {
  const updateUser = users.find((user) => user.id === req.params.id);
  updateUser.name = req.body.name;
  updateUser.email = req.body.email;
  res.send("User Updated Successfully");
};
