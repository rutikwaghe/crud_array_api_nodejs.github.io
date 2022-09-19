import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import conn from "./connection.js";

//app run on port
const app = express();
const port = 5000;

//parse body
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//define routes
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("*", (req, res) => {
  res.send("That routes doesn't exists");
});

//app run on port
app.listen(port, () => {
  console.log("sever running on port", port);
});
