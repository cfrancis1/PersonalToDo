const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

app.use(cors());
app.use(express.json());

app.post("/todolist", async(req, res) => {
    try {
        const { description } = req.body;
        const postNew = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(postNew.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/todolist", async(req, res) => {
    try {
        const getAll = await pool.query("SELECT * FROM todo");
        res.json(getAll.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/todolist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateOne = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
          );
      
          res.json("Todo was updated!");
        } catch (err) {
          console.error(err.message);
        }
      });

app.get("/todolist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const getOne = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(getOne.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/todolist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOne = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.log(err.message);
    }
  });

app.listen(5000, () => {
    console.log("server started on port 5000");
});