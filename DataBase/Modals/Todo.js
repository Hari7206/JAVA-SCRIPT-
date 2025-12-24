import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
