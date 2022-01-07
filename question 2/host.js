const express = require("express");
const app = express();
const cors = require("cors");
const { addMessage, getMessages } = require("./connection");

app.use(express.json());
app.use(cors());

app.get("/messages", async (req, res) => {
  const chat = await getMessages();
  res.json(chat);
});

app.post("/insert", async (req, res) => {
  console.log(req.body);
  await addMessage(req.body);
  res.json("success");
});

app.listen(4000, () => {
  console.log("server started!!!!!!");
});
