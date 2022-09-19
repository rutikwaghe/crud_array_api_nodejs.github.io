import { v4 as uuid } from "uuid";
import express from "express";
import bodyParser from "body-parser";
import conn from "../connection.js";
import { Router } from "express";

let users = [];

export const getAllUsers = (req, res) => {
  // res.send(users);
  //
  let query = "select * from registration";
  conn.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
};

export const createUser = (req, res) => {
  // const user = req.body;
  // users.push({ ...user, id: uuid() });
  // res.send("User Added Successfully");
  //
  let name = req.body.name;
  let email = req.body.email;
  let query = "insert into registration (name,email) values (?,?)";

  conn.query(query, [name, email], (err, results) => {
    console.log(results, "results");
    if (!err) {
      return res.status(200).json({ message: "User Added successfull" });
    }
    return res.status(500).json(err);
  });
};

export const getUser = (req, res) => {
  // const singleUser = users.filter((user) => user.id === req.params.id);
  // res.send(singleUser);
  let id = req.body.id;
  let query = "select * from registration where id=?";
  conn.query(query, [id], (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
};

export const deleteUser = (req, res) => {
  // const delUser = users.filter((user) => user.id !== req.params.id);
  // console.log(req.params.id, "req.params.id", delUser);
  // users = delUser;
  // res.send({
  //   msg: "User Deleted Successfully",
  //   data: users,
  // });
  const id = req.params.id;
  let query = "delete from registration where id=?";
  conn.query(query, [id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
};

export const updateUser = (req, res) => {
  // const updateUser = users.find((user) => user.id === req.params.id);
  // updateUser.name = req.body.name;
  // updateUser.email = req.body.email;
  // res.send("User Updated Successfully");
  //
  const id = req.params.id;
  let updateUser = req.body;
  let query = "update registration set name=?, email=? where id=?";
  conn.query(query, [updateUser.name, updateUser.email, id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "User does not found" });
      }
      return res
        .status(200)
        .json({ message: "User profile updated successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
};
