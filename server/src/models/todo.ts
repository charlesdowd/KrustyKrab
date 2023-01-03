import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ITodo {
  task: string;
  completed: boolean;
}

const todoSchema = new Schema(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<ITodo>('Todo', todoSchema);
