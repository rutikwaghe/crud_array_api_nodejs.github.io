import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
import conn from "../connection.js";

const router = express.Router();

router.post("/getUser", getUser);
router.get("/getAllUsers", getAllUsers);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

export default router;
