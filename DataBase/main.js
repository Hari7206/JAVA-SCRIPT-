import mongoose from 'mongoose';
import express from 'express';
import Todo from './Modals/Todo.js'; // .js extension is needed

const app = express();
const port = 3000;

// Connect to MongoDB (local)
mongoose.connect('mongodb://127.0.0.1:27017/todo');

app.get('/', (req, res) => {
  const todo = new Todo({
    title: "Dev Projects",
    description: "Complete 2 projects this week",
    isDone: true
  });

  todo.save(); // simple, no await
  res.send('Todo added! Check your DB.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
