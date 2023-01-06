import { Todo, ITodo } from '../../models';

export async function getTodos(): Promise<ITodo[]> {
  return Todo.find({});
}
