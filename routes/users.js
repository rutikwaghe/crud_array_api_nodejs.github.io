import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/getUser/:id", getUser);
router.get("/getAllUsers", getAllUsers);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

export default router;
