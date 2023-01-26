import { Schema, Document, model } from 'mongoose';

export interface ITodo {
  task: string;
  completed: boolean;
}

export interface ITodoDocument extends ITodo, Document {}

const todoSchema = new Schema(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

export default model<ITodo>('Todo', todoSchema);
