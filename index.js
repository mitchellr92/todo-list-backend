const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const knex = require("knex");
const dbConfig = require("./knexfile.js");
const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan());
server.use(helmet());

const PORT = 1000;

server.post("/api/todos", (req, res) => {
  const newTodo = req.body;

  if (newTodo.title) {
    db("todos")
      .insert(newTodo)
      .then(todoId => {
        res.status(200).json(todoId);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create todo item" });
      });
  } else {
    res.status(500).json({ message: "missing title" });
  }
});

server.get("/api/todos", (req, res) => {
  db("todos")
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get todos" });
    });
});

server.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  db("todos")
    .where({ id })
    .del()
    .then(todo => {
      res.status(201).json("Todo item has been successfully deleted");
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete todo" });
    });
});

server.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
